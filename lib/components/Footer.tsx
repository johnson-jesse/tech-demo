"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/"
      >
        {pathname === "/" ? "[ Home ]" : "Home"}
      </Link>
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/license"
      >
        {pathname === "/license" ? "[ License ]" : "license"}
      </Link>
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/attribution"
      >
        {pathname === "/attribution" ? "[ Attribution ]" : "Attribution"}
      </Link>
    </footer>
  );
}
