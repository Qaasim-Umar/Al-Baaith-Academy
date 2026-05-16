import React, { useState, useRef } from "react";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const Admission = () => {
  const form = useRef();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const applicantName = form.current.fullname.value;

    // Debug: Show all environment variables
    console.log("=== EMAILJS DEBUG INFO ===");
    console.log("All env vars:", import.meta.env);
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    
    console.log("Service ID:", serviceId);
    console.log("Template ID:", templateId);
    console.log("Public Key:", publicKey ? publicKey.substring(0, 10) + "..." : "NOT SET");

    if (!serviceId || !templateId || !publicKey) {
      setIsSubmitting(false);
      alert("❌ EmailJS configuration missing. Please check environment variables.");
      console.error("Missing environment variables:", {
        serviceId: !!serviceId,
        templateId: !!templateId,
        publicKey: !!publicKey
      });
      return;
    }

    // Combine country code and phone number
    const fullPhoneNumber = `${countryCode}${phoneNumber}`;
    
    // Create a hidden input for the full phone number if it doesn't exist
    if (!form.current.full_phone) {
      const phoneInput = document.createElement('input');
      phoneInput.type = 'hidden';
      phoneInput.name = 'full_phone';
      form.current.appendChild(phoneInput);
    }
    form.current.full_phone.value = fullPhoneNumber;

    // Debug: Show form data
    console.log("Form data before submission:");
    const formData = new FormData(form.current);
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    console.log("Attempting to send email...");

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        (response) => {
          console.log("✅ Email sent successfully:", response);
          setIsSubmitting(false);
          navigate("/AdmissionSuccess", { state: { name: applicantName } });
          e.target.reset(); // Clear form after submission
          setPhoneNumber(""); // Reset phone state
        },
        (error) => {
          console.error("❌ EmailJS Error Details:", error);
          console.error("Error status:", error.status);
          console.error("Error text:", error.text);
          setIsSubmitting(false);
          alert(`❌ Failed to send form: ${error.text || 'Unknown error'} (Status: ${error.status || 'N/A'}). Please check console for details.`);
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

  const inputStyles = "w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#267A95] focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white";
  const labelStyles = "block text-sm font-semibold text-gray-700 mb-2 font-manrope";

  return (
    <>
      <div className="min-h-screen bg-[#f5f9fa] relative selection:bg-[#267A95] selection:text-white flex flex-col">
        {/* Subtle decorative background gradient instead of an image */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#267A95]/10 to-transparent pointer-events-none"></div>
        
        <Navbar />

        <div className="relative z-10 flex-grow py-8 px-4 sm:px-6 lg:px-8 pt-[120px] lg:pt-[140px] flex items-center justify-center">
          <div className="max-w-6xl w-full mx-auto bg-white rounded-[2rem] shadow-2xl overflow-hidden mb-12 flex flex-col lg:flex-row border border-[rgba(38,122,149,0.1)]">
            
            {/* Left Pane - Branding & Welcome (Visible mainly on Desktop) */}
            <div className="lg:w-2/5 relative overflow-hidden bg-[linear-gradient(135deg,#267A95_0%,#1a5f78_100%)] p-10 lg:p-14 text-white flex flex-col justify-between">
              {/* Decorative shapes */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-[#3a9bb8] opacity-20 blur-3xl"></div>
              
              <div className="relative z-10">
                <h1 className="text-3xl lg:text-5xl font-extrabold font-bricolage mb-6 leading-tight">
                  Begin Your <br/>Journey With Us
                </h1>
                <p className="text-[#e0f2f7] text-lg font-manrope leading-relaxed max-w-md">
                  Join Al-Baaith Academy to discover the best way to master Quranic recitation, Tajweed, and Islamic knowledge.
                </p>
              </div>

              <div className="relative z-10 mt-12 hidden lg:block">
                <div className="flex items-center gap-4 text-sm font-medium text-[#e0f2f7] bg-black/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#2DC8D6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Your information is secure and will only be used for admission purposes.
                </div>
              </div>
            </div>

            {/* Right Pane - Form */}
            <div className="lg:w-3/5 bg-white">
              <div className="p-8 sm:p-12 lg:p-14">
                <div className="mb-10 lg:hidden">
                  <h2 className="text-[#267A95] text-3xl font-extrabold font-bricolage mb-3">Admission Application</h2>
                  <p className="text-gray-600 text-base font-manrope">
                    Please fill out this form, and our admissions team will get back to you shortly.
                  </p>
                </div>
                
                <form ref={form} onSubmit={handleSubmit}>
                  <div className="space-y-10">
                    
                    {/* 1. Personal Details */}
                    <section>
                      <h2 className="text-xl font-bold text-[#267A95] border-b border-gray-200 pb-3 mb-6 font-bricolage flex items-center gap-3">
                        <span className="bg-[#267A95]/10 text-[#267A95] w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                        Personal Details
                      </h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="fullname" className={labelStyles}>Full Name *</label>
                          <input type="text" name="fullname" className={inputStyles} placeholder="Full Name" required />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className={labelStyles}>Email Address *</label>
                          <input type="email" name="email" className={inputStyles} placeholder="Email" required />
                        </div>

                        <div className="md:col-span-2">
                          <label htmlFor="phone" className={labelStyles}>
                            Phone Number * <span className="text-xs font-normal text-gray-500">(WhatsApp preferably)</span>
                          </label>
                          <div className="flex gap-3">
                            <input type="text" name="country_code" value={countryCode} onChange={handleCountryCodeChange} className={`${inputStyles} w-24 sm:w-28 text-center font-medium`} placeholder="+234" required />
                            <input type="tel" name="phoneNumber" value={phoneNumber} onChange={handlePhoneChange} className={`${inputStyles} flex-grow`} placeholder="Phone Number" required />
                          </div>
                        </div>

                        <div className="md:col-span-2">
                          <label htmlFor="gender" className={labelStyles}>Gender *</label>
                          <select name="gender" className={inputStyles} required defaultValue="">
                            <option value="" disabled hidden>Please select your gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Prefer not to say">Prefer not to say</option>
                          </select>
                        </div>
                      </div>
                    </section>

                    {/* 2. Course Preferences */}
                    <section>
                      <h2 className="text-xl font-bold text-[#267A95] border-b border-gray-200 pb-3 mb-6 font-bricolage flex items-center gap-3">
                        <span className="bg-[#267A95]/10 text-[#267A95] w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                        Course Preferences
                      </h2>

                      <div className="space-y-8">
                        <div>
                          <label className={labelStyles}>Select the Course(s) you're applying for *</label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                            {["Quran Recitation", "Tajweed", "Quran Memorization", "Modern Standard Arabic", "General Islamic Knowledge"].map((course) => (
                              <label key={course} className="flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-[#267A95]/5 hover:border-[#267A95] transition-all has-[:checked]:bg-[#267A95]/10 has-[:checked]:border-[#267A95]">
                                <input type="checkbox" name="courses" value={course} className="w-5 h-5 text-[#267A95] border-gray-300 rounded focus:ring-[#267A95]" />
                                <span className="ml-3 text-gray-700 font-medium text-sm">{course}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="noOfClasses" className={labelStyles}>Classes per week *</label>
                            <select name="noOfClasses" className={inputStyles} required defaultValue="">
                              <option value="" disabled hidden>Select classes</option>
                              <option value="1 Class(es)">1 Class</option>
                              <option value="2 Class(es)">2 Classes</option>
                              <option value="3 Class(es)">3 Classes</option>
                              <option value="4 Class(es)">4 Classes</option>
                            </select>
                          </div>

                          <div>
                            <label htmlFor="classDuration" className={labelStyles}>Class duration *</label>
                            <select name="classDuration" className={inputStyles} required defaultValue="">
                              <option value="" disabled hidden>Select duration</option>
                              <option value="30 mins">30 mins</option>
                              <option value="1 hour">1 hour</option>
                              <option value="2 hours">2 hours</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className={labelStyles}>Select preferred day(s) *</label>
                          <div className="flex flex-wrap gap-3 mt-3">
                            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                              <label key={day} className="flex items-center px-4 py-2 border border-gray-200 rounded-lg cursor-pointer hover:bg-[#267A95]/5 hover:border-[#267A95] transition-all has-[:checked]:bg-[#267A95]/10 has-[:checked]:border-[#267A95]">
                                <input type="checkbox" name="days" value={day} className="w-4 h-4 text-[#267A95] border-gray-300 rounded focus:ring-[#267A95]" />
                                <span className="ml-2 text-gray-700 font-medium text-sm">{day}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* 3. Additional Information */}
                    <section>
                      <h2 className="text-xl font-bold text-[#267A95] border-b border-gray-200 pb-3 mb-6 font-bricolage flex items-center gap-3">
                        <span className="bg-[#267A95]/10 text-[#267A95] w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                        Additional Information
                      </h2>

                      <div className="space-y-6">
                        <div>
                          <label className={labelStyles}>How did you learn about us?</label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                            {["Google", "Social media", "Recommendation from friend", "Others"].map((means) => (
                              <label key={means} className="flex items-center p-3 border border-gray-200 rounded-xl cursor-pointer hover:bg-[#267A95]/5 hover:border-[#267A95] transition-all has-[:checked]:bg-[#267A95]/10 has-[:checked]:border-[#267A95]">
                                <input type="checkbox" name="means" value={means} className="w-4 h-4 text-[#267A95] border-gray-300 rounded focus:ring-[#267A95]" />
                                <span className="ml-3 text-gray-700 font-medium text-sm">{means}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label htmlFor="message" className={labelStyles}>
                            Your Message <span className="text-xs font-normal text-gray-500">(Optional)</span>
                          </label>
                          <textarea name="message" rows="3" className={`${inputStyles} resize-none`} placeholder="Your Message"></textarea>
                        </div>
                      </div>
                    </section>

                    {/* Submit Section */}
                    <div className="pt-8 mt-8 border-t border-gray-200">
                      <label className="flex items-start gap-3 mb-8 cursor-pointer group">
                        <div className="flex items-center h-5 mt-0.5">
                          <input type="checkbox" name="agree" required className="w-5 h-5 text-[#267A95] border-gray-300 rounded focus:ring-[#267A95]" />
                        </div>
                        <p className="text-gray-600 text-sm font-medium group-hover:text-gray-900 transition-colors">
                          I agree with the <a href="#" className="text-[#D84949] hover:underline hover:text-red-700">terms and condition</a> of this academy
                        </p>
                      </label>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-[linear-gradient(135deg,#267A95_0%,#3a9bb8_100%)] text-white text-lg font-bold rounded-xl shadow-[0_6px_24px_rgba(38,122,149,0.28)] hover:shadow-[0_10px_36px_rgba(38,122,149,0.45)] transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting...
                          </>
                        ) : (
                          "Submit Application"
                        )}
                      </button>
                    </div>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Admission;
