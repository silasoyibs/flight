import React from "react";
import Hero from "./Hero";
import NavBar from "../component/NavBar";

function Header() {
  return (
    <header className=' sm:h-[700px] bg-[url("/hero-img-min.jpg")] bg-cover bg-center bg-no-repeat pt-7 pb-25 px-2'>
      <NavBar />
      <Hero />
    </header>
  );
}

export default Header;
