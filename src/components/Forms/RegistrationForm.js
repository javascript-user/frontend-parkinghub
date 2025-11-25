import Logo from "../common/Logo";
import gps from "../../assets/images/GPS navigator-bro.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSignupValidationSchema } from "../../utils/userValidationSchema";
import { createUser } from "../../api/user-api";
import Input from "../common/Input";
import Button from "../common/Button";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function RegistrationForm() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(userSignupValidationSchema),
  });

  const password = watch("password");

  const onSubmit = async (data) => {
    console.log("Form Submitted Successfully:", data);
    if (data) {
      await createUser(data);
      reset();
      console.log("User registered successfully:", data, "Please verify your email");
    }else{
      console.log("something went wrong on form submission");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="flex flex-col items-center justify-center w-full h-full border shadow-2xl lg:w-3/4 md:flex-row md:rounded-3xl lg:h-4/5 ">
        <div className="flex flex-col items-center justify-center md:w-1/2 md:h-full rounded-l-3xl ">
          <Logo className="text-4xl md:text-5xl lg:text-6xl" />
          <img
            src={gps}
            alt="gps"
            className="hidden lg:h-5/6 md:h-4/6 md:block"
          />
        </div>
        <div className="flex flex-col items-center justify-center h-3/5 md:w-1/2 md:h-full gap-y-10 md:rounded-r-3xl">
          <div>
            <h1 className="text-2xl font-semibold md:text-3xl">
              Register an account
            </h1>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center px-4 py-2 gap-y-3"
          >
            <Input
              error={errors}
              isTouched={touchedFields.username}
              name="username"
              placeholder="Enter your name"
              {...register("username")}
            />
            <Input
              error={errors}
              name="email"
              placeholder="Email"
              {...register("email")}
              isTouched={touchedFields.email}
            />

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                error={errors}
                name="password"
                placeholder="Password"
                {...register("password")}
                isTouched={touchedFields.password}
              />
             {password && ( <i
                className="absolute cursor-pointer left-80 bottom-3 "
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </i>)}
            </div>

            <Input
              type={"password"}
              isTouched={touchedFields.confirmPassword}
              error={errors}
              name="confirmPassword"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
            />

            <Button
              type="submit"
              className="w-10/12 px-6 py-2 mt-4 text-xl bg-orange-400 border-none rounded-full md:w-9/12"
            >
              Register
            </Button>
            <div className="text-orange-400 underline">
              <Link to="/login">
                Already have an account? <span>Login</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
