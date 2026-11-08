'use client';

import type { SiteConfig } from '@/types/config';

interface FooterProps {
  config?: SiteConfig;
}

export function Footer(_props: FooterProps) {
  return (
    <footer className="w-full flex items-center justify-center py-4 px-4 mt-4 text-sm text-foreground-500 relative z-50">
      <span className="text-base">Uptime NxGate</span>
    </footer>
  );
}
