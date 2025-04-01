import { twMerge } from "tailwind-merge";

export type RootProps = React.HTMLAttributes<HTMLDivElement>;

export function RootDiv({ className, ...props }: RootProps) {
  return (
    <div
      className={twMerge(
        "grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-20 sm:p-0 pb-20 sm:pb-20 gap-16 font-[family-name:var(--font-geist-sans)]",
        className
      )}
      {...props}
    />
  );
}
