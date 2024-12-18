import React, { useState, useEffect } from "react";
import "./index.css";
import background from "../src/assets/bgimage.jpg";

const App = () => {
  const [time, setTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format time components
  const hours = time.getHours() % 12 || 12;
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");
  const ampm = time.getHours() >= 12 ? "PM" : "AM";

  // Format date components
  const day = time.toLocaleDateString("en-US", { weekday: "long" });
  const date = time.toLocaleDateString("en-GB");

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={background}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover "
      />

      {/* Clock Container */}
      <div className="relative z-10 bg-gray-900/80 shadow-2xl p-8 rounded-3xl text-white text-center backdrop-blur-lg transform transition duration-500 hover:scale-105">
        {/* Time Display */}
        <div className="flex justify-center items-baseline space-x-2 text-7xl font-extrabold">
          <span className=" transition duration-300">{hours}</span>
          <span className="text-6xl">:</span>
          <span className=" transition duration-300">{minutes}</span>
          <span className="text-3xl font-medium  transition duration-300">{ampm}</span>
        </div>
        {/* Seconds */}
        <div className="mt-2 text-3xl text-gray-400  transition duration-300">
          {seconds}
        </div>
        {/* Date */}
        <div className="mt-4 text-gray-300 text-lg">
          <p>{day}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
