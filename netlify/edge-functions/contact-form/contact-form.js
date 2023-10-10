import { SMTPClient } from 'https://deno.land/x/denomailer/mod.ts'
export default async (request) => {
  console.log(request.body)
  return {
    status: 200,
    body: 'WIP',
  }
  //console.log(`Is this the nodemailer:${JSON.parse(request.body)}`)
  //const formData = await request.body
  //const transporter = new SMTPClient({
  //  connection: {
  //    hostname: Deno.env.get('SMTP_PROVIDER'),
  //    port: Deno.env.get('SMTP_PORT'),
  //    tls: true,
  //    auth: {
  //      user: Deno.env.get('MAIL_USER'),
  //      pass: Deno.env.get('MAIL_PASS'),
  //    },
  //  },
  //})
  //const info = await transporter.send({
  //  from: formData.get(email), // sender address
  //  to: Deno.env.get('USER_EMAIL'), // list of receivers
  //  subject: formData.get(purpose), // Subject line
  //  content: formData.get(fullname), // plain text body
  //  html: `<b>${FormData.get(message)}</b>`, // html body
  //})
  //try {
  //  await client.close()
  //  return new Response('E-mail sent sucessfully', {
  //    headers: {
  //      'content-type': 'application/json',
  //    },
  //    status: 200,
  //  })
  //} catch (err) {
  //  console.log(err.message)
  //  return new Response('Fail to send email', {
  //    status: 500,
  //  })
  //}
}
