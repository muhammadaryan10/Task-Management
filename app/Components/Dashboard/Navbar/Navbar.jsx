import React from "react";
import "../Navbar/Navbar.css";
import Calender from "../../../assests/Calender.png";
import Image from "next/image";
import Notification from "../../../assests/Notification.png";
import Setting from "../../../assests/Settings.png";
import More from '../../../assests/More.png'
import Avatar from '../../../assests/Avatar.png'
import Search from '../../../assests/Search.png'

export default function Navbar() {
  return (
    <div className="Main">
      <div className="Left_Section">
        <h1 className="title">All Projects</h1>
        <div class="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl ">
          <div class="md:flex">
            <div class="w-full">
              <div class="relative">
                <Image
                  src={Search}
                  alt="Search"
                  className="mx-1 absolute  text-gray-400 top-2 left-1"
                />
                <input
                  type="text"
                  className="themeBackgroundColor h-10 w-full px-12 rounded-full focus:outline-none hover:cursor-pointer"
                  name=""
                />
              </div>
            </div>
          </div>
        </div>
        <button className="bg-black rounded-full p-2 text-white flex items-center">
          <Image src={Calender} alt="Calender" className="mx-1" />
          Calender
        </button>
      </div>
      <div className="Right_Section mx-2 space-x-2">
        <button className="themeBackgroundColor p-2 rounded-full">
          <Image
            src={Notification}
            alt="Notification"
            className=" text-gray-400"
          />
        </button>
        <button className="themeBackgroundColor p-2 rounded-full">
          <Image
            src={Setting}
            alt="Setting"
            className=" text-gray-400"
          />
        </button>
        <div className="flex w-full rounded-full themeBackgroundColor">
          <Image
            src={Avatar}
            alt="Avatar"
            className="p-1 mx-1"
          />
          <div className="w-full py-1">
            <p className="profileHeading">Ahmed yahyaoui</p>
            <p className="profileSubHeading">Software Dev</p>
          </div>
          <Image
            src={More}
            alt="More"
            className="py-2 mx-2"
          />
        </div>
      </div>
    </div>
  );
}
