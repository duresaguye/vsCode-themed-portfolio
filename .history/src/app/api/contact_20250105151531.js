import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Or another email service
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password', // Use environment variables for security
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: 'your-email@gmail.com', // Your email
        subject: `New Contact Message from ${name}`,
        text: message,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Email sending failed' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
