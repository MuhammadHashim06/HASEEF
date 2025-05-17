import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/upload"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        File Upload
      </NavLink>
    </div>
  );
}
