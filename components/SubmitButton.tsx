import { twMerge } from "tailwind-merge";

export type SubmitButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "type"
> & {
  activity?: boolean;
};

export function SubmitButton({
  activity,
  className,
  ...props
}: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className={twMerge(
        "flex h-12 w-auto justify-center items-center uppercase tracking-wide border border-black/20 dark:border-white/20 hover:border-blue-400 overflow-hidden px-5 transition-all duration-300 disabled:opacity-25 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20",
        className
      )}
      {...props}
    >
      Submit{" "}
      {activity && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 animate-spin"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      )}
    </button>
  );
}
