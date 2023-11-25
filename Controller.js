const contactModel = require("./Model");
const { transporter } = require("./Middleware");

const sendEmail = async (mailOptions) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return reject(error);
      }

      resolve(info);
    });
  });
};

exports.contact = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: "Name, email, and message are required fields" });
    }

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Enquiry from superiorcarting`,
      html: `
            <h1>New Enquiry</h1>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
          `,
    };

    // Send email
    await sendEmail(mailOptions);

    // Save data to the database
    const contactData = new contactModel({
      name,
      email,
      message,
    });

    const savedData = await contactData.save();

    res
      .status(201)
      .json({ message: "Email sent successfully. Form saved to database" });
  } catch (error) {
    next(error);
  }
};
