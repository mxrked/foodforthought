/**
 *
 *  This is the mobile nav menu
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { MdAccountCircle } from "react-icons/md";
import {
  FaHeart,
  FaSearch,
  FaShoppingCart,
  FaTimes,
  FaSignOutAlt,
} from "react-icons/fa";

import CloseMobileNavMenu from "@/assets/functions/dom/closers/CloseMobileNavMenu";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const MobileNavMenu = () => {
  const router = useRouter();

  // Changing LoginRegisterProfile link based on if the user is logged in or not
  useEffect(() => {
    if (sessionStorage.getItem("Logged In User")) {
      document.getElementById("loginRegisterProfileLink_M").href = "/profile";
    }

    if (!sessionStorage.getItem("Logged In User")) {
      document.getElementById("loginRegisterProfileLink_M").href =
        "/login_register";
    }
  }, []);

  return (
    <div id="mobileNavMenu" className={`${styles.mobile_nav_menu}`}>
      <div
        className={`${styles.darken} full-second`}
        id="mobileNavMenuDarken"
        onClick={() => {
          CloseMobileNavMenu();
        }}
      />

      <div
        className={`${styles.mobile_nav_menu_main} full-second`}
        id="mobileNavMenuMain"
      >
        <div
          className={`${styles.mobile_nav_menu_main_cnt} half-second`}
          id="mobileNavMenuMainCnt"
        >
          <div className={`${styles.mobile_nav_menu_main_cnt_top}`}>
            <h1>foodforthought</h1>

            <div className={`${styles.mobile_nav_menu_main_cnt_top_inner}`}>
              <div className={`${styles.side_cnt}`}>
                <button className="half-second sign-out">
                  <FaSignOutAlt className={`${styles.icon}`} />
                </button>
                <a
                  href=""
                  id="loginRegisterProfileLink_M"
                  className={`${styles.login_register_profile} nav-link profile-link half-second`}
                >
                  <MdAccountCircle className={styles.icon} />
                </a>

                <button
                  className={`${styles.search_toggler} half-second search-toggler`}
                >
                  <FaSearch className={`${styles.icon}`} />
                </button>
              </div>

              <button
                id="mobileNavCloser"
                className={`${styles.closer} half-second`}
                onClick={() => {
                  CloseMobileNavMenu();
                }}
              >
                <FaTimes className={`${styles.icon}`} />
              </button>
            </div>
          </div>

          <ul className={`${styles.mobile_nav_menu_main_cnt_links}`}>
            <li>
              <a href="/" className="half-second nav-link index-link">
                <span>home</span>
              </a>
            </li>
            <li>
              <a
                href="/products"
                className="half-second nav-link products-link"
              >
                <span>products</span>
              </a>
            </li>
            <li>
              <a href="/info" className="half-second nav-link info-link">
                <span>info</span>
              </a>
            </li>
            <li>
              <a href="/contact" className="half-second nav-link contact-link">
                <span>contact</span>
              </a>
            </li>
            <li>
              <a
                href="/cart_favorites#favorites"
                className="cart-favorites-link nav-link half-second"
              >
                <span className={`${styles.link_name}`}>favorites</span>
                <div className="half-second">
                  <span className="favorites-counter">0</span>
                </div>
              </a>
            </li>
            <li>
              <a
                href="/cart_favorites#cart"
                className="cart-favorites-link nav-link half-second"
              >
                <span className={`${styles.link_name}`}>cart</span>
                <div className="half-second">
                  <span className="cart-counter">0</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
