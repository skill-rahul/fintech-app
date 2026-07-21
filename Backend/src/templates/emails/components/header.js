export const getEmailHeader = (title) => {
    return `
        <div style="
            background:#141414;
            padding:30px;
            text-align:center;
            border-bottom:1px solid rgba(255,255,255,.1);
        ">
            <h1 style="
                margin:0;
                color:#E2CC9B;
                font-size:28px;
            ">
                Skill Plus
            </h1>

            <p style="
                margin-top:12px;
                color:#FFFFFF;
                font-size:18px;
            ">
                ${title}
            </p>
        </div>
    `;
};