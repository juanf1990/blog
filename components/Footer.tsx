"use client";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex items-center justify-end font-bold p-2 fixed bg-slate-500 w-full rounded-t z-50 opacity-90 bottom-0">
      <div>
        <button className="px-4 py-1 md:text-base bg-gray-900 text-orange-500 flex items-center rounded-full text-center text-xs">
          <Link href={"http://www.github.com/juanf1990"}>
            Made by Juan Ferreira
          </Link>
        </button>
      </div>
    </footer>
  );
}
export default Footer;
