import sendMailing from "../services/mailer.js";
import AuthService from "../services/auth.js";
const service = new AuthService()

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
    recovery: async (req, res) => {
        try {
            const { email } = req.body;
            const response = await service.sendRecovery(email)
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    },
};

export default controller;
