"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Router from "next/router";

function Header() {
  const [toggle, setToggle] = useState(false);
  const router = Router;

  return (
    <header className="font-bold px-10 py-2 fixed bg-slate-500 w-full rounded-b z-50 opacity-90 max-w-7xl flex justify-between">
      <div className="flex flex-row-reverse items-center justify-end gap-x-5">
        <span className="animate-pulse">
          {new Date().toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>
        <Link href="/">
          <h1 className="text-[#E3E3E0] hover:scale-110 transition-all duration-300 ease-in-out animate-pulse">
            Blog
          </h1>
        </Link>
      </div>
      <Link href="/">
        <Image
          className="rounded-full"
          src="http://placeimg.com/460/460/people"
          width={50}
          height={20}
          alt="logo"
        />
      </Link>
    </header>
  );
}
export default Header;
