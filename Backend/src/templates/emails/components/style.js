export const emailStyles = `
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    body{
        background:#000000;
        font-family:Arial, Helvetica, sans-serif;
        color:#ffffff;
        padding:40px 20px;
    }

    .container{
        max-width:650px;
        margin:0 auto;
        background:#0A0A0A;
        border:1px solid rgba(255,255,255,0.1);
        border-radius:16px;
        overflow:hidden;
    }

    .content{
        padding:32px;
    }

    .section{
        margin-bottom:32px;
    }

    .section h2{
        font-size:18px;
        color:#E2CC9B;
        margin-bottom:16px;
        border-bottom:1px solid rgba(255,255,255,.1);
        padding-bottom:10px;
    }

    .info-table{
        width:100%;
        border-collapse:collapse;
    }

    .info-table td{
        padding:12px 0;
        border-bottom:1px solid rgba(255,255,255,.08);
        vertical-align:top;
        font-size:14px;
    }

    .info-table td:first-child{
        width:180px;
        color:#A1A1AA;
        font-weight:600;
    }

    .info-table td:last-child{
        color:#FFFFFF;
        word-break:break-word;
    }

    .message-box{
        background:#141414;
        border:1px solid rgba(226,204,155,.2);
        border-radius:12px;
        padding:20px;
        color:#ffffff;
        line-height:1.7;
        white-space:pre-wrap;
    }

    .badge{
        display:inline-block;
        padding:6px 12px;
        border-radius:999px;
        background:#E2CC9B;
        color:#000000;
        font-size:12px;
        font-weight:bold;
    }

    .divider{
        height:1px;
        background:rgba(255,255,255,.08);
        margin:24px 0;
    }

    @media only screen and (max-width:600px){

        body{
            padding:16px;
        }

        .content{
            padding:20px;
        }

        .info-table td{
            display:block;
            width:100%;
            padding:8px 0;
        }

        .info-table td:first-child{
            width:100%;
            border-bottom:none;
            color:#E2CC9B;
            font-weight:bold;
            padding-bottom:4px;
        }
    }
`;