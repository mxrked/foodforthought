/**
 *
 *  This is used to toggle the mobile nav menu
 *
 */

import DeclareStorageVariable from "../../data/storage/DeclareStorageVariable";

export default function ToggleMobileNavMenu() {
  const MENU = document.getElementById("mobileNavMenu");
  const DARKEN = document.getElementById("mobileNavMenuDarken");
  const MAIN = document.getElementById("mobileNavMenuMain");
  const CNT = document.getElementById("mobileNavMenuMainCnt");

  DeclareStorageVariable("session", "Mobile Nav Opened", true);

  document.body.style.pointerEvents = "none";
  document.body.style.overflowY = "hidden";

  MENU.style.display = "block";

  setTimeout(() => {
    DARKEN.style.opacity = 1;
    DARKEN.style.visibility = "visible";
  }, 600);

  setTimeout(() => {
    MAIN.style.transform = "translateX(0)";
  }, 1000);

  setTimeout(() => {
    CNT.style.opacity = 1;
    CNT.style.visibility = "visible";
  }, 2000);

  setTimeout(() => {
    MENU.style.overflowY = "auto";
    MENU.style.pointerEvents = "auto";
  }, 2500);
}
