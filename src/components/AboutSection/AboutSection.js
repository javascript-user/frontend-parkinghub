import group from "../../assets/images/group.webp";
import { useNavigate } from "react-router-dom";

function AboutSection() {
  const navigate = useNavigate();

  const handleClickContactForm = () => {
    navigate("/contact");
  };

  const features = [
    {
      title: "Convenience",
      description:
        "ParkingHub offers a highly convenient parking solution for car owners who are short on time or prefer hassle-free parking. With ParkingHub, you can pre-book a valet who will park your car for you and retrieve it when you're ready to leave.",
    },
    {
      title: "Safety",
      description:
        "ParkingHub takes the safety and security of your vehicle seriously. They ensure that your car is parked in a secure location and are fully insured to cover any damages that may occur while your vehicle is in their care.",
    },
    {
      title: "Flexibility",
      description:
        "ParkingHub offers a range of parking services to meet your specific needs, whether you need short-term or long-term parking. They also offer a range of pricing options to fit your budget.",
    },
    {
      title: "Professionalism",
      description:
        "ParkingHub's team of experienced valets are trained to provide professional and courteous service to all customers. They pride themselves on delivering exceptional customer service and ensuring that each customer's parking experience is stress-free and enjoyable.",
    },
  ];

  return (
    <div className="min-h-screen mt-16 lg:mt-24">
      {/* Hero Section */}
      <div className="relative">
        <div className="w-full bg-gradient-to-br from-color-primary to-blue-900 flex flex-col items-center px-4 py-16 lg:py-24">
          <div className="flex flex-col items-center space-y-6 lg:space-y-10">
            <h1 className="text-4xl font-bold text-center text-white lg:text-7xl">
              ABOUT US
            </h1>
            <p className="w-full px-4 text-base leading-relaxed text-center text-gray-100 lg:w-2/5 lg:text-lg">
              ParkingHub is a smart parking solutions firm that aims to simplify
              and transform the parking experience for customers while helping
              property owners to optimize their parking spaces with efficient
              and cost effective digital systems.
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center px-4 mt-20 lg:mt-44">
          <img
            src={group}
            alt="ParkingHub team"
            className="w-full h-auto rounded-2xl shadow-2xl lg:w-3/5 hover:shadow-3xl transition duration-300"
          />
        </div>
      </div>

      {/* New Era Section */}
      <div className="flex flex-col w-full px-4 py-12 mt-12 lg:flex-row lg:px-0 lg:py-24 lg:mt-0">
        <div className="flex items-center justify-center w-full mb-8 lg:w-1/2 lg:mb-0">
          <h1 className="px-4 text-2xl font-bold text-center lg:text-3xl lg:text-left lg:w-96">
            Welcome to a new era of Parking
          </h1>
        </div>
        <div className="flex flex-col w-full px-4 space-y-6 lg:w-1/2 lg:space-y-8 lg:px-0">
          <p className="w-full text-sm leading-relaxed lg:w-1/2 lg:ml-12 text-slate-500">
            ParkingHub where state-of-the-art technology and innovative
            solutions are revolutionizing the parking experience. ParkingHub is
            designed to make parking effortless by integrating smart sensors,
            mobile applications, and real-time data analytics. With ParkingHub,
            drivers can easily locate available parking spaces, reserve them
            ahead of time, and handle payments seamlessly through a single
            platform.
          </p>
          <p className="w-full text-sm leading-relaxed lg:w-1/2 lg:ml-12 text-slate-500">
            Security and accessibility are also at the forefront of ParkingHub's
            design. Enhanced surveillance and automated enforcement ensure that
            parking rules are adhered to, minimizing illegal parking and
            enhancing safety. For individuals with disabilities, ParkingHub
            offers improved accessibility features by clearly identifying and
            reserving accessible parking spots, ensuring that these spaces are
            used appropriately and are readily available when needed.
          </p>
          <p className="w-full text-sm leading-relaxed lg:w-1/2 lg:ml-12 text-slate-500">
            ParkingHub ushers in a new era of parking management that leverages
            advanced technology to create a seamless, efficient, and
            environmentally friendly experience. By integrating smart solutions,
            ParkingHub not only enhances convenience for drivers but also
            supports better urban planning and sustainable city living. As
            ParkingHub continues to evolve, it promises to further transform
            urban mobility, making our cities smarter and more connected than
            ever before.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="flex flex-col w-full gap-8 px-4 py-12 lg:flex-row lg:py-24 lg:gap-0">
        {/* Feature Cards */}
        <div className="flex justify-center w-full lg:w-1/2 lg:justify-end">
          <div className="grid w-full max-w-2xl grid-cols-1 gap-6 md:grid-cols-2 lg:w-3/4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 space-y-3 transition-all bg-white border border-color-border shadow-md lg:p-8 rounded-2xl hover:border-color-primary hover:shadow-lg lg:space-y-4"
              >
                <h2 className="text-xl font-bold lg:text-2xl text-color-dark">
                  {feature.title}
                </h2>
                <p className="text-base leading-relaxed text-color-accent">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Efficiency Content */}
        <div className="flex justify-center w-full lg:w-1/2">
          <div className="flex flex-col justify-center w-full max-w-xl space-y-6 lg:w-7/12 lg:space-y-8">
            <h2 className="text-2xl font-bold lg:text-3xl">
              Making Parking efficient and EZ!
            </h2>
            <p className="text-sm leading-relaxed text-slate-500">
              One of the unique features of ParkingHub is its focus on
              innovation. The company uses technology to transform the way
              parking works, both in terms of the efficiency of operations for
              property owners and parking operators, as well as the ease of
              access to parking for parking users.
            </p>
            <p className="text-sm leading-relaxed text-slate-500">
              The company's proprietary tech platform can digitize any type and
              size of parking space. Our Hub web for users allows parking
              visitors to find and access parking spots and access several other
              car related services on-the-go. Another key aspect of ParkingHub's
              services is its commitment to customer satisfaction. The company's
              field operations team is well trained to ensure that parking
              visitors experience the best in customer service, and they are
              always willing to go the extra mile to ensure that customers are
              satisfied. This includes access to parking spots, valet
              assistance, and other value added services such as EV Charging,
              car wash and detailing services and several others.
            </p>
            <p className="text-sm leading-relaxed text-slate-500">
              We are a customer first organization, committed to providing a
              hassle-free and convenient parking and vehicle care experience.
              Our focus on innovation, technology and customer satisfaction
              allowing us to focus on our vision on revolutionizing the way
              parking is experienced by users in India.
            </p>
            <button
              onClick={handleClickContactForm}
              className="px-8 py-4 text-base lg:text-xl font-semibold text-white bg-color-primary rounded-lg w-full lg:w-44 hover:bg-blue-800 transition duration-300 shadow-md hover:shadow-lg"
            >
              Join Us
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex items-center justify-center w-full px-4 py-16 lg:py-28">
        <div className="bg-gradient-to-r from-color-primary to-blue-900 rounded-3xl flex flex-col lg:flex-row justify-center lg:justify-evenly items-center w-full lg:w-3/4 p-10 lg:p-16 gap-10 lg:gap-0 shadow-2xl">
          <div className="flex flex-col justify-center w-full space-y-8 lg:w-2/5 lg:space-y-10">
            <h2 className="text-2xl font-bold text-center text-white lg:text-3xl lg:text-left">
              Have a question? Get in touch
            </h2>
            <button
              onClick={handleClickContactForm}
              className="w-full px-8 py-4 text-base font-semibold text-color-primary transition bg-white rounded-lg lg:text-lg lg:w-48 hover:bg-gray-100 shadow-md hover:shadow-lg"
            >
              Contact Us
            </button>
          </div>
          <div className="flex justify-center w-full lg:w-2/5">
            <p className="w-full text-base leading-relaxed text-center text-gray-100 lg:w-4/5 lg:text-left">
              Contact us today to experience hassle-free parking solutions with
              ParkingHub. Our team is ready to assist you with any queries or
              concerns you may have.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
