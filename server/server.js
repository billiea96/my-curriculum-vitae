import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

const router = express.Router();
dotenv.config();

const mailServer = 'MAILTRAP';
// const mailServer = 'GMAIL';
const transport = {
  host: process.env[`${mailServer}_HOST`] || 'test',
  port: process.env[`${mailServer}_PORT`] || 2525,
  auth: {
    user: process.env[`${mailServer}_USER`] || 'test',
    pass: process.env[`${mailServer}_PASS`] || '1234',
  },
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  const { name, email, subject, message } = req.body;
  let content = `name: ${name} \nemail: ${email} \nmessage: ${message} `;

  const mail = {
    from: name,
    to: 'billiea48@gmail.com ', // Change to email address that you want to receive messages on
    subject: subject,
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res
        .status(500)
        .send({ status: 'fail', message: 'Cannot send your email' });
    } else {
      res.send({
        status: 'success',
        message: 'Your message has been sent. Thank you!',
      });

      transporter.sendMail(
        {
          from: 'billiea48@gmail.com',
          to: email,
          subject: 'Submission was successful',
          text: `Thank you for contacting us!\n\nForm details\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
        },
        function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log('Message sent: ' + info.response);
          }
        }
      );
    }
  });
});

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend/build')));
app.post('/', (req, res) => {
  console.log('connect');
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server serve at http://127.0.0.1:${port}`);
});
