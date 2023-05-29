// Создать HTTP сервер на порту 3010
// При запуске приложения задавать снаружи переменные окружения:
// NODE_ENV=development
// APP_SECRET=secret
// ok\
// Создать текстовый файл (users.txt) с пользователями (id, email, name, password), формат:
// 2  /// Henry ///henry@mail.loc /// password1
// 7  /// Olivia ///  olivia@mail.loc ///    password2
// ... enormous file

// ok
// …
// (может быть любое кол-во пробелов до, после и между слов, могут быть пустые строки)
// ok
//
// Создать сервис для работы с файлом (считывать содержимое каждый раз, как будто бы это запросы к базе данных), например, users.service.js //
// ok
//
// Создать JSON API endpoints:
// GET /users - получение всех пользователей
// GET /users/:id - получение пользователя по id; возвращать 404, если не найден
// Поле пароля не должно возвращаться клиенту
//
// Бонус-подзадачи:
// Реализовать кэширование ответов в памяти c TTL 10 секунд
// Реализовать защиту ендпойнтов с помощью токена в заголовке (использовать APP_SECRET из env как токен):
// Authorization: Bearer {TOKEN}
//
// **/

function pipe<T>(...fns: Array<(arg: T) => T>): (arg: T) => T {
  return (arg: T) => fns.reduce((value, fn) => fn(value), arg)
}

import express from 'express'
import * as fs from 'fs'

const app = express()
const port = 3000

const cache = new Map()
const ttl = 10000

// NODE_ENV=development
// APP_SECRET=secret
//
// const { NODE_ENV, APP_SECRET } = process.env
type IUserFromFile = {
  id: number
  name: string
  email: string
}

type ICachedUser = {
  life: number
} & IUserFromFile

class User implements IUserFromFile {
  id: number
  name: string
  email: string
  constructor(id: number, name: string, email: string) {
    this.id = id
    this.name = name
    this.email = email
  }
}

class CachedUser extends User implements ICachedUser {
  id: number
  name: string
  email: string
  life: number
  constructor(ctor: User) {
    super(ctor.id, ctor.name, ctor.email)
    this.life = Date.now() + ttl
  }
}

app.get('/users/', (req, res) => {
  const users: User[] = getUsersFromFile()
  res.json(users)
})
// limit? search?
app.get('/users/:id', (req, res) => {
  const foundUser: User | undefined = getUserFromFile(Number(req.params.id))

  if (foundUser) {
    res.json(foundUser)
  } else {
    res.status(404).json({ errors: ['id not found'] })
  }
})

app.listen(port, () => {
  console.log(`Server started at ${port}`)
})

const getUserAndCache = (id: number): User | undefined => {
  const users = getUsersFromFile()
  const user = users.find(user => user.id === Number(id))
  if (user) {
    const cachedUser: ICachedUser = new CachedUser(user)
    cache.set(id, cachedUser)
  }
  return user
}

const getCachedUser = (id: number): User | undefined => {
  const cachedUser: ICachedUser = cache.get(id)
  const isStale = Date.now() > (cachedUser.life ?? 0) + ttl

  if (isStale) {
    cache.delete(id)
    return getUserAndCache(id)
  } else {
    return new User(cachedUser.id, cachedUser.name, cachedUser.email)
  }
}

const getUserFromFile = (id: number): User | undefined => {
  return cache.has(id) ? getCachedUser(id) : getUserAndCache(id)
}

function getUsersFromFile(): User[] {
  const content: string = fs.readFileSync('../users.txt', 'utf-8')
  const lines: string[] = content.split('\n').filter(line => line.trim() !== '')

  // array of user objects
  const users: User[] = lines.map(line => {
    const line2 = line.split('///')
    const id = Number(line2[0].trim())
    const name = line2[1].trim()
    const email = line2[2].trim()
    return new User(id, name, email)
  })

  return users
}
