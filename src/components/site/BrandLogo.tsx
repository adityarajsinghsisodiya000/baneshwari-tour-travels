import matajiLogo from "@/assets/baneshwari-mataji-logo.png";

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex min-w-0 items-center gap-3">
      <span className={`${compact ? "h-12 w-12" : "h-14 w-14"} logo-frame shrink-0 overflow-hidden rounded-full`}>
        <img src={matajiLogo} alt="Baneshwari Mataji" className="h-full w-full object-cover" />
      </span>
      <span className="min-w-0">
        <span className="block truncate font-display text-base font-bold text-navy sm:text-lg">Baneshwari</span>
        <span className="block text-[10px] font-semibold uppercase text-primary">Tour &amp; Travels</span>
      </span>
    </span>
  );
}