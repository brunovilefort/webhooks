exports.handler = (context, event, callback) => {
  const client = context.getTwilioClient()
  console.log("Sending text...");
  console.log(`Transcription: ${event.TranscriptionText}`);
  client.messages.create({
    to: context.PHONE_NUMBER,
    from: context.TWILIO_NUMBER,
    body: `New idea :bulb:: ${event.TranscriptionText}`
  }).then(message => {
    console.log(`Sent message: ${message.sid}`);
    callback(null, `Sent message: ${message.sid}`)
  }).catch(err => {
    console.error(`Uh oh: ${error}`)
    callback(err)
  })
}