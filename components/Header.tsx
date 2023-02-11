"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Router from "next/router";

function Header() {
  const [toggle, setToggle] = useState(false);
  const router = Router;

  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src="http://placeimg.com/460/460/people"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        <h1>The Blog</h1>
      </div>
      <div>
        <button className="px-5 py-3 text-sm md:text-base bg-gray-900 text-orange-500 flex items-center rounded-full text-center">
          <Link
            onClick={() => setToggle(!toggle)}
            href={
              toggle
                ? "http://localhost:3000/api/preview"
                : "http://localhost:3000/api/exit-preview"
            }
          >
            Preview Mode
          </Link>
        </button>
      </div>
    </header>
  );
}
export default Header;
