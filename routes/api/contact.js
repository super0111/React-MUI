import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';

const transporter = {
    auth: {
        api_key: '###'
    }
}

const mailer = nodemailer.createTransport(sgTransport(transporter));

export default async function (req, res) {
    const {name, email, number, subject, text} = req.body;

    const data = {
        to: '',
        from: email,
        subject: 'Hi there',
        text: text,
        html: `
            <b>From:</b> ${name} <br /> 
            <b>Number:</b> ${number} <br /> 
            <b>Subject:</b> ${subject} <br /> 
            <b>Message:</b> ${text} 
        ` 
    };
    try {
        const response = await mailer.sendMail(data);
        console.log(response);
        res.status(200).send("Email send successfully.")
    } catch (error) {
        console.log(error);
        res.status(500).send("Error processing charge");
    }
}
