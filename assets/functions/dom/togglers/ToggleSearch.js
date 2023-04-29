/**
 *
 *  This is used to toggle the search
 *
 */

import DeclareStorageVariable from "../../data/storage/DeclareStorageVariable";
import CloseMobileNavMenu from "../closers/CloseMobileNavMenu";

function ShowSearch() {
  const SEARCH = document.getElementById("search");
  const INNER = document.getElementById("searchInner");

  DeclareStorageVariable("session", "Search Opened", true);

  document.body.style.pointerEvents = "none";
  document.body.style.overflowY = "hidden";

  SEARCH.style.display = "block";

  setTimeout(() => {
    SEARCH.style.opacity = 1;
    SEARCH.style.visibility = "visible";
  }, 700);

  setTimeout(() => {
    INNER.style.opacity = 1;
    INNER.style.visibility = "visible";
  }, 1000);

  setTimeout(() => {
    SEARCH.style.pointerEvents = "auto";
    SEARCH.style.overflowY = "auto";
  }, 1400);
}

export default function ToggleSearch() {
  // Closing the mobile nav if opened
  if (sessionStorage.getItem("Mobile Device")) {
    if (sessionStorage.getItem("Mobile Nav Opened")) {
      CloseMobileNavMenu();

      setTimeout(() => {
        ShowSearch();
      }, 2500);
    }
  }

  // Open normally and the mobile nav is not opened
  if (!sessionStorage.getItem("Mobile Device")) {
    if (!sessionStorage.getItem("Mobile Nav Opened")) {
      ShowSearch();
    }
  }
}
