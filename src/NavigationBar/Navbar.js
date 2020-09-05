import React from "react";
import styles from "../NavigationBar/Navbar.module.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className={styles.Navbar}>
        <NavLink exact to="/" className={styles.Title}>
          Pro Organizer
        </NavLink>
        <div className={styles.NavItemContainer}>
          <NavLink exact to="/" activeClassName={styles.Active}>
            <div className={styles.NavItem}>Home</div>
          </NavLink>
          <NavLink to="/createboard" activeClassName={styles.Active}>
            <div className={styles.NavItem}>Create a Board</div>
          </NavLink>

        </div>
      </div>
    </>
  );
}

export default Header;
