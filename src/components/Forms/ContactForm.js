import contact from "../../assets/images/Contact us-amico.svg";
import {
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { useState } from "react";

function ContactForm() {
  const [value, setValue] = useState({
    name: "",
    phone: "",
    email: "",
    query: "",
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    setValue({
      name: "",
      phone: "",
      email: "",
      query: "",
    });
  };

  const socialLinks = [
    { icon: FaInstagram, color: "hover:bg-pink-600", label: "Instagram" },
    { icon: FaFacebook, color: "hover:bg-blue-600", label: "Facebook" },
    { icon: FaXTwitter, color: "hover:bg-gray-800", label: "Twitter" },
    { icon: FaWhatsapp, color: "hover:bg-green-600", label: "WhatsApp" },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-color-light">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-md lg:max-w-5xl bg-gradient-to-br from-color-primary to-blue-900 shadow-2xl rounded-3xl overflow-hidden lg:h-[600px]">
        {/* Form Section */}
        <div className="flex flex-col items-center w-full h-full p-8 py-12 space-y-8 lg:w-1/2 lg:p-12 lg:space-y-10">
          {/* Header */}
          <div className="flex flex-col items-center space-y-6">
            <h1 className="text-3xl font-bold text-white lg:text-4xl text-center">
              Get In Touch
            </h1>

            {/* Social Icons */}
            <div className="flex items-center gap-4 p-4 bg-blue-800 lg:gap-5 lg:p-5 rounded-2xl">
              {socialLinks.map(({ icon: Icon, color, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className={`w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-color-secondary rounded-full transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-lg`}
                >
                  <Icon className="text-lg text-white lg:text-2xl" />
                </button>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full space-y-5 lg:space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              value={value.name}
              required
              className="w-full px-5 py-3 lg:py-4 text-base lg:text-lg bg-blue-800 border border-blue-700 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-color-secondary transition shadow-sm"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
              value={value.phone}
              required
              pattern="[0-9]{10}"
              className="w-full px-5 py-3 lg:py-4 text-base lg:text-lg bg-blue-800 border border-blue-700 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-color-secondary transition shadow-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={value.email}
              required
              className="w-full px-5 py-3 lg:py-4 text-base lg:text-lg bg-blue-800 border border-blue-700 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-color-secondary transition shadow-sm"
            />
            <textarea
              name="query"
              placeholder="Write your query..."
              onChange={handleChange}
              value={value.query}
              required
              rows="4"
              className="w-full px-5 py-3 lg:py-4 text-base lg:text-lg bg-blue-800 border border-blue-700 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-color-secondary transition resize-none shadow-sm"
            />
            <button
              type="submit"
              className="w-full py-3 lg:py-4 text-lg lg:text-xl font-semibold text-color-primary bg-white hover:bg-gray-100 active:scale-95 rounded-lg transition shadow-lg hover:shadow-xl"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Image Section - Hidden on mobile */}
        <div className="items-center justify-center hidden w-1/2 h-full lg:flex bg-gradient-to-br from-blue-800 to-blue-700">
          <img
            src={contact}
            alt="contact illustration"
            className="object-contain w-4/5 h-auto drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
