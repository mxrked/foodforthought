/**
 *
 *  This is used to close the search
 *
 */

import RemoveStorageVariable from "../../data/storage/RemoveStorageVariable";

export default function CloseSearch() {
  const SEARCH = document.getElementById("search");
  const INNER = document.getElementById("searchInner");

  SEARCH.style.overflowY = "hidden";
  SEARCH.style.pointerEvents = "none";

  INNER.style.opacity = 0;
  INNER.style.visibility = "hidden";

  setTimeout(() => {
    SEARCH.style.opacity = 0;
    SEARCH.style.visibility = "hidden";
  }, 800);

  setTimeout(() => {
    RemoveStorageVariable("session", "Search Opened");
    document.body.style.pointerEvents = "auto";
    document.body.style.overflowY = "auto";
  }, 1500);
}
