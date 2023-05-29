export class ApplicationConfiguration {
  static readonly region = process.env.REGION ?? 'us-east-1'
  static readonly accessKeyId =
    process.env.ACCESSKEYID ?? 'AKIATX7VVBFYP6HOTE7H'
  static readonly secretAccessKey =
    process.env.SECRETACCESKEY ?? '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'
}
