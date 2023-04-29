/**
 *
 *  This is used to filter the search links
 *
 */

import {
  INDEX_KWS,
  CART_FAVORITES_KWS,
  PRODUCTS_KWS,
  FRUIT_KWS,
  VEGETABLE_KWS,
  MEAT_KWS,
  DESSERT_KWS,
  INFO_KWS,
  CONTACT_KWS,
} from "../../../data/variables/ARRAYS";

// This is used to display a certain link if the input value matches a related keyword
function DisplaySearchLinkBasedOnKWS(kws, link) {
  for (let i = 0; i < kws.length; i++) {
    if (
      document
        .getElementById("searchInput")
        .value.toLowerCase()
        .indexOf(kws[i]) > -1
    ) {
      link.style.display = "flex";
    }
  }
}

//! MAIN FUNCTION
export default function FilterSearchLinks() {
  const LINKS = document.getElementById("searchLinks");
  const SEARCH_LINK = LINKS.getElementsByTagName("li");
  const FILTER = document.getElementById("searchInput").value.toUpperCase();

  for (let i = 0; i < SEARCH_LINK.length; i++) {
    const SPAN = SEARCH_LINK[i].getElementsByTagName("span")[0];
    const TXT_VAL = SPAN.textContent || SPAN.innerText;

    if (TXT_VAL.toUpperCase().indexOf(FILTER) > -1) {
      SEARCH_LINK[i].style.display = "";
    } else {
      SEARCH_LINK[i].style.display = "none";
    }
  }

  // Displays the different links if user inputs a certain word or pairing
  DisplaySearchLinkBasedOnKWS(INDEX_KWS, SEARCH_LINK[0]);
  DisplaySearchLinkBasedOnKWS(PRODUCTS_KWS, SEARCH_LINK[1]);
  DisplaySearchLinkBasedOnKWS(FRUIT_KWS, SEARCH_LINK[2]);
  DisplaySearchLinkBasedOnKWS(VEGETABLE_KWS, SEARCH_LINK[3]);
  DisplaySearchLinkBasedOnKWS(MEAT_KWS, SEARCH_LINK[4]);
  DisplaySearchLinkBasedOnKWS(DESSERT_KWS, SEARCH_LINK[5]);
  DisplaySearchLinkBasedOnKWS(INFO_KWS, SEARCH_LINK[6]);
  DisplaySearchLinkBasedOnKWS(CONTACT_KWS, SEARCH_LINK[7]);
  DisplaySearchLinkBasedOnKWS(CART_FAVORITES_KWS, SEARCH_LINK[8]);
}
