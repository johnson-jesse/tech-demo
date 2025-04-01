/// Copyright (c) 2025 Jesse A. Johnson (Fizzog)
/// Attribution required. See LICENSE.

import { twMerge } from "tailwind-merge";

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export function Label({ className = "", ...props }: LabelProps) {
  return (
    <label
      className={twMerge("tracking-wide text-black dark:text-white text-sm", className)}
      {...props}
    />
  );
}
