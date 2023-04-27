// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { PageHead } from "@/assets/components/global/PageHead";

// Style Imports
import "../assets/styles/modules/Cart_Favorites/Cart_Favorites.module.css";

export default function Cart_Favorites() {
  const router = useRouter();

  return (
    <div id="PAGE" className="page cart-favorites-page overrides_CartFavorites">
      <PageHead />

      <main id="PAGE_CNT"></main>
    </div>
  );
}
