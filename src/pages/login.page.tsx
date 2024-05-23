import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { endpoint } from "../utils/config";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState({ otp: "", email: "" });
  const [isEmailValid, setIsEmailValid] = useState(true);

  const navigate = useNavigate();

  const validateOtp = (otp: string) => {
    if (!otp) {
      setError((prevError) => ({
        ...prevError,
        otp: "OTP cannot be empty.",
      }));
    } else {
      setError((prevError) => ({ ...prevError, otp: "" }));
    }
  };

  const validateEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(email);
    setIsEmailValid(isValid);

    if (!email) {
      setError((prevError) => ({
        ...prevError,
        email: "Email cannot be empty.",
      }));
    } else if (!isValid) {
      setError((prevError) => ({ ...prevError, email: "Email is not valid." }));
    } else {
      setError((prevError) => ({ ...prevError, email: "" }));
    }
  };

  const url = `${endpoint}/login`;
  const dataEmail = {
    email,
  };
  const dataEP = {
    email,
    otp,
  };
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const handleOtpChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    setOtp(e.target.value);
    validateOtp(e.target.value);
  };

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    validateOtp(otp);
    validateEmail(email);

    if (error.otp || error.email || !isEmailValid) {
      return;
    }

    if (isDisabled) {
      try {
        const response = await axios.post(url, dataEmail, config);
        if (response.data.code === 200) {
          toast.success(response.data.message);
          setIsDisabled(false);
        } else {
          toast.error(response.data.message);
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        const response = await axios.post(url, dataEP, config);
        if (response.data.code === 200 && response.data.token) {
          toast.success("Login successful");
          localStorage.setItem("token", response.data.token);
          navigate("/app");
        } else {
          toast.error("Invalid email or token");
        }
      } catch (err) {
        console.error(err);
        toast.error("Invalid email or token");
      }
    }
  };

  return (
    <div className="flex justify-center items-center bg-[#f5f5f5] min-h-screen">
      <div className="p-10 bg-white">
        <p className="text-center mb-6 font-semibold text-[#333333] text-2xl">
          Login
        </p>
        <p className="mb-4 text-lg text-[#333333]">
          Log in to your account by entering your Email
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-4">
            <p className="mb-1 text-xl text-[#333333]">Email</p>
            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              className="py-5 px-4 w-full border rounded bg-transparent"
            />
            <span
              className={`${
                error.email ? "" : "hidden"
              } text-red-600 text-sm mt-2 font-medium block`}
            >
              {error.email}
            </span>
          </div>
          <div className={`form-group relative ${isDisabled ? "hidden" : ""}`}>
            <p className="mb-1 text-xl text-[#333333]">Enter OTP</p>
            <input
              type="text"
              value={otp}
              onChange={handleOtpChange}
              className="py-5 px-4 w-full border rounded bg-transparent"
            />
            <span
              className={`${
                error.otp ? "" : "hidden"
              } text-red-600 text-sm mt-2 font-medium block`}
            >
              {error.otp}
            </span>
          </div>
          <div className="text-center mt-12">
            <button
              className="px-10 py-2 text-base bg-[#25D366] rounded text-white"
              disabled={
                error.email ||
                !isEmailValid ||
                !email ||
                (!isDisabled && (error.otp || !otp))
                  ? true
                  : false
              }
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};