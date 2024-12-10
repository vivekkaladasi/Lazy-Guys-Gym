import nodeMailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const sendEmail = async (options) => {
  console.log(process.env.SMTP_HOST, "sendding");
  const transporter = nodeMailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASS,
    },
  });

  // Verify SMTP connection
  transporter.verify((error, success) => {
    if (error) {
      console.error("SMTP Connection Error:", error);
    } else {
      console.log("SMTP Server is ready to send emails.");
    }
  });

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: options.email,
    subject: options.subject,
    text: `${options.message} \n \n Email of User Who Sent The Message: ${options.userEmail}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);
  } catch (error) {
    console.error("Error occurred while sending email:", error);
    throw error; // Propagate error to calling function
  }
};
