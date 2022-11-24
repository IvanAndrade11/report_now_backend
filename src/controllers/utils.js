import sendMailing from "../services/mailer.js";

const controller = {
  sendMail: (req, res) => {
    console.log(req);
    const { to, subject, text } = req.body;
    const send = sendMailing(to, subject, text);
    res.status(200).json(send);
  },
};

export default controller;
