import { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";

import NavBar from "./NavBar";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`sticky top-0 flex items-center bg-bckgrnd-light ${
        isScrolled && "bg-bckgrnd"
      }`}
    >
      <main className="max-w-full mx-auto flex-grow flex flex-col my-5">
        <div className="flex items-center justify-between mx-24">
          <Link href="/">
            <h1 className="font-bold text-3xl">Aesthetica</h1>
          </Link>
          <NavBar />
          <div className="flex items-center space-x-4 text-sm font-light">
            <AiOutlineSearch className="hidden h-6 w-6 sm:inline cursor-pointer" />
            <Link href="/profile">
              <AiOutlineUser className="hidden h-6 w-6 sm:inline cursor-pointer" />
            </Link>
            <Link href="/shoppingBag">
              <BiShoppingBag className="hidden h-6 w-6 sm:inline cursor-pointer" />
            </Link>
          </div>
        </div>
      </main>
    </header>
  );
};

export default Header;
