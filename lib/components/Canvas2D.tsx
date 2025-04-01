/// Copyright (c) 2025 Jesse A. Johnson (Fizzog)
/// Attribution required. See LICENSE.

"use client";

import React, { useEffect, useRef, useState } from "react";
import { Layer, MINIMUM_BROWSER_WIDTH } from "../const";

type Props = {
  onContextReady: (context: CanvasRenderingContext2D, valid: boolean) => void;
  onContextValid: (valid: boolean) => void;
};

export default function Canvas2D(props: Props) {
  const { onContextReady, onContextValid } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  useEffect(() => {
    if (canvasRef.current) {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) onContextReady(ctx, window.innerWidth >= MINIMUM_BROWSER_WIDTH);
    }
  }, [onContextReady]);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      onContextValid(window.innerWidth >= MINIMUM_BROWSER_WIDTH);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [onContextValid]);

  return (
    <canvas
      id="surface-main"
      ref={canvasRef}
      tabIndex={1}
      width={width}
      height={height}
      className={`absolute top-0 left-0 outline-none bg-transparent pointer-events-none z-${Layer.surface_main}`}
    ></canvas>
  );
}
