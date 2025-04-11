// app/api/submit/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const formData = await req.json();
    console.log('Received form data:', formData); // Add this line to log the incoming data

    const { name, email, phone, budget, note } = formData;

    // Validate the input data
    if (!name || !email || !phone || !budget) {
      console.log('Validation failed. Missing required fields'); // Add this log
      return new Response(
        JSON.stringify({ message: 'Missing required fields.' }),
        { status: 400 }
      );
    }

    // Set up the Nodemailer transporter (replace with your actual SMTP details)
    const transporter = nodemailer.createTransport({
     //   host: 'mail.privateemail.com', // Example SMTP server
      //  port: 587, // Port for TLS
       // secure: false, // Use TLS, not SSL
        service: 'gmail',
        auth: {
          user: process.env.PRIVATE_EMAIL_USER,
          pass: process.env.PRIVATE_EMAIL_PASSWORD,
        },
      });

    // Define the email options
    const mailOptions = {
      from: process.env.PRIVATE_EMAIL_USER, // Sender address
      to: process.env.PRIVATE_PERSONAL_EMAIL, // The email address where the form submissions should be sent
      subject: `New Inquiry from ${name}`, // Subject of the email
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Budget: ${budget}

        Additional Notes:
        ${note || 'No additional notes provided'}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with success message
    return new Response(
      JSON.stringify({ message: 'Thank you for your interest. Our team will review your request and get back to you shortly.' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error handling form submission:', error);
    return new Response(
      JSON.stringify({ message: 'An unexpected error occurred. Please try again later.' }),
      { status: 500 }
    );
  }
}
