"use client"
import { useState } from "react";

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  return (

    <>
      <header className="fixed top-0 left-0 w-full z-50">

        {/* HEADER */}

        <div className="w-full h-20 bg-black/30 backdrop-blur-lg flex ">

          {/* LEFT */}

          <div className="w-1/5 h-full flex items-center justify-start pl-10 ">
            <h1 className="font-extrabold text-2xl tracking-tight text-white">Vault.</h1>
          </div>

          {/* CENTER */}

          <div className="w-3/5 h-full flex items-center justify-center ">
            <nav className=" hidden lg:flex items-center gap-10 rounded-full border border-[#171717] bg-[#0A0A0A] backdrop-blur-xl px-10 h-12">
              <a className="text-[gray] text-[15px] hover:text-white font-medium" href="">The Card</a>
              <a className="text-[gray] text-[15px] hover:text-white font-medium" href="">Compare</a>
              <a className="text-[gray] text-[15px] hover:text-white font-medium" href="">Process</a>
              <a className="text-[gray] text-[15px] hover:text-white font-medium" href="">FAQ</a>
            </nav>
          </div>

          {/* RIGHT */}

          <div className="w-1/5 h-full flex items-center justify-end pr-10">
            <a href=""> <button className=" hidden lg:block px-4 py-2 border border-[#171717] hover:bg-white hover:text-black font-bold rounded-full cursor-pointer">Client Portal</button></a>

            {/* MOBILE VIEW RIGHT */}

            {!isOpen && (
              <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden text-3xl text-white"
              >
                ☰
              </button>
            )}

            {isOpen && (
              <button
                onClick={() => setIsOpen(false)}
                className="lg:hidden text-3xl text-white"
              >
                ✕
              </button>
            )}



          </div>

        </div>

      </header>

      {/* MENU MOBILE VIEW*/}
      
      {isOpen && (
        <div className="fixed inset-0 bg-black z-40 lg:hidden flex flex-col items-center justify-center gap-8">

          <a href="" className="text-2xl font-bold text-[gray] hover:text-white">
            The Card
          </a>

          <a href="" className="text-2xl font-bold text-[gray] hover:text-white">
            Compare
          </a>

          <a href="" className="text-2xl font-bold text-[gray] hover:text-white">
            Process
          </a>

          <a href="" className="text-2xl font-bold text-[gray] hover:text-white">
            FAQ
          </a>

          <a href=""> <button className=" px-6 py-3 border border-[#171717] hover:bg-white hover:text-black font-bold rounded-full cursor-pointer">Client Portal</button></a>

        </div>
      )}

    </>
  )
}