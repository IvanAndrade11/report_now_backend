import sendMailing from "../services/mailer.js";

const controller = {
    sendMail: async (req, res) => {
        try {
            const { to, subject, text } = req.body
            const response = await sendMailing(to, subject, text)
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json(error)
        }
    },
};

export default controller;
