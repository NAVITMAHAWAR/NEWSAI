// eslint-disable-next-line no-unused-vars
import React from "react";
import { Loader } from "@mantine/core";

const LoadingSpinner = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Loader size={24} color="blue" />
    </div>
  );
};

export default LoadingSpinner;
