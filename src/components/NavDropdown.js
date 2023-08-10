import React, { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const NavDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // close the dropdown when user clicks outside the menu
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const MenuItems = [
    { text: "Home", link: "/" },
    { text: "About Us", link: "/" },
    { text: "Pricing", link: "/" },
    { text: "Community", link: "/" },
  ];

  return (
    <div class=" w-full  bg-grayish shadow-[0px_8px_8px_#a4e0a4] flex justify-between items-center font-ave text-white">
      <h1 class="font-bold text-[20px] mx-[10px] md:p-2 md:mx-[30px]">
        FITCLUB
      </h1>
      <div ref={dropdownRef} class="">
        <GiHamburgerMenu
          fontSize="3rem"
          class="p-[10px] cursor-pointer"
          onClick={() => setShowDropdown(!showDropdown)}
        />
        <div
          active={showDropdown}
          class={`${
            showDropdown ? "flex" : "none"
          } absolute flex-col right-0 top-[40px] bg-white rounded-[8px]
                                          z-100 px-[0] py-[4px] overflow-hidden transition duration-[0.3s] ease ${
                                            showDropdown
                                              ? "visible"
                                              : "invisible"
                                          }
                                          ${
                                            showDropdown
                                              ? "opacity-100"
                                              : "opacity-0"
                                          } origin-top ${
            showDropdown ? "scale-y-100" : "scale-y-[0.3]"
          }`}
        >
          {MenuItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              class="w-full flex items-start cursor-pointer transition duration-[.3s] ease py-[12px] px-[16px]
                            hover:shadow-[0_3px_6px_3px_rgba(0,0,0,.3)] color-[#0f1624] text-[18px] text-start text-black"
            >
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavDropdown;
