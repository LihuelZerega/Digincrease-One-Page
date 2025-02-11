import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientProvider from "@/components/home/ClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digincrease | Crea. Conecta. Convierte.",
  description: "Agencia de Marketing y Desarrollo Web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KFFXCSPV');`,
        }}
      />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-16628874079"
      ></script>
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-KFFXCSPV"
          height="0" 
          width="0" 
          style={{display: "none", visibility: "hidden"}}
        ></iframe>
      </noscript>
      <body className={inter.className}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
