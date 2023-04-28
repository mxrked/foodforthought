// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { PageHead } from "@/assets/components/global/PageHead";
import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";
import { MobileNav } from "@/assets/components/global/Nav/Mobile/MobileNav";
import { MobileNavMenu } from "@/assets/components/global/Nav/Mobile/MobileNavMenu";

// Style Imports
import "../assets/styles/modules/Contact/Contact.module.css";

export default function Contact() {
  const router = useRouter();

  return (
    <div id="PAGE" className="page contact-page overrides_Contact">
      <PageHead />

      <DesktopNav />
      <MobileNav />
      <MobileNavMenu />

      <main id="PAGE_CNT"></main>
    </div>
  );
}
