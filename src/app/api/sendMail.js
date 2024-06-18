// pages/api/sendMail.js
import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    try {
      const response = await axios.post(
        "https://api.mailjet.com/v3.1/send",
        {
          Messages: [
            {
              From: {
                Email: email,
                Name: name,
              },
              To: [
                {
                  Email: "yemia@3gisltd.com",
                  Name: "Yemi",
                },
              ],
              Subject: subject,
              TextPart: message,
              HTMLPart: `<h3>${subject}</h3><p>${message}</p>`,
              CustomID: `${email}-${Date.now()}`,
            },
          ],
        },
        {
          auth: {
            username: "api-key",
            password: "8c08d945dac9870811baa2c26056ce62",
          },
        }
      );

      if (response.status === 200) {
        res.status(200).json({ message: "Message sent successfully!" });
      } else {
        res
          .status(response.status)
          .json({ message: "Failed to send message." });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      res
        .status(500)
        .json({ message: "Failed to send message. Please try again later." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
