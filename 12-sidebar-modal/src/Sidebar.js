import React, { useContext } from 'react'
import logo from './logo.svg'
import { AppContent } from "./context";
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import App from './App';

const Sidebar = () => {
  const data = useContext(AppContent);
  const { isSidebarOpen, closeSidebar } = data;
  return (
    <aside className={`sidebar ${ isSidebarOpen && 'show-sidebar' }`}>
      <div className="sidebar-header">
        <img src={logo} className="logo" alt="coding addict" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          // console.log(link);
          const { id, url, text, icon } = link;
          return <li key={id}>
            <a href={url}>{icon}{text}</a>
          </li>
        })}
      </ul>
      <ul className="social-icons">
        {social.map((iconItem) => {
          // console.log(icon);
          const { id, url, icon } = iconItem;
          return <li key={id}>
            <a href={url}>{icon}</a>
          </li>
        })}
      </ul>
    </aside>
    )
}

export default Sidebar
