import "../globals.css";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header/Header";
import { getTranslator } from "next-intl/server";
import { Providers } from "@/components/Providers";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslator(locale, "Home");
  return {
    title: t("m-title"),
    description: t("m-description"),
  };
}

export default function RootLayout({ children, params }) {
  const locale = useLocale();
  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
