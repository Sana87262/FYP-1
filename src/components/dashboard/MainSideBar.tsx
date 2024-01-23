"use client";
import React, { SetStateAction, useContext } from "react";

import { AiOutlineHome, AiOutlineClose } from "react-icons/ai";
import { MdOutlineExplore, MdGroups } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";
import Link from "next/link";
import { IoSettingsOutline } from "react-icons/io5";

const MainSideBar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: Boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <aside
      className={`bg-white dark:bg-slate-600 dark:text-white top-4 left-4 lg:fixed lg:block lg:top-16 lg:left-8 rounded-lg overflow-hidden transition-all duration-200 ${
        isOpen ? "w-60 p-4 block fixed" : "w-0 hidden"
      } lg:w-48 lg:p-4 max-lg:z-20 shadow-sm`}
    >
      <ul>
        <li className="flex justify-end items-center lg:hidden">
          <AiOutlineClose
            onClick={() => setIsOpen(false)}
            className=" hover:text-red-800 cursor-pointer"
          />
        </li>
        <li className="flex justify-start  items-center hover:bg-blue-200 hover:text-blue-800 rounded-lg p-2">
          <AiOutlineHome className="mr-2 " />
          <Link href="/dashboard" onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li className="flex justify-start  items-center hover:bg-blue-200 hover:text-blue-800 rounded-lg p-2">
          <IoCreateOutline  className="mr-2 " />
          <Link href="/dashboard/post" onClick={() => setIsOpen(false)}>
            Create
          </Link>
        </li>
        <li className="flex  justify-start  items-center hover:bg-blue-200 hover:text-blue-800 rounded-lg p-2">
          <MdOutlineExplore className="mr-2" />
          <Link href={"/dashboard/explore"} onClick={() => setIsOpen(false)}>
            Explore
          </Link>
        </li>
        <li className="flex  justify-start  items-center hover:bg-blue-200 hover:text-blue-800 rounded-lg p-2">
          <MdGroups className="mr-2" />
          <Link href={"/dashboard/groups"} onClick={() => setIsOpen(false)}>
            Groups
          </Link>
        </li>
        <li className="flex  justify-start  items-center hover:bg-blue-200 hover:text-blue-800 rounded-lg p-2">
          <IoSettingsOutline className="mr-2" />
          <Link href={"/dashboard/setting"} onClick={() => setIsOpen(false)}>
            Setting
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default MainSideBar;
