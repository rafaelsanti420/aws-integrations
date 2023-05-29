import AWS from 'aws-sdk'
import { ApplicationConfiguration } from './aws-config'

AWS.config.update({
  region: ApplicationConfiguration.region, // Replace with your desired region
  accessKeyId: ApplicationConfiguration.accessKeyId,
  secretAccessKey: ApplicationConfiguration.secretAccessKey,
})

const sqs = new AWS.SQS()
const queueUrl =
  'https://sqs.us-east-1.amazonaws.com/257676347760/message-queue'

const sendMessageToQueue = async (message: string) => {
  const params = {
    MessageBody: message,
    QueueUrl: queueUrl,
  }

  try {
    const result = await sqs.sendMessage(params).promise()
    console.log('Message sent:', result.MessageId)
  } catch (error) {
    console.error('Error sending message:', error)
  }
}

// Example usage:
sendMessageToQueue('Hello, SQS!')

const receiveMessagesFromQueue = async () => {
  const params = {
    QueueUrl: queueUrl,
    MaxNumberOfMessages: 10, // Adjust as per your requirements
    WaitTimeSeconds: 20, // Adjust as per your requirements
  }

  try {
    const result = await sqs.receiveMessage(params).promise()
    const messages = result.Messages

    if (messages) {
      messages.forEach(message => {
        console.log('Received message:', message.Body)

        // Delete the received message from the queue
        deleteMessageFromQueue(message.ReceiptHandle ?? '')
      })
    } else {
      console.log('No messages in the queue.')
    }
  } catch (error) {
    console.error('Error receiving messages:', error)
  }
}

// Example usage:
receiveMessagesFromQueue()

const deleteMessageFromQueue = async (receiptHandle: string) => {
  const params = {
    QueueUrl: queueUrl,
    ReceiptHandle: receiptHandle,
  }

  try {
    await sqs.deleteMessage(params).promise()
    console.log('Message deleted.')
  } catch (error) {
    console.error('Error deleting message:', error)
  }
}

// Example usage:
// Pass the receipt handle obtained from received messages
// deleteMessageFromQueue('RECEIPT_HANDLE')
