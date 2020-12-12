import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const ulLinksRef = useRef(null);
  const boxLinksRef = useRef(null);
  const toggleShow = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const ulLinksHeight = ulLinksRef.current.getBoundingClientRect().height;
    // console.log(ulLinksHeight);
    if(showLinks){
      // console.log(boxLinksRef.current);
      boxLinksRef.current.style.height = `${ulLinksHeight}px`;
    }
    else{
      boxLinksRef.current.style.height = `0px`;
    }
  },[showLinks,ulLinksRef]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button className="nav-toggle" onClick={toggleShow}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={boxLinksRef}>
          <ul className="links" ref={ulLinksRef}>
            {links.map((link) => {
              // console.log(link);
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((socialIcon) => {
            // console.log(socialIcon);
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
