const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // 1) Transportör oluştur
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    // Özel e-posta sunucusu yapılandırması için gerekli çevresel değişkenleri sağlayın
    // host: process.env.EMAIL_HOST,
    // port: process.env.EMAIL_PORT,
    // secure: true, // true for 465, false for other ports
    // requireTLS: true,
  });

  // 2) E-posta seçeneklerini tanımla
  const mailOptions = {
    from: `Taner Özer <${process.env.EMAIL_FROM}>`, // Gönderen bilgisi
    to: options.email, // Alıcı e-posta adresi
    subject: options.subject, // E-posta konusu
    text: options.message, // Metin tabanlı e-posta içeriği
    // html: options.html, // HTML e-posta içeriği için
  };

  // 3) E-postayı gönder
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
