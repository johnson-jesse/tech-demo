import { twMerge } from "tailwind-merge";

export type MainProps = React.HTMLAttributes<HTMLElement>;

export function Main({ className, ...props }: MainProps) {
  return (
    <main
      className={twMerge(
        "flex flex-col gap-[32px] row-start-2 items-center",
        className
      )}
      {...props}
    />
  );
}
