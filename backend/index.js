import express from "express";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";
import { FRONTEND_URL, PORT } from "./config.js";
import dotenv from "dotenv";
dotenv.config();

const app = express(); // Initialize the Express app

// Middleware for CORS
app.use(
  cors({
    origin: [FRONTEND_URL], // Replace with "*" temporarily if debugging
    methods: ["POST"],
    credentials: true,
  })
);

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Endpoint for Sending Emails
app.post("/send/mail", async (req, res) => {
  const { name, email, message } = req.body;

  // Input validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please provide all necessary details",
    });
  }

  try {
    // Debugging log
    console.log("Sending email with data:", { name, email, message });

    await sendEmail({
      email: "vivekkaladasi7@gmail.com", // Your receiving email
      subject: "Contact with official",
      message,
      userEmail: email,
    });

    console.log("Email sent successfully.");
    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Error occurred while sending email:", error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Test Route
app.get("/", (req, res) => {
  res.send("Welcome to the Gym Website API!");
});

// Start the Server
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
