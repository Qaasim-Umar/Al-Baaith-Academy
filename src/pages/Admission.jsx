import React, { useState, useRef } from "react";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import emailjs from "@emailjs/browser";

const Admission = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("✅ Form submitted successfully!");
          e.target.reset(); // Clear form after submission
        },
        (error) => {
          alert("❌ Failed to send form. Please try again later.");
          console.error(error.text);
        }
      );
  };

  const [countryCode, setCountryCode] = useState("+234");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCountryCodeChange = (e) => {
    let value = e.target.value;
    // Allow only "+" followed by digits (max 4)
    if (/^\+?\d{0,4}$/.test(value)) {
      setCountryCode(value);
    }
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value;
    // Allow only digits (7–15 max)
    if (/^\d{0,15}$/.test(value)) {
      setPhoneNumber(value);
    }
  };

  return (
    <>
      <div className="courses-background lg:pt-0 pt-[100px] ">
        <Navbar />

      

        <Footer />
      </div>
    </>
  );
};

export default Admission;
