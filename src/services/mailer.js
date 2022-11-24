import nodemailer from "nodemailer";

function getProvider() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "report.now.mailer@gmail.com",
      pass: "AguaPanela_11",
    },
  });
}

export default function sendMailing(to, subject, text) {
  const provider = getProvider();
  var mailOptions = {
    from: "report.now.mailer@gmail.com",
    to: to,
    subject: subject,
    text: text,
  };

  provider.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
