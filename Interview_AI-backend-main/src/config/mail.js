const nodemailer = require("nodemailer");

const transPorter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "pa0174492@gmail.com",
    pass: "eoqwqtuevavbcwuq",
  },
});

async function senData(to, subject,html) {
  const mailFormat = {
    from: "pa0174492@gmail.com",
    to: to,
    subject: subject,
    html: html,
  };
  await transPorter.sendMail(mailFormat, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("mail sent");
    }
  });
}
module.exports = senData;
