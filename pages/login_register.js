// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { PageHead } from "@/assets/components/global/PageHead";

// Style Imports
import "../assets/styles/modules/Login_Register/Login_Register.module.css";

export default function Login_Register() {
  const router = useRouter();

  return (
    <div id="PAGE" className="page login-register-page overrides_LoginRegister">
      <PageHead />

      <main id="PAGE_CNT"></main>
    </div>
  );
}
