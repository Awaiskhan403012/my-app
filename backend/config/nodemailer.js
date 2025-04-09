import nodemailer from "nodemailer";

const mailsender = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "awa4003012@gmail.com",
        pass: "zwlh gfkl jdao ujtx",
    },
    connectionTimeout: 10000,
    tls: {
        rejectUnauthorized: false,
    },
});

mailsender.verify((error) => {
    if (error) {
        console.log("SMTP Connection Error:", error);
    } else {
        console.log("SMTP Server is Ready");
    }
});

export default mailsender;
