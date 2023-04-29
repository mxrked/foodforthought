/**
 *
 *  This is used to route when the user uses the search
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
} from "../../data/variables/ARRAYS";

import DeclareStorageVariable from "../data/storage/DeclareStorageVariable";
import CloseSearch from "../dom/closers/CloseSearch";
import { TriggerExitAnimations_NON_LINKS } from "../dom/triggers/TriggerExitAnimations";

function RouteBasedOnKWS(e, window, input, kws, linkIndex, type) {
  const SEARCH_LINKS = document.querySelectorAll(".search-link");

  for (let i = 0; i < kws.length; i++) {
    const UPPERCASED_LINK = kws[i].toUpperCase();
    const UPPERCASED_INPUT = input.value.toUpperCase();

    console.log(UPPERCASED_INPUT);

    setTimeout(() => {
      if (UPPERCASED_INPUT.indexOf(UPPERCASED_LINK) > -1) {
        if (SEARCH_LINKS[linkIndex].style.opacity != 0.5) {
          //! These 2 if statements are to prevent some strange cancel rendering route error

          // A basic link (NON HASH)
          if (type == "link") {
            e.preventDefault();

            CloseSearch();
            // This will trigger the exit animations
            setTimeout(() => {
              TriggerExitAnimations_NON_LINKS();
            }, 1500);

            DeclareStorageVariable(
              "session",
              "HREF",
              SEARCH_LINKS[linkIndex].href
            );

            // Route to href value
            setTimeout(() => {
              window.location.href = sessionStorage.getItem("HREF");
            }, 2000);
          }

          // A hash/slug
          if (type == "hash") {
            e.preventDefault();

            CloseSearch();
            // This will trigger the exit animations
            setTimeout(() => {
              TriggerExitAnimations_NON_LINKS();
            }, 1500);

            DeclareStorageVariable(
              "session",
              "HREF",
              SEARCH_LINKS[linkIndex].href
            );

            // Routing after search closes
            setTimeout(() => {
              window.location.href = sessionStorage.getItem("HREF");
            }, 2000);
          }
        } else {
          console.log("You are already on that page..");
        }
      }
    }, 1300);
  }
}

//! MAIN FUNCTION
export default function SearchRouting(e, window) {
  const INPUT = document.getElementById("searchInput");

  RouteBasedOnKWS(e, window, INPUT, INDEX_KWS, 0, "link");
  RouteBasedOnKWS(e, window, INPUT, PRODUCTS_KWS, 1, "link");
  RouteBasedOnKWS(e, window, INPUT, FRUIT_KWS, 2, "hash");
  RouteBasedOnKWS(e, window, INPUT, VEGETABLE_KWS, 3, "hash");
  RouteBasedOnKWS(e, window, INPUT, MEAT_KWS, 4, "hash");
  RouteBasedOnKWS(e, window, INPUT, DESSERT_KWS, 5, "link");
  RouteBasedOnKWS(e, window, INPUT, INFO_KWS, 6, "link");
  RouteBasedOnKWS(e, window, INPUT, CONTACT_KWS, 7, "link");
  RouteBasedOnKWS(e, window, INPUT, CART_FAVORITES_KWS, 8, "link");
}
