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
        localStorage.setItem("token", userData.token);
        toast.success("Logged in successfully!");
        navigate("/");
      })
      .catch((error) => {
        toast.error("Login failed: " + error.message);
      });
  };
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
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
            className="form-control"
          />{" "}
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password", { required: "Password is required" })}
            className="form-control"
          />{" "}
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
        </div>

        <button type="submit" className="submit-button">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
