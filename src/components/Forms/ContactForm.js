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
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-md lg:max-w-5xl bg-orange-200 shadow-2xl rounded-2xl lg:rounded-3xl overflow-hidden lg:h-[600px]">
        {/* Form Section */}
        <div className="flex flex-col items-center w-full h-full p-6 py-10 space-y-6 lg:w-1/2 lg:p-10 lg:space-y-8">
          {/* Header */}
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-2xl font-semibold text-white lg:text-3xl">
              Get In Touch
            </h1>

            {/* Social Icons */}
            <div className="flex items-center gap-3 p-3 bg-orange-100 lg:gap-4 lg:p-4 rounded-2xl">
              {socialLinks.map(({ icon: Icon, color, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className={`w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-orange-400 rounded-full transition-all duration-300 ${color} hover:scale-110 active:scale-95`}
                >
                  <Icon className="text-lg text-white lg:text-xl" />
                </button>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full space-y-5 lg:space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              value={value.name}
              required
              className="w-full px-4 py-2.5 lg:py-3 text-sm lg:text-base bg-orange-100 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition placeholder:text-gray-600"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
              value={value.phone}
              required
              pattern="[0-9]{10}"
              className="w-full px-4 py-2.5 lg:py-3 text-sm lg:text-base bg-orange-100 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition placeholder:text-gray-600"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={value.email}
              required
              className="w-full px-4 py-2.5 lg:py-3 text-sm lg:text-base bg-orange-100 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition placeholder:text-gray-600"
            />
            <textarea
              name="query"
              placeholder="Write your query..."
              onChange={handleChange}
              value={value.query}
              required
              rows="4"
              className="w-full px-4 py-2.5 lg:py-3 text-sm lg:text-base bg-orange-100 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition resize-none placeholder:text-gray-600"
            />
            <button
              type="submit"
              className="w-full py-2.5 lg:py-3 text-base lg:text-lg font-medium text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-700 rounded-full transition shadow-md"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Image Section - Hidden on mobile */}
        <div className="items-center justify-center hidden w-1/2 h-full lg:flex bg-gradient-to-br from-orange-100 to-orange-50">
          <img
            src={contact}
            alt="contact illustration"
            className="object-contain w-4/5 h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
