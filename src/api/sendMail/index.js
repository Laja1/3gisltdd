// pages/api/sendMail.js
import Mailjet from 'node-mailjet';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only POST requests are allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).send({ message: 'All fields are required' });
  }

  try {
    const mailjet = Mailjet.apiConnect(
      process.env.MJ_APIKEY, // Use your single API key here
    );

    const request = mailjet
      .post('send', { version: 'v3.1' })
      .request({
        Messages: [
          {
            From: {
              Email: email, // Replace with your email
              Name: name, // Replace with your name
            },
            To: [
              {
                Email: 'yemia@3gis.com', // Replace with recipient's email
                Name: 'Mr Yemi', // Replace with recipient's name
              },
            ],
            Subject: subject,
            TextPart: message,
            HTMLPart: `<h3>${name} (${email}) says:</h3><p>${message}</p>`,
          },
        ],
      });

    const result = await request;
    res.status(200).send({ message: 'Message sent successfully!', result: result.body });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send({ message: 'Failed to send message', error: error.message });
  }
}
