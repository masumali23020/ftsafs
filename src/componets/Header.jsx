import React, { useContext, useState } from "react";
import moon from "../assets/icons/moon.svg";
import sun from "../assets/icons/sun.svg";
import logo from "../assets/logo.svg";
import ring from "../assets/ring.svg";
import cart from "../assets/shopping-cart.svg";
import { MovieContext, ThemeContext } from "../context";
import CardDatiles from "./CardDatiles";

const Header = () => {
    const [showCard, setShowCard] = useState(false)
    const {state} = useContext(MovieContext)
    const {cartData} = state 
    const {them, setThem } = useContext(ThemeContext)
  

    const handelCardShow = () => {
        setShowCard(true)
    }
    const handelCardClose = () => {
        setShowCard(false)
    }
  return (
    <header>
        {showCard && <CardDatiles onClose={handelCardClose} cardData={cartData} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={()=> setThem(!them)}
            >
              <img src={them ? sun : moon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={handelCardShow}
            >
              <img src={cart} width="24" height="24" alt="" />
              {cartData.length > 0 && (
                <span> {cartData.length} </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
