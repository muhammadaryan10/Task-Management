import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from '../../../assests/Logo.png'
import Dashboard from '../../../assests/Dashboard.png'
import File from '../../../assests/File.png'
import Users from '../../../assests/Users.png'
import Question from '../../../assests/Question.png'


export default function Sidebar() {
  return (
    <div className="flex flex-col justify-between w-16 themeColor py-5">
      <div className="flex flex-col justify-center items-center space-y-4">
        <Link href="/path1">
          <Image src={Logo} alt="Company Logo" className="pb-5 pt-2" />
        </Link>
        <Link href="/path2"><Image src={Dashboard} alt="Dash" className="pb-5 pt-2" /></Link>
        <Link href="/path3"><Image src={File} alt="File" className="pb-5 pt-2" /></Link>
        <Link className="" href="/path4"><Image src={Users} alt="File" className="p-4 rounded-full text-white" /></Link>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Link href="/path5"><Image src={Question} alt="Question" className="pb-5 pt-2" /></Link>
      </div>
    </div>
  );
}
