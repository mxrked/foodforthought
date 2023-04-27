/**
 *
 *  This is the page's meta data and tab settings
 *
 */

import { useRouter } from "next/router";

import Head from "next/head";

import {
  INDEX_KWS,
  INFO_KWS,
  CONTACT_KWS,
  PRODUCTS_KWS,
} from "@/assets/data/variables/ARRAYS";

export const PageHead = () => {
  const router = useRouter();

  //! Descriptions
  const INDEX_DESC =
    "Foodforthought is your one stop shop for all things food and produce. We supply many different edible products such as fruits, vegetables, meats and desserts.";
  const INFO_DESC =
    "Learn our background and history of how we became the company we are today. Also learn our current team and what their roles are.";
  const PRODUCTS_DESC =
    "We supply all different types of produce that will grant pleasure to your taste buds. The categories we hold are fruits, vegetables, meats and desserts.";
  const CONTACT_DESC =
    "Our 24/7 support team is always here to help you with any issue or problem that you face. Filling out the contact form is the fastest way to get in touch.";

  const DESCS = [INDEX_DESC, INFO_DESC, PRODUCTS_DESC, CONTACT_DESC];

  let desc;
  let kws;
  let title;
  let robots;
  let url;

  // Index Page
  if (router.pathname == "/") {
    title = "foodforthought - Home";
    robots = "index, follow";
    url = router.pathname;

    if (INDEX_DESC.length > 0) {
      desc = DESCS[0];
    } else {
      desc = DESCS[0];
    }

    kws = INDEX_KWS;
  }
  // Products Page
  if (router.pathname == "/products") {
    title = "foodforthoughts - Products";
    robots = "index, follow";
    url = router.pathname;

    if (PRODUCTS_DESC.length > 0) {
      desc = DESCS[2];
    } else {
      desc = DESCS[2];
    }

    if (PRODUCTS_KWS.length > 0) {
      kws = PRODUCTS_KWS;
    } else {
      kws = "No keywords";
    }
  }
  // Info Page
  if (router.pathname == "/info") {
    title = "foodforthought - Info";
    robots = "index, follow";
    url = router.pathname;

    if (INFO_DESC.length > 0) {
      desc = DESCS[1];
    } else {
      desc = DESCS[1];
    }

    if (INFO_KWS.length > 0) {
      kws = INFO_KWS;
    } else {
      kws = "No keywords";
    }
  }
  // Contact Page
  if (router.pathname == "/contact") {
    title = "foodforthought - Contact";
    robots = "index, follow";
    url = router.pathname;

    if (CONTACT_DESC.length > 0) {
      desc = DESCS[3];
    } else {
      desc = DESCS[3];
    }

    if (CONTACT_DESC.length > 0) {
      kws = CONTACT_KWS;
    } else {
      kws = "No keywords";
    }
  }
  // Cart and Favorites Page
  if (router.pathname == "/cart_favorites") {
    title = "foodforthought - Cart/Favorites";
    robots = "no index, no follow";
    desc = "No description";
    kws = "No keywords";
    url = router.pathname;
  }
  // Login/Register Page
  if (router.pathname == "/login_register") {
    title = "foodforthought - Login/Register";
    robots = "no index, no follow";
    desc = "No description";
    kws = "No keywords";
    url = router.pathname;
  }
  // Profile Page
  if (router.pathname == "/profile") {
    title = "foodforthought - My Profile";
    robots = "no index, no follow";
    desc = "No description";
    kws = "No keywords";
    url = router.pathname;
  }

  return (
    <Head id="pageHead">
      <title>{title}</title>

      <meta name="keywords" content={kws} />
      <meta name="description" content={desc} />
      <meta name="robots" content={robots} />

      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:url" content={url} />

      <link rel="canonical" href={url} />

      <link
        rel="shortcut icon"
        href="https://raw.githubusercontent.com/mxrked/foodforthought_CDN/master/icons/tab-icons/favicon.ico"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://raw.githubusercontent.com/mxrked/foodforthought_CDN/master/icons/tab-icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://raw.githubusercontent.com/mxrked/foodforthought_CDN/master/icons/tab-icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://raw.githubusercontent.com/mxrked/foodforthought_CDN/master/icons/tab-icons/favicon-16x16.png"
      />
    </Head>
  );
};
