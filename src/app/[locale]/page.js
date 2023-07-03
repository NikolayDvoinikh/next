import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("Home");
  return (
    <section>
      <h2>{t("p-title")}</h2>
    </section>
  );
}
