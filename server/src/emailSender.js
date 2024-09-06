import nodemailer from 'nodemailer';

async function sendEmail(to, subject, text, attachmentPath) {
    let transporter = nodemailer.createTransport({
        service: "gmail", 
        auth: {
            user: process.env.NODE_EMAIL,
            pass: process.env.NODE_PASSWORD
        }
    })

    let mailOptions = {
        from: process.env.NODE_EMAIL,
        to: to,
        subject: "Email with attachment testing",
        text: "Please find below certificate and download ",
        attachments: [
          {
            path: attachmentPath
          }
        ]
    };
    
    return transporter.sendMail(mailOptions, (err, info) => {
      if(err){
        console.log("Error Occured" + err)
      } else {
        console.log("Email Sent Successfully to " + mailOptions.to) 
      }
    });
    
}

export default sendEmail;