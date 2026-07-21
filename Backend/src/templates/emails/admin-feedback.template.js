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

export const getAdminFeedbackTemplate = (feedback) => {
    const {
        feedbackId,
        fullName,
        email,
        phoneNumber,
        feedbackType,
        subject,
        message,
        rating,
        createdAt,
    } = feedback;

    return `
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>New Feedback Received</title>

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

${getEmailHeader("New Feedback Received")}

<div style="padding:32px;">

    <h2 style="
        color:#E2CC9B;
        margin-bottom:20px;
        font-size:20px;
    ">
        Feedback Information
    </h2>

    <table
        width="100%"
        cellpadding="10"
        cellspacing="0"
        style="
            border-collapse:collapse;
            color:#ffffff;
            font-size:14px;
        "
    >

        <tr>
            <td width="180"><strong>Feedback ID</strong></td>
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

    <hr style="
        border:none;
        border-top:1px solid rgba(255,255,255,.10);
        margin:30px 0;
    ">

    <h2 style="
        color:#E2CC9B;
        margin-bottom:20px;
        font-size:20px;
    ">
        User Information
    </h2>

    <table
        width="100%"
        cellpadding="10"
        cellspacing="0"
        style="
            border-collapse:collapse;
            color:#ffffff;
            font-size:14px;
        "
    >

        <tr>
            <td width="180"><strong>Full Name</strong></td>
            <td>${fullName}</td>
        </tr>

        <tr>
            <td><strong>Email</strong></td>
            <td>${email}</td>
        </tr>

        <tr>
            <td><strong>Phone Number</strong></td>
            <td>${phoneNumber || "Not Provided"}</td>
        </tr>

    </table>

    <hr style="
        border:none;
        border-top:1px solid rgba(255,255,255,.10);
        margin:30px 0;
    ">

    <h2 style="
        color:#E2CC9B;
        margin-bottom:20px;
        font-size:20px;
    ">
        Message
    </h2>

    <div style="
        background:#141414;
        border:1px solid rgba(226,204,155,.20);
        border-radius:10px;
        padding:20px;
        color:#ffffff;
        line-height:1.8;
        white-space:pre-wrap;
    ">
        ${message}
    </div>

</div>

${getEmailFooter()}

</div>

</body>

</html>
`;
};