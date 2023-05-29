class DataService {
  static singleton = new DataService()
  public items = []
}

const serviceInstanceReference = DataService.singleton.items
console.log(serviceInstanceReference)
