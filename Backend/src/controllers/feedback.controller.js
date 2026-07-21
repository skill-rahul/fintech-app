import { createFeedbackService } from "../services/feedback.service.js";
import { sendSuccess } from "../utils/apiResponse.js";

export const createFeedback = async (req, res, next) => {
    try {
        const feedback = await createFeedbackService(req.body);

        return sendSuccess(
            res,
            "Feedback submitted successfully.",
            feedback,
            201
        );
    } catch (error) {
        next(error);
    }
};
