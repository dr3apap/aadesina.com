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
  //    hostname: 'smtp.selgrind.com',
  //    port: 2525,
  //    tls: true,
  //    auth: {
  //      user: '7a60fcce375478',
  //      pass: '88e1d77b57b488',
  //    },
  //  },
  //})
  //const info = await transporter.send({
  //  from: formData.get(email), // sender address
  //  to: 'adeeboom311082@aol.com', // list of receivers
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
