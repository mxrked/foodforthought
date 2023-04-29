/**
 *
 *  This is the mobile nav
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { FaSearch } from "react-icons/fa";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FADE_IN } from "@/assets/animations/FADES";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";
import ToggleMobileNavMenu from "@/assets/functions/dom/togglers/ToggleMobileNavMenu";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const MobileNav = () => {
  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <nav id="mobileNav" className={`${styles.mobile_nav} mobile-nav`}>
      <motion.div
        className={`${styles.motion} fm-motion full-second fade-in`}
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_IN}
      >
        <div className={`${styles.mobile_nav_inner}`}>
          <div className={`${styles.mobile_nav_inner_box} container-fluid`}>
            <div className={`${styles.mobile_nav_inner_row} row`}>
              <div
                className={`${styles.mobile_nav_inner_side} ${styles.mobile_nav_L} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
              >
                <div className={`${styles.mobile_nav_inner_side_cnt}`}>
                  <div className={`${styles.logo}`}>
                    <a href="/" className="half-second index-link nav-link">
                      <span>foodforthought</span>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.mobile_nav_inner_side} ${styles.mobile_nav_R} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
              >
                <div className={`${styles.mobile_nav_inner_side_cnt}`}>
                  <ul>
                    {/**
                    <li>
                      <button className="half-second sign-out">
                        <FaSignOutAlt className={`${styles.icon}`} />
                      </button>
                    </li>
                    <li>
                      <a
                        href=""
                        id="loginRegisterProfileLink_M"
                        className={`${styles.login_register_profile} nav-link profile-link half-second`}
                      >
                        <MdAccountCircle className={styles.icon} />
                      </a>
                    </li>
                    */}
                    <li>
                      <button className="half-second search-toggler">
                        <FaSearch className={`${styles.icon}`} />
                      </button>
                    </li>
                    {/**
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
                    */}
                    <li>
                      <button
                        id="mobileNavToggler"
                        className={`${styles.mobile_nav_toggler}`}
                        onClick={() => {
                          ToggleMobileNavMenu();
                        }}
                      >
                        <span className="half-second" />
                        <span className="half-second" />
                        <span className="half-second" />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};
