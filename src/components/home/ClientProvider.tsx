"use client";

import { LanguageProvider } from "@/contexts/LanguageContext";

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  return <LanguageProvider>{children}</LanguageProvider>;
};

export default ClientProvider;