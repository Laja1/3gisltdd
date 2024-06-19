import mailjet from 'node-mailjet';

const mailjetClient = mailjet.connect(
  'YOUR_MAILJET_API_KEY',
  'YOUR_MAILJET_SECRET_KEY'
);

const sendEmail = (data, e) => {
  e.preventDefault();

  const request = mailjetClient.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: 'YOUR_SENDER_EMAIL',
          Name: 'YOUR_SENDER_NAME',
        },
        To: [
          {
            Email: 'YOUR_RECIPIENT_EMAIL',
            Name: 'YOUR_RECIPIENT_NAME',
          },
        ],
        Subject: data.subject,
        TextPart: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
      },
    ],
  });

  request
    .then((result) => {
      console.log(result.body);
      alert('Message sent successfully!');
      reset();
    })
    .catch((err) => {
      console.error('Failed to send message:', err);
      alert('Failed to send message. Please try again later.');
    });
};