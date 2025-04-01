/// Copyright (c) 2025 Jesse A. Johnson (Fizzog)
/// Attribution required. See LICENSE.

import { twMerge } from "tailwind-merge";

export type InputProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ className = "", ...props }: InputProps) {
  return (
    <textarea
      className={twMerge(
        "w-full border border-black/20 dark:border-white/20 hover:border-blue-400 bg-transparent px-4 py-3 text-black/70 dark:text-white/70 outline-none focus:ring-1 focus:ring-blue-400",
        className
      )}
      cols={30}
      rows={6}
      placeholder="Your message"
      {...props}
    />
  );
}
