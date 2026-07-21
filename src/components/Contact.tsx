import React, { useState } from "react";
import "../assets/styles/Contact.scss";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const CONTACT_EMAIL = "utkarshtiwari1603@gmail.com";

const IRELAND_PHONE_DISPLAY = "+353 89 974 8063";
const IRELAND_PHONE_LINK = "+353899748063";

const INDIA_PHONE_DISPLAY = "+91 9004169327";
const INDIA_PHONE_LINK = "+919004169327";

const LINKEDIN_URL =
  "https://www.linkedin.com/in/utkarsh-tiwari-60922632b/";

const textFieldStyles = {
  backgroundColor: "#ffffff",
  borderRadius: "4px",

  "& .MuiOutlinedInput-root": {
    backgroundColor: "#ffffff",
  },

  "& .MuiInputBase-input": {
    color: "#111111",
    WebkitTextFillColor: "#111111",
  },

  "& .MuiInputBase-input::placeholder": {
    color: "#666666",
    opacity: 1,
  },

  "& textarea": {
    color: "#111111",
    WebkitTextFillColor: "#111111",
  },

  "& textarea::placeholder": {
    color: "#666666",
    opacity: 1,
  },

  "& .MuiInputLabel-root": {
    color: "#555555",
  },

  "& .MuiInputLabel-root.Mui-focused": {
    color: "#1976d2",
  },

  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#bdbdbd",
  },

  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#666666",
  },

  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#1976d2",
  },

  "& .MuiFormHelperText-root": {
    color: "#ff7777",
    marginLeft: 0,
  },
};

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] =
    useState<boolean>(false);

  const sendEmail = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();

    const emailIsValid =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail);

    const hasNameError = cleanName === "";
    const hasEmailError =
      cleanEmail === "" || !emailIsValid;
    const hasMessageError = cleanMessage === "";

    setNameError(hasNameError);
    setEmailError(hasEmailError);
    setMessageError(hasMessageError);

    if (
      hasNameError ||
      hasEmailError ||
      hasMessageError
    ) {
      return;
    }

    const subject = `Portfolio enquiry from ${cleanName}`;

    const body = [
      `Name: ${cleanName}`,
      `Email: ${cleanEmail}`,
      "",
      "Message:",
      cleanMessage,
    ].join("\n");

    const mailtoLink =
      `mailto:${CONTACT_EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>

          <p className="contact-description">
            I am open to software engineering, machine
            learning, research and collaboration opportunities.
          </p>

          <div className="contact-details">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="contact-item"
            >
              <EmailIcon />
              <span>{CONTACT_EMAIL}</span>
            </a>

            <div className="contact-item phone-numbers">
              <PhoneIcon />

              <a href={`tel:${IRELAND_PHONE_LINK}`}>
                {IRELAND_PHONE_DISPLAY}
              </a>

              <span className="phone-divider">/</span>

              <a href={`tel:${INDIA_PHONE_LINK}`}>
                {INDIA_PHONE_DISPLAY}
              </a>
            </div>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <LinkedInIcon />
              <span>LinkedIn Profile</span>
            </a>
          </div>

          <Box
            component="form"
            className="contact-form"
            noValidate
            autoComplete="off"
            onSubmit={sendEmail}
          >
            <div className="form-flex">
              <TextField
                required
                fullWidth
                id="contact-name"
                label="Your Name"
                placeholder="Enter your name"
                value={name}
                error={nameError}
                helperText={
                  nameError
                    ? "Please enter your name"
                    : ""
                }
                sx={textFieldStyles}
                onChange={(event) => {
                  setName(event.target.value);
                  setNameError(false);
                }}
              />

              <TextField
                required
                fullWidth
                id="contact-email"
                type="email"
                label="Your Email"
                placeholder="Enter your email address"
                value={email}
                error={emailError}
                helperText={
                  emailError
                    ? "Please enter a valid email address"
                    : ""
                }
                sx={textFieldStyles}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setEmailError(false);
                }}
              />
            </div>

            <TextField
              required
              fullWidth
              id="contact-message"
              label="Message"
              placeholder="Write your message"
              multiline
              rows={8}
              value={message}
              error={messageError}
              helperText={
                messageError
                  ? "Please enter a message"
                  : ""
              }
              sx={textFieldStyles}
              onChange={(event) => {
                setMessage(event.target.value);
                setMessageError(false);
              }}
            />

            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              className="send-button"
            >
              Send Message
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;