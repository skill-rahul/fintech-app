import { body } from "express-validator";
import { FEEDBACK_TYPES } from "../constants/feedback.constants.js";

export const createFeedbackValidator = [
    body("fullName")
        .trim()
        .notEmpty()
        .withMessage("Full name is required.")
        .isLength({ min: 2, max: 100 })
        .withMessage("Full name must be between 2 and 100 characters."),

    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required.")
        .isEmail()
        .withMessage("Please enter a valid email address.")
        .normalizeEmail(),

    body("phoneNumber")
        .optional({ values: "falsy" })
        .trim()
        .isMobilePhone("en-IN")
        .withMessage("Please enter a valid phone number."),

    body("feedbackType")
        .trim()
        .notEmpty()
        .withMessage("Feedback type is required.")
        .isIn(Object.values(FEEDBACK_TYPES))
        .withMessage("Invalid feedback type."),

    body("subject")
        .trim()
        .notEmpty()
        .withMessage("Subject is required.")
        .isLength({ max: 150 })
        .withMessage("Subject cannot exceed 150 characters."),

    body("message")
        .trim()
        .notEmpty()
        .withMessage("Message is required.")
        .isLength({ max: 1000 })
        .withMessage("Message cannot exceed 1000 characters."),

    body("rating")
        .notEmpty()
        .withMessage("Rating is required.")
        .isInt({ min: 1, max: 5 })
        .withMessage("Rating must be between 1 and 5."),
];