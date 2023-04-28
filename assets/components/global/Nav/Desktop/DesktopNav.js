/**
 *
 *  This is the desktop nav
 *
 */

import { MdAccountCircle } from "react-icons/md";
import { FaHeart, FaSearch, FaShoppingCart } from "react-icons/fa";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const DesktopNav = () => {
  return (
    <nav
      id="desktopNav"
      className={`${styles.desktop_nav} full-second fade-in`}
    >
      <div className={`${styles.desktop_nav_inner}`}>
        <div className={`${styles.desktop_nav_inner_box} container-fluid`}>
          <div className={`${styles.desktop_nav_inner_row} row`}>
            <div
              className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_L} col-lg-4 col-md-4 col-sm-6 col-xs-6`}
            >
              <div className={`${styles.desktop_nav_inner_side_cnt}`}>
                <div className={`${styles.logo}`}>
                  <a href="/" className="half-second index-link">
                    <span>foodforthought</span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_R} col-lg-8 col-md-8 col-sm-6 col-xs-6`}
            >
              <div className={`${styles.desktop_nav_inner_side_cnt}`}>
                <div className={`${styles.nav_main_links}`}>
                  <ul>
                    <li>
                      <a href="/" className="half-second index-link">
                        <span>home</span>
                      </a>
                    </li>
                    <li>
                      <a href="/products" className="half-second products-link">
                        <span>products</span>
                      </a>
                    </li>
                    <li>
                      <a href="/info" className="half-second info-link">
                        <span>info</span>
                      </a>
                    </li>
                    <li>
                      <a href="/contact" className="half-second contact-link">
                        <span>contact</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className={`${styles.nav_side_links}`}>
                  <ul>
                    <li>
                      <a
                        className="half-second"
                        onClick={(e) => {
                          if (sessionStorage.getItem("Logged In User")) {
                            e.currentTarget.href = "/profile";
                          }

                          if (!sessionStorage.getItem("Logged In User")) {
                            e.currentTarget.href = "/login_register";
                          }
                        }}
                      >
                        <MdAccountCircle className={styles.icon} />
                      </a>
                    </li>
                    <li>
                      <button className="half-second search-toggler">
                        <FaSearch className={`${styles.icon}`} />
                      </button>
                    </li>
                    <li>
                      <a
                        href="/cart_favorites#favorites"
                        className="cart-favorites-link half-second"
                      >
                        <FaHeart className={`${styles.icon}`} />

                        <div className="half-second">
                          <span className="half-second favorites-counter">
                            0
                          </span>
                        </div>
                      </a>
                    </li>{" "}
                    <li>
                      <a
                        href="/cart_favorites#cart"
                        className="cart-favorites-link half-second"
                      >
                        <FaShoppingCart className={`${styles.icon}`} />

                        <div className="half-second">
                          <span className="half-second cart-counter">0</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
