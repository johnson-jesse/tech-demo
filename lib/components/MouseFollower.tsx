/// Copyright (c) 2025 Jesse A. Johnson (Fizzog)
/// Attribution required. See LICENSE.

"use client";

import { Director } from "@/lib/Director";
import { useCallback, useEffect, useState } from "react";
import Canvas2D from "./Canvas2D";

export function MouseFollower() {
  const [director, setDirector] = useState<Director>();
  const [paused, setPaused] = useState(false);

  const handleContextReady = useCallback(
    (ctx: CanvasRenderingContext2D, valid: boolean) =>
      setDirector(Director.instanceOf(ctx, valid)),
    []
  );

  const handleContextValid = useCallback(
    (valid: boolean) => {
      if (valid) director?.restart();
      else director?.halt();
      setPaused(!valid);
    },
    [director]
  );

  useEffect(() => {
    return () => director?.halt();
  }, [director]);

  return (
    <>
      <Canvas2D
        onContextReady={handleContextReady}
        onContextValid={handleContextValid}
      />
      {!paused && (
        <>
          <div className="absolute top-[150px] left-5 text-xs text-gray-600">
            [ g ]: show guide
          </div>
          <div className="absolute top-[175px] left-5 text-xs text-gray-600">
            [ p ]: pause
          </div>
        </>
      )}
    </>
  );
}
