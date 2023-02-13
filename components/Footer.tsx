"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Router from "next/router";

function Footer() {
  const [toggle, setToggle] = useState(false);
  const router = Router;

  return (
    <footer className="flex items-center justify-end font-bold p-2 fixed bg-slate-500 w-full rounded-t z-50 opacity-90 bottom-0">
      <div>
        <button className="px-4 py-1 md:text-base bg-gray-900 text-orange-500 flex items-center rounded-full text-center text-xs">
          <Link
            onClick={() => setToggle(!toggle)}
            href={
              toggle
                ? "http://localhost:3000/api/exit-preview"
                : "http://localhost:3000/api/preview"
            }
          >
            Preview Mode
          </Link>
        </button>
      </div>
    </footer>
  );
}
export default Footer;
