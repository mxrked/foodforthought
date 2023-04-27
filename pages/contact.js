// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { PageHead } from "@/assets/components/global/PageHead";

// Style Imports
import "../assets/styles/modules/Contact/Contact.module.css";

export default function Contact() {
  const router = useRouter();

  return (
    <div id="PAGE" className="page contact-page overrides_Contact">
      <PageHead />

      <main id="PAGE_CNT"></main>
    </div>
  );
}
