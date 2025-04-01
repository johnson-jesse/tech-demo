/// Copyright (c) 2025 Jesse A. Johnson (Fizzog)
/// Attribution required. See LICENSE.

"use client";

import { useEffect, useState } from "react";

export function SizeWarning() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <h2 className="ms-2">For the full experience, desktop is the way</h2> : null
}
