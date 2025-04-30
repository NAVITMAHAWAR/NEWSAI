/* eslint-disable no-unused-vars */
// AboutPage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.7, ease: "easeOut" },
  }),
};

export default function AboutPage() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`${dark ? "dark" : ""} transition-colors duration-500`}>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-pink-100 to-yellow-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="w-full max-w-6xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-6 sm:p-10 shadow-2xl relative transition-all duration-500"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="absolute top-4 right-4 text-gray-700 dark:text-gray-100 hover:scale-110 transition-transform duration-300"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Title */}
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Welcome to NewsAi!
          </motion.h1>

          {/* Subhead */}
          <motion.p
            className="text-base sm:text-lg text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Were not just building apps — were creating digital experiences that
            feel alive. Explore the magic of speed, style, and seamless design.
          </motion.p>

          {/* News Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {[
              {
                title: "🚀 Product Launch: NovaBoard",
                desc: "Real-time data, fluid charts, and modular widgets that just *work*.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "🎉 We Hit 1M Users!",
                desc: "Thanks to our amazing community for helping us grow, learn, and inspire daily.",
                color: "from-pink-500 to-red-500",
              },
              {
                title: "🔐 Security First",
                desc: "Zero-trust authentication and multi-layer encryption. Your data is sacred.",
                color: "from-purple-500 to-indigo-500",
              },
              {
                title: "🌍 Going Global",
                desc: "Now available in 20+ languages, optimized for low-bandwidth regions.",
                color: "from-yellow-500 to-orange-500",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`p-5 rounded-xl shadow-md text-white bg-gradient-to-r ${item.color} hover:scale-[1.03] transition-transform duration-300`}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={index + 2}
              >
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-sm sm:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Team Section */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                name: "Rahul",
                role: "Frontend Developer",
                img: "/public/rahul.jpg",
              },
              {
                name: "Navit",
                role: "Backend Developer",
                img: "/public/navit.jpg",
              },
              {
                name: "Yuvraj",
                role: "Backend Developer",
                img: "/public/YUVI.jpeg",
              },
            ].map((person, index) => (
              <motion.div
                key={person.name}
                className="p-6 bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={index + 6}
              >
                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-800">
                  <img
                    src={person.img}
                    alt={`${person.name}'s avatar`}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h4 className="text-center mt-4 text-lg font-bold text-gray-800 dark:text-white">
                  {person.name}
                </h4>
                <p className="text-center text-sm text-gray-600 dark:text-gray-300">
                  {person.role}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Live Stats */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              "1M+ Users",
              "99.99% Uptime",
              "50+ Countries",
              "24/7 Support",
            ].map((stat, index) => (
              <motion.div
                key={stat}
                className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow hover:scale-105 transition-transform"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={index + 9}
              >
                <p className="text-lg sm:text-xl font-bold text-indigo-600 dark:text-indigo-300">
                  {stat}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Footer Quote */}
          <motion.p
            className="mt-10 text-center text-gray-600 dark:text-gray-400 italic text-sm"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={13}
          >
            “Technology should be beautiful, functional, and joyful.” – The
            SparkVerse Team
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

// import React from "react";
// import { motion } from "framer-motion";

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.3, duration: 0.7, ease: "easeOut" },
//   }),
// };

// export default function AboutPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-pink-100 to-yellow-100 flex items-center justify-center px-6 py-16">
//       <motion.div
//         className="max-w-4xl w-full bg-white/80 backdrop-blur-lg rounded-3xl p-10 shadow-2xl"
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         {/* Title */}
//         <motion.h1
//           className="text-5xl font-extrabold text-center bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6"
//           variants={fadeUp}
//           initial="hidden"
//           animate="visible"
//           custom={0}
//         >
//           Welcome to SparkVerse!
//         </motion.h1>

//         {/* Subhead */}
//         <motion.p
//           className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-8"
//           variants={fadeUp}
//           initial="hidden"
//           animate="visible"
//           custom={1}
//         >
//           Were not just building apps — were creating digital experiences that
//           feel alive. Explore the magic of speed, style, and seamless design.
//         </motion.p>

//         {/* News Highlights */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
//           {[
//             {
//               title: "🚀 Product Launch: NovaBoard",
//               desc: "Our next-gen dashboard is here. Real-time data, fluid charts, and modular widgets that just *work*.",
//               color: "from-blue-500 to-cyan-500",
//             },
//             {
//               title: "🎉 We Hit 1M Users!",
//               desc: "A huge thank you to our amazing community! You’ve helped us grow, learn, and inspire daily.",
//               color: "from-pink-500 to-red-500",
//             },
//             {
//               title: "🔐 Security First",
//               desc: "We’ve upgraded to zero-trust authentication and rolled out multi-layer encryption. Your data is sacred.",
//               color: "from-purple-500 to-indigo-500",
//             },
//             {
//               title: "🌍 Going Global",
//               desc: "Now available in 20+ languages and optimized for low-bandwidth regions. Tech without borders.",
//               color: "from-yellow-500 to-orange-500",
//             },
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               className={`p-5 rounded-xl shadow-md text-white bg-gradient-to-r ${item.color}`}
//               variants={fadeUp}
//               initial="hidden"
//               animate="visible"
//               custom={index + 2}
//             >
//               <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
//               <p className="text-sm">{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Footer Quote */}
//         <motion.p
//           className="mt-10 text-center text-gray-600 italic text-sm"
//           variants={fadeUp}
//           initial="hidden"
//           animate="visible"
//           custom={6}
//         >
//           “Technology should be beautiful, functional, and joyful.” – The
//           SparkVerse Team
//         </motion.p>
//       </motion.div>
//     </div>
//   );
// }

// /* eslint-disable no-unused-vars */
// import React from "react";
// import { motion } from "framer-motion";

// const textVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.3,
//       duration: 0.8,
//     },
//   }),
// };

// const AboutPage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100 flex items-center justify-center px-4 py-12">
//       <motion.div
//         className="bg-white/70 backdrop-blur-lg shadow-2xl rounded-3xl p-10 max-w-4xl w-full text-center"
//         initial={{ scale: 0.95, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.6 }}
//       >
//         <motion.h1
//           className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mb-6"
//           initial="hidden"
//           animate="visible"
//           variants={textVariants}
//         >
//           About Us
//         </motion.h1>

//         <motion.p
//           className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed"
//           custom={1}
//           initial="hidden"
//           animate="visible"
//           variants={textVariants}
//         >
//           We are creators, dreamers, and coders who believe in building tools
//           that make the digital world more fun and functional.
//         </motion.p>

//         <motion.p
//           className="text-lg sm:text-xl font-medium mt-6 leading-relaxed bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text"
//           custom={2}
//           initial="hidden"
//           animate="visible"
//           variants={textVariants}
//         >
//           Our mission is simple: craft experiences that are fast, beautiful, and
//           joyful to use — whether youre working, learning, or just vibing
//           online.
//         </motion.p>

//         <motion.p
//           className="text-base text-gray-600 mt-8 italic"
//           custom={3}
//           initial="hidden"
//           animate="visible"
//           variants={textVariants}
//         >
//           Built with 💙 in React, styled with Tailwind, animated with Motion.
//         </motion.p>
//       </motion.div>
//     </div>
//   );
// };

// export default AboutPage;
