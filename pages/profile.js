// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { PageHead } from "@/assets/components/global/PageHead";

// Style Imports
import "../assets/styles/modules/Profile/Profile.module.css";

export default function Profile() {
  const router = useRouter();

  return (
    <div id="PAGE" className="page profile-page overrides_Profile">
      <PageHead />

      <main id="PAGE_CNT"></main>
    </div>
  );
}
