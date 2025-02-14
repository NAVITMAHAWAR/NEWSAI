/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Lock, Eye, EyeClosed } from "lucide-react";
import { Button } from "@mantine/core";

const Login = () => {
  const [isEyeClick, setEyeClick] = useState(false);
  const handleEyeClick = () => {
    setEyeClick(!isEyeClick);
  };
  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-96 rounded-2xl p-4 shadow-md bg-white"
      >
        <h1 className="text-center text-2xl font-bold mb-4">Welcome Back</h1>
        <form className="space-y-6">
          <div className="flex gap-2">
            <Mail className="text-gray-400" />
            <input
              type="email"
              placeholder="Enter Email..."
              className="focus w-full outline-none border-b border-gray-200"
            />
          </div>

          <div className="flex gap-2 relative">
            <Lock className="text-gray-400" />
            <div onClick={handleEyeClick} className="absolute right-2">
              {isEyeClick ? <Eye /> : <EyeClosed />}
            </div>

            <input
              type={isEyeClick ? "text" : "password"}
              placeholder="Enter Password..."
              className="focus w-full outline-none border-b border-gray-200"
            />
          </div>
          <Button>Login</Button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
