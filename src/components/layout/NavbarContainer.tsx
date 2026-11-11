import Navbar from "@/components/layout/Navbar";
import { client } from "@/lib/sanity.client";
import { siteSettingsQuery } from "@/lib/sanity.queries";
import type { SiteSettings } from "@/types/siteSettings";

export default async function NavbarContainer() {
  const settings: SiteSettings | null = await client.fetch(siteSettingsQuery, {}, { next: { revalidate: 60 } });

  return <Navbar cvUrl={settings?.cvUrl} />;
}
