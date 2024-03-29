import { useState } from "react";
import colSvg from "../assets/colSvg.svg";
import lapSvg from "../assets/laptop.svg";
import scSvg from "../assets/science.svg";

function LocationContact() {
  const [userMessage, setUserMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault()
    setUserMessage({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div
      className={`flex justify-center  px-24 mx-4 my-4 max-[1050px]:flex-col max-[550px]:px-4 gap-6 rounded-md py-3 `}
    >
      <div
        className={`flex-col flex gap-2 shadow-shadow p-4 rounded-md bg-blue-100 text-black relative flex-[0.65] `}
      >
        <div className="flex gap-4 max-[425px]:flex-col  items-center">
          <img src={colSvg} alt="" className="h-[25px] max-[425px]:h-[40px]" />
          <h1 className="text-2xl font-semibold">
            Coochbehar Government Engineering College
          </h1>
        </div>

        <div className={`flex gap-4 max-[425px]:flex-col  items-center`}>
          <img src={lapSvg} alt="" className="h-[25px] max-[425px]:h-[40px]" />
          <h1 className="text-2xl font-semibold">
            Computer Science & Engineering
          </h1>
        </div>

        <div className="flex flex-col gap-2 rounded-md shadow-shadow p-2 text-[1.2rem]">
          <p className=" ">BTech CSE 2022 - 2026</p>
          <p className="">2022 - 2023 Academic Year YGPA - 8.96</p>
          <p className="">
            Positions - Class Representative , Leading InCharge of TECH O NICKS
            (Tech club of CGEC)
          </p>
        </div>
        <div className="flex gap-4 max-[425px]:flex-col  items-center">
          <img src={colSvg} alt="" className="h-[25px] max-[425px]:h-[40px]" />
          <h1 className="text-2xl font-semibold">
            Alipurduar McWilliam Higher Secondary School
          </h1>
        </div>
        <div className={`flex gap-4 max-[425px]:flex-col  items-center`}>
          <img src={scSvg} alt="" className="h-[25px] max-[425px]:h-[40px]" />
          <h1 className="text-2xl font-semibold">Science Stream</h1>
        </div>
        <div className="flex flex-col gap-2 rounded-md shadow-shadow p-2 text-[1.2rem]">
          <p className="">12th - 2021 </p>
          <p className="">Percentage - 96%</p>
        </div>
      </div>
      <div className="flex flex-col  shadow-shadow p-4 rounded-md bg-blue-100 text-black flex-[0.35]">
        <h1 className="text-2xl my-4 font-semibold">Get in Touch </h1>

        {/* form */}

        <form className="flex flex-col gap-4" method="post" onSubmit={handleSubmit}>
          <input
            value={userMessage.name}
            onChange={(e) =>
              setUserMessage({
                email: userMessage.email,
                message: userMessage.message,
                name: e.target.value,
              })
            }
            type="text"
            id="name"
            placeholder="Name"
            className=" h-12 rounded-md px-2 bg-transparent border-2 border-cyan-500 outline-none duration-300"
          />
          <input
            value={userMessage.email}
            onChange={(e) =>
              setUserMessage({
                name: userMessage.name,
                message: userMessage.message,
                email: e.target.value,
              })
            }
            type="email"
            id="email"
            placeholder="Email"
            className=" h-12 rounded-md px-2 bg-transparent border-2 outline-none  border-cyan-500"
          />
          <textarea
            value={userMessage.message}
            onChange={(e) =>
              setUserMessage({
                name: userMessage.name,
                email: userMessage.email,
                message: e.target.value,
              })
            }
            name="message"
            id="message"
            cols="60"
            rows="8"
            placeholder="Leave a Message"
            className="rounded-md px-2 pt-2 bg-transparent resize-none outline-none  border-2 border-cyan-500 text-slate-600"
          />
          <input
            type="submit"
            value="Send"
            className=" bg-slate-800 py-4 text-white rounded-md hover:bg-slate-700 duration-150 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
}

export default LocationContact;
