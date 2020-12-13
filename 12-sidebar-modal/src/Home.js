import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContent } from "./context";

const Home = () => {
  const data = useContext(AppContent);
  const { openModal, openSidebar } = data;
  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>show modal</button>
    </main>
  );
};

export default Home;
