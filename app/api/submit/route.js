// app/api/submit/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    // Destructure the received data
    const { fullName, email, company, phone, projectDetails } = await req.json();

    // Validate the input data
    if (!fullName || !email || !phone) {
      return new Response(
        JSON.stringify({ message: 'Missing required fields.' }),
        { status: 400 }
      );
    }

    // Set up the Nodemailer transporter (replace with your actual SMTP details)
    const transporter = nodemailer.createTransport({
      host: 'mail.privateemail.com', // Example SMTP server
      port: 587, // Port for TLS
      secure: false, // Use TLS, not SSL
      auth: {
        user: process.env.PRIVATE_EMAIL_USER,
        pass: process.env.PRIVATE_EMAIL_PASSWORD,
      },
    });

    // Define the email options
    const mailOptions = {
      from: process.env.PRIVATE_EMAIL_USER, // Sender address
      to: process.env.PRIVATE_PERSONAL_EMAIL, // Your personal email address
      subject: `New Inquiry from ${fullName} (${company})`,
      text: `Full Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\n\nProject Details: ${projectDetails}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Log the received data for debugging
    //console.log('Received form data:', { fullName, email, company, phone, projectDetails });

    // Respond with success message
    return new Response(
      JSON.stringify({ message: 'Thank you for filling the form, Our team will get in touch soon!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error handling form submission:', error);
    return new Response(
      JSON.stringify({ message: 'Internal server error.' }),
      { status: 500 }
    );
  }
}
