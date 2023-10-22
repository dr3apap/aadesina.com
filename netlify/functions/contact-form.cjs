//import { SMTPClient } from 'https://deno.land/x/denomailer/mod.ts'
const emailClient = require('@sendgrid/mail')
exports.handler = async (event) => {
  const parsedBody = await event.body
  const { SG_API_KEY, SG_FROM_EMAIL, SG_TO_EMAIL } = process.env
  emailClient.setApiKey(SG_API_KEY)
  const emailPayload = JSON.parse(parsedBody)
  const { fullname, email, company, purpose, message } = emailPayload
  const contactDetails = [
    `fullname:${fullname}`,
    `email:${email}`,
    `company:${company}`,
    `purpose:${purpose}`,
    `message:${message}`,
  ]
  const msg = {
    from: SG_FROM_EMAIL, // sender address
    to: SG_TO_EMAIL,
    subject: purpose,
    text: message, // plain text body
    html: contactDetails.map((cdetail) => `<p>${cdetail}</p>`).join(''), // html body
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
