/**
 *
 *  This is used to close the mobile nav menu
 *
 */

import RemoveStorageVariable from "../../data/storage/RemoveStorageVariable";

export default function CloseMobileNavMenu() {
  const MENU = document.getElementById("mobileNavMenu");
  const DARKEN = document.getElementById("mobileNavMenuDarken");
  const MAIN = document.getElementById("mobileNavMenuMain");
  const CNT = document.getElementById("mobileNavMenuMainCnt");

  MENU.style.overflowY = "hidden";
  MENU.style.pointerEvents = "none";

  setTimeout(() => {
    CNT.style.opacity = 0;
    CNT.style.visibility = "hidden";
  }, 600);

  setTimeout(() => {
    MAIN.style.transform = "translateX(-100%)";
  }, 1200);

  setTimeout(() => {
    DARKEN.style.opacity = 0;
    DARKEN.style.visibility = "hidden";
  }, 1400);

  setTimeout(() => {
    RemoveStorageVariable("session", "Mobile Nav Opened");
    document.body.style.overflowY = "auto";
    document.body.style.pointerEvents = "auto";
  }, 2100);
}
