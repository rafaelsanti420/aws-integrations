export class ApplicationConfiguration {
  static readonly region = process.env.REGION ?? 'us-east-1'
  static readonly accessKeyId = process.env.ACCESSKEYID ?? ''
  static readonly secretAccessKey = process.env.SECRETACCESKEY ?? ''
}
