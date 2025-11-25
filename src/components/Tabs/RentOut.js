import Logo from "../common/Logo";
import RentOutForm from "../Forms/RentOutForm";

function RentOut() {
  return (
    <div className="h-screen w-full lg:bg-[#ffa31a] flex justify-center items-center">
      <div className="lg:w-2/5 lg:h-[80vh] p-8 flex flex-col justify-between bg-white gap-y-3 lg:gap-y-0 ">
        <Logo className="text-3xl lg:ml-auto lg:mr-auto lg:text-5xl" />
        <h1 className="text-2xl">Rent Out Your Parking Space</h1>
        <p className="text-balance">
          Have a vacant plot or built up space lying vacant in the short term or
          for longer than a year? Now, you can rent out your space as a parking
          spot on our platform and earn an extra income while providing a
          valuable service to those in need of a place to park. Write in to us
          if you'd like to list your space.
        </p>
        <hr />
        <RentOutForm />
      </div>
    </div>
  );
}

export default RentOut;
