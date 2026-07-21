import { Router } from "express";

import { createFeedback } from "../controllers/feedback.controller.js";
import { createFeedbackValidator } from "../validators/feedback.validator.js";
import validateRequest from "../middlewares/validate-request.middleware.js";

const router = Router();

router.post(
    "/",
    createFeedbackValidator,
    validateRequest,
    createFeedback
);

export default router;