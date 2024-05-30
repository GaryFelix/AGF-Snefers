import { hamburger } from "../assets/icons";
import { navLinks } from "../constants/index";
import appLogoMain from "../assets/images/appLogoMain.png";
import { useState } from "react";

const Nav = () => {
  const [show, setShow] = useState(false);

  const toggleVisibility = () => {
    setShow(!show);
  }
  
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={appLogoMain}
            alt="Logo"
            width={250}
            height={90}
            draggable={false}
          />
        </a>
        <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label} className="cursor-pointer">
              <a
                href={item.id}
                className="font-montserrat leading-normal text-lg text-slate-grey font-bold"
                onClick={()=>{document.getElementById(item.goto).scrollIntoView()}}
              >
                {item.label}
              </a>
            </li>
          ))}
          {/* <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
            <a href="/">Sign in</a>
            <span>/</span>
            <a href="/">Explore now</a>
          </div> */}
        </ul>
        {/* upto large, the hamburger icon is displayed, after large, the icon is hidden */}
        <div className="hidden max-lg:block" onClick={toggleVisibility}>
          <img src={hamburger} alt="Hamburger Icon" width={25} height={25} />
        </div>
        {show && 
        (<div className={`border-4 border-black absolute top-[100px] flex max-sm:w-[90%] max-sm:h-[100vh] max-sm:bg-[#0197b2] text-white justify-end cursor-pointer max-md:bg-[#0197b2f7] max-md:w-[80%] max-md:h-[40vh] max-lg:bg-[#0197b2f7] max-lg:w-[90%] max-lg:h-[30vh] max-xl:bg-[red] lg:hidden rounded-[20px] pr-4 transition-all-[ease] scroll-smooth`}>
          <nav>
            {navLinks.map((item) => (
              <li key={item.label} className="cursor-pointer list-none flex justify-end">
                <a
                  href={item.id}
                  className="font-palanqiun leading-normal text-[50px] max-sm:text-[70px] text-slate-grey font-bold mb-4 max-md:text-[70px]"
                  onClick={()=>{document.getElementById(item.goto).scrollIntoView()}}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </nav>
        </div>)}
      </nav>
    </header>
  );
};

export default Nav;
