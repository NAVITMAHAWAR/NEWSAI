/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Mail, Lock, Eye, EyeClosed, User } from "lucide-react";
import { Button } from "@mantine/core";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { SignUp } from "../redux/Slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "@mantine/core";

const Register = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const [isEyeClick, setIsEyeClick] = useState(false);
  const [isEyeClick2, setEyeClick2] = useState(false);

  const handleEyeClick = () => {
    setIsEyeClick(!isEyeClick);
  };

  const handleEyeClick2 = () => {
    setEyeClick2(!isEyeClick2);
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(SignUp(data));
  };

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-96 rounded-2xl p-4 shadow-md bg-white"
      >
        <h1 className="text-center text-2xl font-bold mb-4">
          Create an Account
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-2 items-center  border-b border-gray-200">
            <User className="text-gray-500" />
            <input
              type="name"
              placeholder="Full Name"
              className="focus w-full outline-none border-b border-gray-200"
              required
              {...register("name")}
            />
          </div>
          <div className="flex gap-2 items-center border-b border-gray-200">
            <Mail className="text-gray-500" size={20} />
            <input
              type="email"
              placeholder="Email Address"
              className="focus outline-none w-full "
              required
              {...register("email")}
            />
          </div>

          <div className="flex gap-2 relative items-center  border-b border-gray-200">
            <Lock className="text-gray-500" size={20} />
            <div onClick={handleEyeClick} className="absolute right-2">
              {isEyeClick ? <Eye /> : <EyeClosed />}
            </div>

            <input
              type={isEyeClick ? "text" : "password"}
              placeholder="Password..."
              className="focus w-full outline-none border-b border-gray-200"
              required
              {...register("password")}
            />
          </div>

          <div className="flex gap-2 relative items-center  border-b border-gray-200">
            <Lock className="text-gray-500" size={20} />
            <div onClick={handleEyeClick2} className="absolute right-2">
              {isEyeClick2 ? <Eye /> : <EyeClosed />}
            </div>

            <input
              type={isEyeClick2 ? "text" : "password"}
              placeholder="Confirm Password..."
              className="focus w-full outline-none border-b border-gray-200"
              required
              {...register("confirmPassword")}
            />
          </div>

          <Button type="submit" fullWidth>
            {loading ? <Loader size={15} color="white" /> : "Signup"}
          </Button>
          <p className="text-center text-gray-800">
            Don&apos;t have an account?{" "}
            <Link to="/Login" className="text-sky-500 hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Register;
