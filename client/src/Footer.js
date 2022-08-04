import React from "react";
import Twitter from "./components/Twitter";

export default function Footer() {
  return (
    <footer
      className="w-full p-2 text-sm md:text-base bg-gray-900 text-gray-50 text-center flex space-x-1 items-center justify-center"
      style={{ height: "6vh" }}
    >
      <p className=" text-sm ">
        <a
          className="hover:text-slate-300"
          href="https://github.com/yagopajarino"
        >
          Yago Pajariño
        </a>{" "}
        |
      </p>
      <p className="text-sm">{new Date().getFullYear()} |</p>
      <Twitter />
    </footer>
  );
}
