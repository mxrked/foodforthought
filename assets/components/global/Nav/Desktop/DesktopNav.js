/**
 *
 *  This is the desktop nav
 *
 */

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
                  </ul>
                </div>

                <div className={`${styles.nav_side_links}`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
