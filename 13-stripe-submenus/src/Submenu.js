import React, { useState, useRef, useEffect, useContext } from "react";
import { AppContent } from "./context";

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useContext(AppContent);
  const container = useRef(null);
  const [columns, setColumns] = useState("col-2");
  useEffect(() => {
    setColumns("col-2");
    // console.log(container.current);
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    // console.log(links);
    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [location, links, page]);

  return (
    <aside
      ref={container}
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
    >
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
          {links.map((link, index) => {
            const { url, icon, label } = link;
            return (
              <a key={index} href={url}>
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default Submenu;
