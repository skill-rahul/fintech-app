import Feedback from "../models/feedback.model.js";

export const createFeedback = async (feedbackData) => {
    return await Feedback.create(feedbackData);
};

export const findFeedbackById = async (id) => {
    return await Feedback.findById(id);
};

export const findFeedbackByFeedbackId = async (feedbackId) => {
    return await Feedback.findOne({ feedbackId });
};

export const updateFeedback = async (id, updateData) => {
    return await Feedback.findByIdAndUpdate(id, updateData, {
        new: true,
        runValidators: true,
    });
};