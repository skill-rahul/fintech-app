import { sendSuccess } from "../utils/apiResponse.js";

export const healthCheck = (req, res) => {
    return sendSuccess(
        res,
        "Server is running",
        {
            status: "OK",
        }
    );
};