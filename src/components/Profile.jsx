import React from "react";
import Photo from "../assets/PhotoNew.jpg";
import TextAnimation from "./TextAnimation";





function Profile({ isDarkMode }) {
  return (
    <div>
      <div className="flex gap-14 mx-4 my-4 px-24 max-[750px]:px-0 max-[750px]:flex-col-reverse max-[750px]:gap-8">
        <div className="flex flex-col flex-[0.6] justify-center gap-4">
          <h1 className=" text-left text-5xl max-[750px]:text-4xl font-[500] font-serif">
            Sayan Sutradhar &#128075;
          </h1>
          <TextAnimation/>
          <p className="text-xl shadow-shadow px-2 py-3 rounded-md bg-blue-100 text-black">
            I am a tech-savvy individual with a Bachelor's degree in Technology,
            as well as a web development enthusiast .I am pursuing my B.Tech
            degree from Coochbehar Government Engineering College and in
            Computer Science and Engineering .Keeping aside my academics , my
            hobbies are including listening and singing song , writing.
          </p>
        </div>
        <div className="flex flex-[0.4]  justify-center items-center">
          <img
            src={Photo}
            height={200}
            className="rounded-[100%] drop-shadow-shadow max-[870px]:h-[200px] max-[450px]:h-[300px]border-[3px] border-double min-[1150px]:h-[350px] hover:scale-105 hover:outline hover:outline-cyan-500 duration-150 "
          />
        </div>
      </div>
      <div className="h-[0.2px] bg-slate-400 w-[75%] m-auto"></div>
    </div>
  );
}

export default Profile;
