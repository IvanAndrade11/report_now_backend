import nodemailer from 'nodemailer';
import { MAILER_USER, MAILER_PASSWORD, MAILER_HOST } from '../config.js';

function getProvider() {
    return nodemailer.createTransport({
        host: MAILER_HOST,
        secure: true,
        port: 465,
        auth: {
            user: MAILER_USER,
            pass: MAILER_PASSWORD,
        },
    });
}

export default async function sendMailing(to, subject, text) {
    const provider = getProvider();

    const mailOptions = {
        from: MAILER_USER,
        to: to,
        subject: subject,
        html: `<div style="display: block; width: 40%; text-align: center; padding: 7% 30% 0% 30%;">${text}<div>`
    };

    return await provider.sendMail(mailOptions);
}
