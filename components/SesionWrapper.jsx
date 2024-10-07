import React from "react";
import { SessionProvider } from "next-auth/react";

export default function SesionWrapper({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
