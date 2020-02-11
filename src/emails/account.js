const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jcbcapps@gmail.com',
        subject: 'Thanks for joining!',
        text: `Welcome to the app, ${name}. We hope you enjoy it!`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jcbcapps@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. We hope you'll join us again some day!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}