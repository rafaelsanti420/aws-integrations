import AWS from 'aws-sdk'
import { ApplicationConfiguration } from './aws-config'

// Configure AWS credentials
AWS.config.update({
  region: ApplicationConfiguration.region, // Replace with your desired region
  accessKeyId: ApplicationConfiguration.accessKeyId,
  secretAccessKey: ApplicationConfiguration.secretAccessKey,
})

// Create an SNS client instance
const sns = new AWS.SNS()
const subscribeToTopic = async (
  topicArn: string,
  endpoint: string
): Promise<string | undefined> => {
  const params = {
    Protocol: 'sqs', // e.g., 'email', 'sms', 'http', 'https', etc.
    TopicArn: topicArn,
    Endpoint: endpoint,
  }

  try {
    const result = await sns.subscribe(params).promise()
    console.log(result)
    return result.SubscriptionArn
  } catch (error) {
    console.error('Error subscribing to topic:', error)
    throw error
  }
}

// Usage:
const topicArn = 'arn:aws:sns:us-east-1:257676347760:notification-topic'
const endpoint = 'arn:aws:sqs:us-east-1:257676347760:message-queue'

subscribeToTopic(topicArn, endpoint)
  .then(subscriptionArn => {
    console.log('Subscribed successfully. Subscription ARN:', subscriptionArn)
  })
  .catch(error => {
    console.error('Failed to subscribe:', error)
  })
