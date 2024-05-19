import React from "react";
import Button from "../components/Button";
import familytreeImage from "../assets/familytreeImage.jpg";

const Homepage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${familytreeImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
        position: "absolute",
      }}
    >
      <div className="bg-black/30 absolute top-0 left-0 w-screen h-screen p-8">
        <div className="flex flex-row justify-center md:justify-between mb-32 md:mb-24">
          <p>logo here</p>
          <div className="hidden md:flex flex-row gap-4">
            <Button label={"Signup"} />
            <Button label={"Login"} />
          </div>
        </div>
        <div className="flex flex-col items-center text-center ">
          <h1 className="text-white text-5xl mb-12 md:mb-8 w-1/3">Familytree</h1>
          <p className="text-white/80 text-sm md:text-lg text-center  md:w-2/3 mb-8">
            Welcome to Familytree, a platform to store and manage your
            genealogical data. we use strict security standards and guidelines
            to ensure only your family are authorised to access your information
            we encrypt your data to ensure privacy as we ourselves can't read
            your data
          </p>
          <Button label={"Get Started"}/>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
