import crypto from "crypto";

import { createFeedback } from "../repositories/feedback.repository.js";

import { sendEmail } from "./email.service.js";
import { EMAIL_SUBJECTS } from "../constants/email.constants.js";
import { getAdminFeedbackTemplate } from "../templates/emails/admin-feedback.template.js";
import { getUserFeedbackTemplate } from "../templates/emails/user-feedback.template.js";

const generateFeedbackId = () => {
    const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const random = crypto.randomBytes(3).toString("hex").toUpperCase();

    return `FDB-${date}-${random}`;
};

export const createFeedbackService = async (payload) => {
    const feedbackData = {
        ...payload,
        feedbackId: generateFeedbackId(),
    };

    // Save feedback
    const feedback = await createFeedback(feedbackData);

    // Generate email templates
    const adminTemplate = getAdminFeedbackTemplate(feedback);

    const userTemplate = getUserFeedbackTemplate(feedback);

    // Send emails
    try {
        await Promise.all([
            sendEmail({
                to: process.env.ADMIN_EMAIL,
                subject: `${EMAIL_SUBJECTS.ADMIN_FEEDBACK} - ${feedback.feedbackId}`,
                html: adminTemplate,
            }),

            sendEmail({
                to: feedback.email,
                subject: EMAIL_SUBJECTS.USER_FEEDBACK,
                html: userTemplate,
            }),
        ]);

        console.log("Emails sent successfully.");
    } catch (error) {
        console.error("Email sending failed:", error.message);
    }

    return feedback;
};