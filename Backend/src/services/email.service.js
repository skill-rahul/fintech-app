import { mailTransporter } from "../config/mail.js";
import { EMAIL_FROM_NAME } from "../constants/email.constants.js";

export const sendEmail = async ({
    to,
    subject,
    html,
    text = "",
}) => {
    return mailTransporter.sendMail({
        from: `"${EMAIL_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
        to,
        subject,
        text,
        html,
    });
};