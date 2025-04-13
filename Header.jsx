import React from "react";
import Nav from "./src/component/Nav";
import Hero from "./Hero";

function Header() {
  return (
    <header className='[h-600px] sm:h-screen bg-[url("./hero-img-min.jpg")] bg-cover bg-center bg-no-repeat pt-7 pb-25 px-2'>
      <Nav />
      <Hero />
    </header>
  );
}

export default Header;
