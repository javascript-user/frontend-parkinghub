import Logo from "../common/Logo";
import blue from "../../assets/images/blue.svg";
import { Link } from "react-router-dom";
import Input from "../common/Input";
import Button from "../common/Button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userLoginValidationSchema } from "../../utils/userValidationSchema";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { loginUser } from "../../api/user-api";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(userLoginValidationSchema),
  });

  const password = watch("password");

  const onSubmit = async(data) => {
    console.log("login data submitted:", data);
    if (data) {
      await loginUser(data);
      console.log("user was succesfully logged");
    }else{
      console.log("something went wrong on form submission");
    }
    reset();
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col w-full h-full md:flex-row md:shadow-2xl md:rounded-3xl md:h-5/6 lg:h-3/5 lg:w-4/6 xl:w-3/6">
        <div className="flex flex-col items-center justify-evenly md:justify-center md:bg-color-primary md:rounded-l-3xl md:w-1/2 md:h-full">
          <Logo className="pt-6 text-3xl md:py-2 md:text-5xl"/>
          <img
            src={blue}
            alt="logo"
            className="object-fill md:h-4/5"
          />
        </div>

        <div className="flex flex-col items-center h-full justify-evenly md:w-1/2 md:rounded-r-3xl">
          <div className="flex items-center h-fit">
            <h1 className="px-2 py-2 text-3xl font-semibold text-blue-500 md:text-4xl lg:text-5xl">
             Welcome Back
            </h1>
          </div>
          <form
           onSubmit={handleSubmit(onSubmit)}
           className="flex flex-col items-center px-4 py-2 justify-evenly gap-y-3 h-3/5 md:h-4/5 lg:h-3/6 md:justify-center"
          >
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
                className="absolute cursor-pointer left-52 bottom-3 "
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </i>)}
            </div>
            <div className="w-full ml-2">
            <Link
              to="/reset"
              className="text-blue-600 visited:text-purple-600 hover:underline"
            >
              Forgot password?
            </Link>
            </div>
            <Button
              type="submit"
              className="w-10/12 text-white bg-blue-500 border-none rounded-full active:bg-blue-600"
            >
              Login
            </Button>
            <div className="flex justify-start w-full ml-4 gap-x-2 ">
              <p>Register for an account :</p>
            <Link
              to="/signup"
              className="text-blue-600 visited:text-purple-600 hover:underline"
            >
              Sign up
            </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
