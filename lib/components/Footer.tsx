"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  return (
    <footer className="mt-auto flex gap-6 flex-wrap items-center justify-center py-6">
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/"
      >
        {pathname === "/" ? "[ Home ]" : "Home"}
      </Link>
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/follow"
      >
        {pathname === "/follow" ? "[ Follow ]" : "Follow"}
      </Link>
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/sql"
      >
        {pathname === "/sql" ? "[ SQL ]" : "SQL"}
      </Link>
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/big-o"
      >
        {pathname === "/big-o" ? "[ Big O ]" : "Big O"}
      </Link>
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/license"
      >
        {pathname === "/license" ? "[ License ]" : "License"}
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
