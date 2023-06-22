
import { sendEmail } from "../utils/sendMail.js";

// function for the contact form 
export const contact = (async (req, res, next) => {
  const { name, email, message } = req.body;
  if (name && email && message) {
    // making the format to be sent via mail
    const to = process.env.MY_MAIL;
    const subject = "Contact form Weather App";
    const text = `I am ${name} and my email is ${email}.\n${message}`;
    // sending the data to the mail
    await sendEmail(to, subject, text);
    res.status(200).json({
      success: true,
      message: "Your message has been sent successfully:)",
    });
  } else {
    res.status(400).json({
      success: false,
      message: "You have not entered all the fields."
    });
  }
});