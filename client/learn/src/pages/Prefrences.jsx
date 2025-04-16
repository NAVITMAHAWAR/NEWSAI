/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "motion/react";
import { CircleCheckBig } from "lucide-react";
import { Button } from "@mantine/core";
import { Slide } from "react-awesome-reveal";
import { setPreferences } from "../redux/Slice/newsSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Prefrences = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState([]);
  const Categories = [
    "Technology",
    "Sports",
    "Health",
    "Entertainment",
    "Business",
    "Politics",
  ];
  console.log(selectedCategory);

  const toggleCategory = (Category) => {
    setSelectedCategory(
      selectedCategory.includes(Category)
        ? selectedCategory.filter((C) => C !== Category)
        : [...selectedCategory, Category]
    );
  };

  const handleSavePreferences = async () => {
    await dispatch(setPreferences({ preferences: selectedCategory }));
    navigate("/");
  };
  return (
    <Slide direction="down" triggerOnce>
      <div className="h-screen flex flex-col justify-center items-center ">
        <div>
          <h1 className="text-gray-800 font-semibold text-2xl">
            Select Interests
          </h1>
        </div>

        <div className="grid mt-6 grid-cols-2 sm:grid-cols-3 gap-6">
          {Categories.map((Category) => (
            <motion.div
              key={Category}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9, rotate: -5 }}
              transition={{ duration: 0.5 }}
              onClick={() => toggleCategory(Category)}
              className={`shadow-md rounded-lg flex justify-center items-center gap-4 px-5 py-4 ${
                selectedCategory.includes(Category)
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black"
              }`}
            >
              {selectedCategory.includes(Category) && <CircleCheckBig />}
              {Category}
            </motion.div>
          ))}
        </div>
        <Button onClick={handleSavePreferences} className="mt-6">
          Save Preferences
        </Button>
      </div>
    </Slide>
  );
};

export default Prefrences;
