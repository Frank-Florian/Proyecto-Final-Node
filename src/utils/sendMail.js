const transporter = require('./nodeMailer');
const ejs = require('ejs');
const path = require('path');

const sendMail = async (email, doc, attachments) => {
    transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Welcome to Shop',
        text: 'Welcome to Shop',
        html: doc,
        attachments: attachments
    })
    .then(info => console.log(info))
    .catch(error =>console.log(error));
}  


const sendWelcomeMail = async ( email, data ) => {
    const pathFile = path.join(__dirname, '../views/welcome/welcome.ejs');
    const doc = await ejs.renderFile(pathFile, data); 
    const attachments = [
        {
            filename: 'bee.png',
            path: path.join(__dirname, '../views/welcome/images/bee.png'),
            cid: 'bee'
        },
        {
            filename: 'illo_welcome_1.png',
            path: path.join(__dirname, '../views/welcome/images/illo_welcome_1.png'),
            cid: 'illo'
        },
        {
            filename: 'twitter2x.png',
            path: path.join(__dirname, '../views/welcome/images/twitter2x.png'),
            cid: 'twitter'
        },
        {
            filename: 'instagram2x.png',
            path: path.join(__dirname, '../views/welcome/images/instagram2x.png'),
            cid: 'instagram'
        },
        {
            filename: 'facebook2x.png',
            path: path.join(__dirname, '../views/welcome/images/facebook2x.png'),
            cid: 'facebook'
        },
        {
            filename: 'pinterest2x.png',
            path: path.join(__dirname, '../views/welcome/images/pinterest2x.png'),
            cid: 'pinterest'
        },
    ]
    sendMail(email, doc, attachments);
}

module.exports = {
    sendWelcomeMail
};

