// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { FaBars } from "react-icons/fa"; // Hamburger icon
// import styles from "./Sidebar.module.css";

// export default function Sidebar() {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <>
//       <div className={styles.hamburger}>
//         <FaBars onClick={() => setIsOpen(!isOpen)} />
//       </div>

//       <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
//         <div className={styles.logo}>Hassef</div>

//         <NavLink
//           to="/"
//           className={({ isActive }) =>
//             isActive ? styles.activeLink : styles.link
//           }
//         >
//           Dashboard
//         </NavLink>

//         <NavLink
//           to="/upload"
//           className={({ isActive }) =>
//             isActive ? styles.activeLink : styles.link
//           }
//         >
//           File Upload
//         </NavLink>
//       </div>
//     </>
//   );
// }


import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768);

  // Resize listener to switch between mobile and desktop
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setIsOpen(!mobile); // Open by default on desktop, closed on mobile
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile && (
        <div className={styles.hamburger}>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </div>
      )}

      <div
        className={`${styles.sidebar} ${
          isMobile ? (isOpen ? styles.open : styles.closed) : styles.desktop
        }`}
      >
        <div className={styles.logo}>Hassef</div>

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
    </>
  );
}
