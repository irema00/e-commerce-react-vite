import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Icon } from "@iconify/react";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      mode: "onChange",
      role_id: "3",
      password: "",
      confirmPassword: "",
    },
  });
  const [roles, setRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const selectedRole = watch("role_id");

  useEffect(() => {
    setIsLoading(true);
    api
      .get("/roles")
      .then((response) => {
        console.log("Roles Data", response.data);
        setRoles(response.data);
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, [setValue]);

  const onSubmit = (data) => {
    setIsLoading(true);
    let formData = {};
    if (data.role_id === "store") {
      formData = {
        name: data.name,
        email: data.email,
        password: data.password,
        role_id: data.role_id,
        store: {
          name: data.storeName,
          phone: data.storePhone,
          tax_no: data.storeTaxId,
          bank_account: data.storeBankAccount,
        },
      };
    } else {
      formData = {
        name: data.name,
        email: data.email,
        password: data.password,
        role_id: data.role_id,
      };
    }
    api
      .post("/signup", formData)
      .then((response) => {
        console.log("Registration successful", response);
        toast.success("Congratulations! You've successfully signed up!");
        navigate(-1);
      })
      .catch((error) => {
        console.error("Registration failed", error);
        setError("apiError", {
          type: "manual",
          message: "Registration failed",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  /* regex patterns */
  const turkeyPhoneNumberPattern = /^(\+90)?[0-9]{10}$/;
  const taxIdPattern = /^T\d{4}V\d{6}$/;
  const ibanPattern = /^[A-Z]{2}[0-9]{2}[A-Z0-9]{4}[0-9]{7}([A-Z0-9]?){0,16}$/;
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return (
    <div className="min-h-screen flex flex-col justify-center px-6">
      <div className="max-w-md w-full mx-auto bg-white p-8  ">
        <h2 className="mb-6 text-3xl font-bold text-center text-gray-900">
          Sign Up
        </h2>
        <div className="bg-white p-8 border border-gray-300 mt-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                    value: passwordPattern,
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
                value={watch("role_id")}
              >
                {roles.map((role) => (
                  <option key={role.id} value={role.id}>
                    {role.name}
                  </option>
                ))}
              </select>
            </div>

            {selectedRole === "2" && (
              <>
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
                    className="mt-2 w-full p-3 border border-solid bg-ltGrey border-ltGrey rounded-lg text-sm"
                  />
                  {errors.storeName && (
                    <span className="text-red-500 text-xs">
                      {errors.storeName.message}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="storePhone"
                    className="text-sm font-semibold text-gray-700 block"
                  >
                    Store Phone
                  </label>
                  <input
                    type="text"
                    id="storePhone"
                    {...register("storePhone", {
                      required: "Store phone is required",
                      pattern: {
                        value: turkeyPhoneNumberPattern,
                        message:
                          "Invalid Turkish phone number, +90 XXX XXX XX XX",
                      },
                    })}
                    className="mt-2 w-full p-3 border border-solid bg-ltGrey border-ltGrey rounded-lg text-sm"
                  />
                  {errors.storePhone && (
                    <span className="text-red-500 text-xs">
                      {errors.storePhone.message}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="storeTaxId"
                    className="text-sm font-semibold text-gray-700 block"
                  >
                    Store Tax ID
                  </label>
                  <input
                    type="text"
                    id="storeTaxId"
                    {...register("storeTaxId", {
                      required: "Store Tax ID is required",
                      pattern: {
                        value: taxIdPattern,
                        message: "Invalid Tax ID format,  “TXXXXVXXXXXX” ",
                      },
                    })}
                    className="mt-2 w-full p-3 border border-solid bg-ltGrey border-ltGrey rounded-lg text-sm"
                  />
                  {errors.storeTaxId && (
                    <span className="text-red-500 text-xs">
                      {errors.storeTaxId.message}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="storeBankAccount"
                    className="text-sm font-semibold text-gray-700 block"
                  >
                    Store Bank Account (IBAN)
                  </label>
                  <input
                    type="text"
                    id="storeBankAccount"
                    {...register("storeBankAccount", {
                      required: "Store Bank Account is required",
                      pattern: {
                        value: ibanPattern,
                        message: "Invalid IBAN format",
                      },
                    })}
                    className="mt-2  w-full p-3 border border-solid bg-ltGrey border-ltGrey rounded-lg text-sm"
                  />
                  {errors.storeBankAccount && (
                    <span className="text-red-500 text-xs">
                      {errors.storeBankAccount.message}
                    </span>
                  )}
                </div>
              </>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className={` flex w-full px-5 py-3 pr-12 bg-blue-600 text-white rounded-lg font-semibold  items-center justify-center ${
                isLoading
                  ? "opacity-60 cursor-not-allowed"
                  : "hover:bg-blue-700"
              }`}
            >
              {isLoading && (
                <Icon icon="ei:spinner-3" className="animate-spin text-3xl" />
              )}
              <p>{isLoading ? " Signing Up " : "Sign Up"}</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
