import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      role_id: "customer",
      password: "",
      confirmPassword: "",
    },
  });
  const [roles, setRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/roles")
      .then((response) => setRoles(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center px-6">
      <div className="max-w-md w-full mx-auto bg-white p-8  ">
        <h2 className="mb-6 text-3xl font-bold text-center text-gray-900">
          Sign Up
        </h2>
        <div className="bg-white p-8 border border-gray-300 mt-6 rounded-lg shadow-lg">
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-600 block"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                })}
                placeholder="Your Name"
                className="form-input w-full p-3 border border-solid bg-ltGrey border-ltGrey rounded-lg text-sm"
              />
              {errors.name && (
                <span className="text-red-500 text-xs">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="mb-5">
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
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email format",
                  },
                })}
                placeholder="Your Email"
                className="form-input w-full p-3 border border-solid bg-ltGrey border-ltGrey rounded-lg text-sm"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-600   "
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      "Password must be at least 8 characters, including a number, uppercase and lowercase letter, and a special character",
                  },
                })}
                placeholder="Password"
                className="form-input w-full p-3 border border-solid bg-ltGrey border-ltGrey rounded-lg text-sm "
              />
              {errors.password && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                {...register("confirmPassword", {
                  validate: (value) =>
                    value === watch("password") || "The passwords do not match",
                })}
                placeholder="Confirm Password"
                className="form-input w-full p-3 border border-solid bg-ltGrey border-ltGrey rounded-lg text-sm"
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="role_id"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Role
              </label>
              <select
                id="role_id"
                {...register("role_id", { required: "Role is required" })}
                className="form-select w-full p-3 border border-solid bg-ltGrey border-ltGrey rounded-lg text-sm"
                defaultValue=""
              >
                {roles.map((role) => (
                  <option key={role.id} value={role.id}>
                    {role.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="storeName"
                className="text-sm font-semibold text-gray-700 block"
              >
                Store Name
              </label>
              <input
                type="text"
                id="storeName"
                {...register("storeName", {
                  required: "Store name is required",
                  minLength: {
                    value: 3,
                    message: "Store name must be at least 3 characters",
                  },
                })}
                className="mt-1 w-full p-3 border border-gray-300 rounded-md"
              />
              {errors.storeName && (
                <span className="text-red-500 text-xs">
                  {errors.storeName.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full p-3 bg-blue-600 text-white rounded-lg font-semibold ${
                isLoading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-700"
              }`}
            >
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
