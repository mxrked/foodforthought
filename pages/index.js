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
import "../assets/styles/modules/Index/Index.module.css";

export default function Home() {
  const router = useRouter();

  // Exit Animations trigger
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  // Disabling Page Link(s)
  useEffect(() => {
    ManipPageLink("disable", "multiple", ".index-link");
  }, []);

  return (
    <div id="PAGE" className="page index-page overrides_Index">
      <PageHead />

      <DesktopNav />
      <MobileNav />
      <MobileNavMenu />

      <main id="PAGE_CNT"></main>
    </div>
  );
}
