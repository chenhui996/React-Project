import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { AppContent } from "./context";

const Sidebar = () => {
  const data = useContext(AppContent);
  // console.log(data);
  const { isSiderbarOpen, closeSidebar } = data;
  return (
    <aside
      className={`${
        isSiderbarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item, index) => {
            // console.log(item);
            const {links, page} = item;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link, index) => {
                    // console.log(link);
                    const { url, icon, label } = link;
                    return (
                      <a key={index} href={url}>
                        {icon}
                        {label}
                      </a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
