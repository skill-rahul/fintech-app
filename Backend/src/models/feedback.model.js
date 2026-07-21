import mongoose from "mongoose";
import {
    FEEDBACK_TYPES,
    FEEDBACK_STATUS,
} from "../constants/feedback.constants.js";

const feedbackSchema = new mongoose.Schema(
    {
        feedbackId: {
            type: String,
            unique: true,
            trim: true,
        },

        fullName: {
            type: String,
            required: true,
            trim: true,
            minlength: 2,
            maxlength: 100,
        },

        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },

        phoneNumber: {
            type: String,
            default: null,
            trim: true,
        },

        feedbackType: {
            type: String,
            required: true,
            enum:Object.values(FEEDBACK_TYPES),
        },

        subject: {
            type: String,
            required: true,
            trim: true,
            maxlength: 150,
        },

        message: {
            type: String,
            required: true,
            trim: true,
            maxlength: 1000,
        },

        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5,
        },

        imageUrl: {
            type: String,
            default: null,
        },

        status: {
            type: String,
            enum:Object.values(FEEDBACK_STATUS),
            default:FEEDBACK_STATUS.PENDING,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Feedback = mongoose.model("Feedback", feedbackSchema);

export default Feedback;