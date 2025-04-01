/// Copyright (c) 2025 Jesse A. Johnson (Fizzog)
/// Attribution required. See LICENSE.

import { twMerge } from "tailwind-merge";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      type="text"
      className={twMerge(
        "w-full border border-black/20 dark:border-white/20 hover:border-blue-400 bg-transparent px-4 py-3 text-black/70 dark:text-white/70 outline-none focus:ring-1 focus:focus:ring-blue-400",
        className
      )}
      {...props}
    />
  );
}
