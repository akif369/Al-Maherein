import React, { useState } from "react";

function ContactCard() {
    const [formData, setFormData] = useState({
      mobile: "",
      name: "",
      email: "",
      date: "",
      preferredTime: "",
      message: "",
    });
  
    const [error, setError] = useState("");
    const [isScrolling, setIsScrolling] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
  
    const smoothScroll = (targetId) => {
      if (isScrolling || isDisabled) return;
  
      setIsScrolling(true);
      setIsDisabled(true);
    
        document.getElementById(targetId).scrollIntoView({
          behavior: 'smooth',
        });
        setIsScrolling(false);
        setIsDisabled(false);
  
     
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      setError(""); // Clear error message on input change
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const { mobile, name, email, date, preferredTime, message } = formData;
  
      if (!mobile || !name || !email || !date || !preferredTime || !message) {
        setError("Please fill in all fields.");
        smoothScroll("form")
        return;
      }
  
      // Add your form submission logic here
      console.log(formData);
      setError(""); // Clear error message on successful submission
    };
  

  return (
    <form 
      className="flex flex-col absolute top-16 max-sm:right-0 max-sm:left-0 mx-auto right-16 md:right-8 lg:right-16 2xl:right-32 items-start px-2 py-7 md:px-8 md:py-14  text-base bg-white rounded-2xl shadow-lg  text-black text-opacity-40 max-md:px-5 md:top-8 lg:top-16 2xl:top-32 max-sm:w-11/12 max-sm:top-48 max-md:w-5/6 max-md:top-48"
      onSubmit={handleSubmit}
    >
      <div id="form" className="self-center text-3xl font-semibold text-amber-200">
        Get Touch With Us
      </div>
      {error && <div className="self-center mt-4 text-red-500">{error}</div>}
      <input
        type="text"
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        placeholder="Mobile"
        className="p-3 mt-16 max-w-full whitespace-nowrap rounded border border-solid border-black border-opacity-40 w-[504px] max-md:w-full max-md:mt-10"
      />
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="p-3 mt-7 max-w-full whitespace-nowrap rounded border border-solid border-black border-opacity-40 w-[504px] max-md:w-full"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="E-mail"
        className="p-3 mt-7 max-w-full whitespace-nowrap rounded border border-solid border-black border-opacity-40 w-[504px] max-md:w-full"
      />
      <input
        type="text"
        name="date"
        value={formData.date}
        onChange={handleChange}
        placeholder="Date (DD/MM/YYYY)"
        className="px-3 py-2.5 mt-7 max-w-full rounded border border-solid border-black border-opacity-40 w-[504px] max-md:w-full"
      />
      <input
        type="text"
        name="preferredTime"
        value={formData.preferredTime}
        onChange={handleChange}
        placeholder="Preferred Time (From 11:00 am to 9:00 pm)"
        className="px-3 py-2.5 mt-7 max-w-full rounded border border-solid border-black border-opacity-40 w-[504px] max-md:w-full"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        className="px-3 pt-4 pb-32 mt-7 max-w-full whitespace-nowrap rounded border border-solid border-black border-opacity-40 w-[504px] max-md:w-full max-md:pb-10"
      />
      <button
        type="submit"
        className="self-center px-16 py-3.5 mt-10 max-w-full font-medium text-white whitespace-nowrap bg-amber-200 rounded-lg shadow-[2px_4px_4px_rgba(255,191,120,0.6)] w-[172px] max-md:px-5 max-md:mt-10"
      >
        Send
      </button>
    </form>
  );
}

export default ContactCard;
