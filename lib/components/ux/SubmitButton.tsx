import { twMerge } from "tailwind-merge";

export type SubmitButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "type"
>;

export function SubmitButton({ className, ...props }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className={twMerge(
        "flex h-12 w-auto justify-center items-center uppercase tracking-wide border border-black/20 dark:border-white/20 hover:border-blue-400 overflow-hidden px-5 transition-all duration-300 disabled:opacity-25",
        className
      )}
      {...props}
    >
      Submit
    </button>
  );
}
