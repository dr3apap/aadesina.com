//import { SMTPClient } from 'https://deno.land/x/denomailer/mod.ts'
const emailClient = require('@sendgrid/mail')
exports.handler = async (event) => {
  const parsedBody = await event.body
  const { SG_API_KEY } = process.env
  emailClient.setApiKey(SG_API_KEY)
  const emailPayload = JSON.parse(parsedBody)
  console.log(emailPayload)
  const msg = {
    from: 'adeeboom311082@aol.com', // sender address
    to: emailPayload.email,
    subject: emailPayload.purpose,
    text: emailPayload.message, // plain text body
    html: `<b>${emailPayload.meessage}</b>`, // html body
  }
  try {
    await emailClient.send(msg)
    return {
      headers: { 'content-type': 'application/json' },
      statusCode: 200,
      body: JSON.stringify('Thank you for contacting me!'),
    }
  } catch (err) {
    console.log(err.message)
    return {
      statusCode: err.code,
      body: JSON.stringify({ msg: err.message }),
    }
  }
}

//export const config = {
//path: '/contact-form',
//}
