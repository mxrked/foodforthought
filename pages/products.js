// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports
import { TriggerExitAnimations } from "@/assets/functions/dom/triggers/TriggerExitAnimations";
import ManipPageLink from "@/assets/functions/dom/manip/ManipPageLinks";

// Component Imports
import { PageHead } from "@/assets/components/global/PageHead";
import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";
import { MobileNav } from "@/assets/components/global/Nav/Mobile/MobileNav";
import { MobileNavMenu } from "@/assets/components/global/Nav/Mobile/MobileNavMenu";

// Style Imports
import "../assets/styles/modules/Products/Products.module.css";

export default function Products() {
  const router = useRouter();

  // Exit Animations trigger
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  // Disabling Page Link(s)
  useEffect(() => {
    ManipPageLink("disable", "multiple", ".products-link");
  }, []);

  return (
    <div id="PAGE" className="page products-page overrides_Products">
      <PageHead />

      <DesktopNav />
      <MobileNav />
      <MobileNavMenu />

      <main id="PAGE_CNT"></main>
    </div>
  );
}
