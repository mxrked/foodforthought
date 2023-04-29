/**
 *
 *  This is the desktop nav
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { MdAccountCircle } from "react-icons/md";
import {
  FaHeart,
  FaSearch,
  FaShoppingCart,
  FaSignOutAlt,
} from "react-icons/fa";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FADE_IN } from "@/assets/animations/FADES";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";
import ToggleSearch from "@/assets/functions/dom/togglers/ToggleSearch";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const DesktopNav = () => {
  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  // Changing LoginRegisterProfile link based on if the user is logged in or not
  useEffect(() => {
    if (sessionStorage.getItem("Logged In User")) {
      document.getElementById("loginRegisterProfileLink_D").href = "/profile";
    }

    if (!sessionStorage.getItem("Logged In User")) {
      document.getElementById("loginRegisterProfileLink_D").href =
        "/login_register";
    }
  }, []);

  // Changing color of disabled nav link
  useEffect(() => {
    const INDEX_NAV_LINK = document.querySelector(".index-nav-link-D");
    const PRODUCTS_NAV_LINK = document.querySelector(".products-nav-link-D");
    const INFO_NAV_LINK = document.querySelector(".info-nav-link-D");
    const CONTACT_NAV_LINK = document.querySelector(".contact-nav-link-D");

    if (router.pathname == "/") {
      INDEX_NAV_LINK.style.color = "#ff9a00";
    }

    if (router.pathname == "/products") {
      PRODUCTS_NAV_LINK.style.color = "#ff9a00";
    }

    if (router.pathname == "/info") {
      INFO_NAV_LINK.style.color = "#ff9a00";
    }

    if (router.pathname == "/contact") {
      CONTACT_NAV_LINK.style.color = "#ff9a00";
    }
  }, []);

  return (
    <nav id="desktopNav" className={`${styles.desktop_nav} desktop-nav`}>
      <motion.div
        className={`${styles.motion} fm-motion full-second fade-in`}
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_IN}
      >
        <div className={`${styles.desktop_nav_inner}`}>
          <div className={`${styles.desktop_nav_inner_box} container-fluid`}>
            <div className={`${styles.desktop_nav_inner_row} row`}>
              <div
                className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_L} col-lg-4 col-md-4 col-sm-6 col-xs-6`}
              >
                <div className={`${styles.desktop_nav_inner_side_cnt}`}>
                  <div className={`${styles.logo}`}>
                    <a href="/" className="half-second index-link nav-link">
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
                        <a
                          href="/"
                          className="half-second index-link nav-link index-nav-link-D"
                        >
                          <span>home</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/products"
                          className="half-second nav-link products-link products-nav-link-D"
                        >
                          <span>products</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/info"
                          className="half-second nav-link info-link info-nav-link-D"
                        >
                          <span>info</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/contact"
                          className="half-second nav-link contact-link contact-nav-link-D"
                        >
                          <span>contact</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className={`${styles.nav_side_links}`}>
                    <ul>
                      <li className={`${styles.sign_out}`}>
                        <button className="half-second sign-out">
                          <FaSignOutAlt className={`${styles.icon}`} />
                        </button>
                      </li>
                      <li>
                        <a
                          href=""
                          id="loginRegisterProfileLink_D"
                          className={`${styles.login_register_profile} nav-link profile-link half-second`}
                        >
                          <MdAccountCircle className={styles.icon} />
                        </a>
                      </li>
                      <li>
                        <button
                          className="half-second search-toggler"
                          onClick={() => {
                            ToggleSearch();
                          }}
                        >
                          <FaSearch className={`${styles.icon}`} />
                        </button>
                      </li>
                      <li className={`${styles.favorites}`}>
                        <a
                          href="/cart_favorites#favorites"
                          className="nav-link cart-favorites-link half-second"
                        >
                          <FaHeart className={`${styles.icon}`} />

                          <div className="half-second">
                            <span className="favorites-counter">0</span>
                          </div>
                        </a>
                      </li>
                      <li className={`${styles.cart}`}>
                        <a
                          href="/cart_favorites#cart"
                          className="nav-link cart-favorites-link half-second"
                        >
                          <FaShoppingCart className={`${styles.icon}`} />

                          <div className="half-second">
                            <span className="cart-counter">0</span>
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
      </motion.div>
    </nav>
  );
};
