"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Router from "next/router";

function Header() {
  const [toggle, setToggle] = useState(false);
  const router = Router;

  return (
    <header className="font-bold px-10 py-2 fixed bg-slate-500 w-full rounded-b z-50 opacity-90 max-w-7xl">
      <div className="flex flex-row-reverse items-center justify-between">
        <Link href="/">
          <Image
            className="rounded-full"
            src="http://placeimg.com/460/460/people"
            width={50}
            height={20}
            alt="logo"
          />
        </Link>
        <Link href="/">
          <h1 className="text-[#E3E3E0]">The Blog</h1>
        </Link>
      </div>
    </header>
  );
}
export default Header;
