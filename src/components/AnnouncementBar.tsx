import { siteSettings } from "@/content/site-settings";

export function AnnouncementBar() {
  return (
    <div className="bg-forest text-center text-[0.72rem] font-medium uppercase tracking-[0.12em] text-paper/90">
      <p className="px-4 py-2.5">{siteSettings.announcement}</p>
    </div>
  );
}
