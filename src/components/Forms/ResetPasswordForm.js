import security from "../../assets/images/Secure data-bro.svg";
import { useState } from "react";

function ResetPasswordForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    setEmail("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-5xl overflow-hidden border shadow-2xl rounded-3xl lg:h-[600px] bg-white">
        {/* Image Section - Hidden on mobile */}
        <div className="relative items-center justify-center hidden w-1/2 h-full overflow-hidden lg:flex bg-gradient-to-br from-orange-100 to-orange-50 rounded-l-3xl">
          <div className="absolute bg-orange-300 rounded-full w-60 h-60 -right-16 -bottom-24 opacity-60"></div>
          <div className="relative z-10 w-4/5 h-4/5">
            <img
              src={security}
              alt="security"
              className="object-contain w-full h-full drop-shadow-lg"
            />
          </div>
          <div className="absolute bg-orange-300 rounded-full w-52 h-52 -left-16 -top-24 opacity-60"></div>
        </div>

        {/* Form Section */}
        <div className="relative flex flex-col items-center justify-center w-full h-full p-8 lg:w-1/2 lg:p-12">
          {/* Decorative circles */}
          <div className="absolute hidden w-24 h-24 bg-orange-200 rounded-full -top-12 -right-12 opacity-40 lg:block"></div>
          <div className="absolute hidden w-32 h-32 bg-orange-200 rounded-full -bottom-16 -left-16 opacity-40 lg:block"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center w-full space-y-8">
            <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl">
              Forgot Your Password?
            </h1>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center w-full max-w-md p-6 space-y-6 shadow-md lg:p-8 bg-gradient-to-br from-orange-100 to-orange-50 backdrop-blur-sm rounded-3xl"
            >
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                className="w-full px-4 py-3 text-base transition bg-white border border-orange-200 rounded-lg lg:text-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 text-base font-medium text-white transition bg-orange-500 rounded-full shadow-md lg:text-lg hover:bg-orange-600 active:bg-orange-700"
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordForm;
