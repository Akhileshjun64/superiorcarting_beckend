const contactModel = require("./Model");
const { transporter } = require("./Middleware");

exports.contact = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: "Name, email, and message are required fields" });
    }

    const mailOptions = {
      from: "akhileshjun64@gmail.com",
      to: "akhileshjun64@gmail.com", // Replace with your own email address
      subject: `New Enquiry from superiorcarting`,
      html: `
            <h1>New Enquiry</h1>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
          `,
    };

    await transporter.sendMail(mailOptions);

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
