import AuthService from "../services/auth.js";
const service = new AuthService()

const controller = {
    login: (req, res) => {
        try {
            const { user } = req;
            const token = service.signToken(user, '1h')
            res.status(200).json({user, token})
        } catch (error) {
            res.status(500).json(error)
        }
    },
};

export default controller;
