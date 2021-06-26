const express = require('express');
const httpStatus = require('http-status');
const Users = require('../../models/user.model');
const nodemailer = require('nodemailer');
const schedule = require('node-schedule');

const router = express.Router();

function sendMailEveryTenSec(frequency, to, cc, subject, mailBody) {
    let cronPattern = '';
    switch (frequency) {
        case "10sec":
            cronPattern = "*/10 * * * * *";
            break;
        case "weekly":
            // Every Monday 12 Am
            cronPattern = "0 0 12 ? * MON *";
            break;
        case "monthly":
            // First day of every month
            cronPattern = "0 0 12 1 1/1 ? *";
            break;
        case "yearly":
            // Every year 1 Jan
            cronPattern = "0 0 12 1 1 ? *";
            break;
        default:
            throw new Error("Oops! Invalid Frequency")
    }
    
    schedule.scheduleJob(cronPattern, async function () {
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        const mail_options = {
            from: process.env.EMAIL_FROM,
            to: to,
            cc:  cc,
            subject: subject,
            html: mailBody
        };

        const mail = await transporter.sendMail(mail_options);
        console.log('Mail Sent!');
    });
}

router.post('/register', async function (req, res) {
    const { username, email, password } = req.body;
    const userCreated = await Users.create({
        username: username,
        email: email,
        password: password
    })
    return res.json({ status: 1, message: "User Created!", data: userCreated });
});

router.post('/login', async function (req, res) {
    const { email, password } = req.body;
    const user = await Users.findOne({ email: email });
    if (!user || !(await user.isPasswordMatch(password))) {
        return res.status(401).json({ status: 0, message: "User not found", data: {} });
    }
    const userObj = user.toObject();
    delete userObj.password;
    return res.json({ status: 1, message: "User Fetched", data: userObj });
});

router.post('/user/setupEmail', function (req, res) {
    
    const { frequency, to, cc, subject, mailBody } = req.body;

    sendMailEveryTenSec(frequency, to, cc, subject, mailBody);

    res.json({status: 1, message: 'Email has been scheduled', data: {}});
});

module.exports = router;