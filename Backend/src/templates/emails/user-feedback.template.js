import { getEmailHeader } from "./components/header.js";
import { getEmailFooter } from "./components/footer.js";

const getRatingStars = (rating) => {
    return "⭐".repeat(rating) + "☆".repeat(5 - rating);
};

const formatDate = (date) => {
    return new Date(date).toLocaleString("en-IN", {
        dateStyle: "long",
        timeStyle: "short",
    });
};

export const getUserFeedbackTemplate = (feedback) => {
    const {
        feedbackId,
        fullName,
        feedbackType,
        subject,
        rating,
        createdAt,
    } = feedback;

    return `
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Thank You for Your Feedback</title>
</head>

<body style="
    margin:0;
    padding:40px 20px;
    background:#000000;
    font-family:Arial, Helvetica, sans-serif;
">

<div style="
    max-width:650px;
    margin:auto;
    background:#0A0A0A;
    border:1px solid rgba(255,255,255,.10);
    border-radius:16px;
    overflow:hidden;
">

${getEmailHeader("Thank You For Your Feedback")}

<div style="padding:32px;">

    <h2 style="
        color:#E2CC9B;
        margin-bottom:20px;
    ">
        Hello ${fullName},
    </h2>

    <p style="
        color:#D4D4D8;
        line-height:1.8;
        font-size:15px;
    ">
        Thank you for taking the time to share your feedback with us.
        Your feedback has been received successfully and our team will review it shortly.
    </p>

    <div style="
        background:#141414;
        border:1px solid rgba(226,204,155,.20);
        border-radius:12px;
        padding:20px;
        margin:30px 0;
    ">

        <table
            width="100%"
            cellpadding="10"
            cellspacing="0"
            style="
                color:#FFFFFF;
                border-collapse:collapse;
                font-size:14px;
            ">

            <tr>
                <td width="170"><strong>Feedback ID</strong></td>
                <td>${feedbackId}</td>
            </tr>

            <tr>
                <td><strong>Feedback Type</strong></td>
                <td>${feedbackType}</td>
            </tr>

            <tr>
                <td><strong>Subject</strong></td>
                <td>${subject}</td>
            </tr>

            <tr>
                <td><strong>Rating</strong></td>
                <td>${getRatingStars(rating)} (${rating}/5)</td>
            </tr>

            <tr>
                <td><strong>Submitted At</strong></td>
                <td>${formatDate(createdAt)}</td>
            </tr>

        </table>

    </div>

    <p style="
        color:#D4D4D8;
        line-height:1.8;
        font-size:15px;
    ">
        Please keep your <strong>Feedback ID</strong> for future reference.
        If our team requires any additional information, we'll contact you using the email address you provided.
    </p>

    <p style="
        color:#FFFFFF;
        margin-top:30px;
        line-height:1.8;
    ">
        Regards,<br>
        <strong>Skill Plus Team</strong>
    </p>

</div>

${getEmailFooter()}

</div>

</body>

</html>
`;
};