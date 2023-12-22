import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../store/actions/userActions";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(loginUser(data))
      .then((userData) => {
        if (userData && userData.token) {
          console.log("userData", userData);
          localStorage.setItem("token", userData.token);
          toast.success("Logged in successfully!");
          navigate("/");
        } else {
          throw new Error("Login failed: No token received");
        }
      })
      .catch((error) => {
        toast.error("Login failed: " + error.message);
      });
  };
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return (
    <div
      className="min-h-screen flex flex-col justify-start
    pt-10 px-6"
    >
      <div className="max-w-md w-full mx-auto bg-white p-8">
        <h2 className="mb-6 text-3xl font-bold text-center text-gray-900">
          Log In
        </h2>
        <div className="bg-white p-8 border border-gray-300 mt-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: emailPattern,
                    message: "Invalid email format",
                  },
                })}
                placeholder="Your Email"
                className=" w-full p-3 border border-solid bg-ltGrey border-ltGrey rounded-lg text-sm"
              />{" "}
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", { required: "Password is required" })}
                placeholder="Password"
                className=" w-full p-3 border border-solid bg-ltGrey border-ltGrey rounded-lg text-sm"
              />{" "}
              {errors.password && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="flex w-full px-5 py-3 pr-12 bg-blue-600 text-white rounded-lg font-semibold items-center justify-center hover:bg-blue-700"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
