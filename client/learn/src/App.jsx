/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */

import React, { useEffect, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "@mantine/core/styles.css";
import { Toaster } from "sonner";
import { fetchProduct } from "./redux/Slice/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
// import Homepage from "./pages/Homepage";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Prefrences from "./pages/Prefrences";
import LoadingSpinner from "./components/LoadingSpinner";
const Homepage = lazy(() => import("./pages/Homepage"));

const App = () => {
  return (
    <div>
      <Navbar />

      <Toaster />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/Prefrences" element={<Prefrences />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;

// import React from "react";
// import { useState } from "react";
// import "@mantine/core/styles.css";
// import { Button } from "@mantine/core";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement } from "./redux/Slice/counterSlice";
// const App = () => {
//   // const [count, setCount] = useState(0);
//   const { count } = useSelector((state) => state.count);
//   const dispatch = useDispatch();
//   return (
//     <div>
//       <p>{count}</p>
//       <Button onClick={() => dispatch(increment())}>increment</Button>

//       <Button
//         onClick={() => {
//           dispatch(decrement());
//         }}
//       >
//         Deincrement
//       </Button>

//       {/* <Button
//         onClick={() => {
//           setCount(0);
//         }}
//       >
//         reset
//       </Button> */}
//     </div>
//   );
// };

// export default App;
