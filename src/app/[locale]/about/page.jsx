import AboutUs from "@/components/AboutUs/AboutUs";
import { getTranslator } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslator(locale, "About");
  return {
    title: t("m-title"),
    description: t("m-description"),
  };
}

export default function Home() {
  return (
    <section>
      <AboutUs />
    </section>
  );
}
