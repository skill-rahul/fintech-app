export const getEmailFooter = () => {
    return `
        <div style="
            background:#141414;
            padding:24px;
            text-align:center;
            border-top:1px solid rgba(255,255,255,.1);
        ">
            <p style="
                margin:0;
                color:#999999;
                font-size:13px;
            ">
                © ${new Date().getFullYear()} Skill Plus. All rights reserved.
            </p>
        </div>
    `;
};