/**
 *
 *  This is the search
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { FaTimes, FaSearch } from "react-icons/fa";

import CloseSearch from "@/assets/functions/dom/closers/CloseSearch";
import SearchRouting from "@/assets/functions/routing/SearchRouting";

import styles from "../../../styles/modules/Nav/Nav.module.css";
import FilterSearchLinks from "@/assets/functions/dom/filters/FilterSearchLinks";

export const Search = () => {
  const router = useRouter();

  return (
    <div id="search" className={`${styles.search} full-second`}>
      <div className={`${styles.search_inner} half-second`} id="searchInner">
        <div className={`${styles.search_inner_top}`}>
          <h1 className="half-second">search</h1>

          <button
            className={`${styles.closer} half-second`}
            onClick={() => {
              CloseSearch();
            }}
          >
            <FaTimes className={`${styles.icon}`} />
          </button>
        </div>

        <div className={`${styles.search_inner_input_holder}`}>
          <input
            type="text"
            id="searchInput"
            className="search-input"
            placeholder="type something to search.."
            onKeyPress={(e) => {
              if (e.key == "Enter") {
                SearchRouting(e, window);
              }
            }}
            onKeyUp={(e) => {
              FilterSearchLinks();
            }}
          />

          <button
            id="searchGo"
            className="half-second"
            onClick={(e) => {
              SearchRouting(e, window);
            }}
          >
            <FaSearch className={`${styles.icon}`} />
          </button>
        </div>

        <ul id="searchLinks">
          <li>
            <a href="/" className="index-link search-link half-second">
              <span>home</span>
            </a>
          </li>
          <li>
            <a
              href="/products"
              className="products-link search-link half-second"
            >
              <span>products</span>
            </a>
          </li>
          <li>
            <a
              href="/products#fruits"
              className="products-link search-link half-second"
            >
              <span>fruits</span>
            </a>
          </li>
          <li>
            <a
              href="/products#vegetables"
              className="products-link search-link half-second"
            >
              <span>vegetables</span>
            </a>
          </li>
          <li>
            <a
              href="/products#meats"
              className="products-link search-link half-second"
            >
              <span>meats</span>
            </a>
          </li>
          <li>
            <a
              href="/products#desserts"
              className="products-link search-link half-second"
            >
              <span>desserts</span>
            </a>
          </li>
          <li>
            <a href="/info" className="info-link search-link half-second">
              <span>info</span>
            </a>
          </li>
          <li>
            <a href="/contact" className="contact-link search-link half-second">
              <span>contact</span>
            </a>
          </li>
          <li>
            <a
              href="/cart_favorites"
              className="cart-favorites-link search-link half-second"
            >
              <span>favorites/cart</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
