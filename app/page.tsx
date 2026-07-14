/// Copyright (c) 2025 Jesse A. Johnson (Fizzog)
/// Attribution required. See LICENSE.

import { SizeWarning } from "@/lib/components/SizeWarning";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-5xl font-extrabold dark:text-white">
        Tech Demo
        <small className="ms-2 text-xl font-semibold text-gray-500 dark:text-gray-400">
          Jesse A Johnson
        </small>
      </h1>
      <small className="-mt-2 text-transparent bg-clip-text bg-linear-to-r from-red-500 to-blue-500 font-extrabold">
        Showcase of custom built code
      </small>
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/greeting"
      >
        Send a greeting / ask a question
      </Link>
      <SizeWarning />
      <Image
        className="rounded-full"
        src="/fizzog_pixel.png"
        alt="fizzog"
        width={180}
        height={240}
        priority
      />
      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <Link
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          href="/follow"
        >
          Vectors | Space Ship Follow
        </Link>
        <Link
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          href="/sql"
        >
          TypeScript SQL Engine
        </Link>
      </div>
      <ul
        style={{
          listStyleType: "disc",
          paddingLeft: "1.5rem",
        }}
      >
        Links:
        <li>
          <a
            href="https://github.com/johnson-jesse"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 hover:bg-blue-200 px-2 py-1 rounded transition-colors"
          >
            GitHub - johnson-jesse
          </a>
        </li>
        <li>
          <a
            href="https://github.com/johnson-jesse/tech-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 hover:bg-blue-200 px-2 py-1 rounded transition-colors"
          >
            Code Backing This Page - Tech Demo
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jesse-alan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 hover:bg-blue-200 px-2 py-1 rounded transition-colors"
          >
            LinkedIn - linkedin.com/in/jesse-alan/
          </a>
        </li>
        <li>
          <a
            href="https://www.npmjs.com/package/@fizzog/sqlx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400  hover:text-blue-600 hover:bg-blue-200 px-2 py-1 rounded transition-colors"
          >
            NPM @fizzog/SQLx - TypeScript SQL Engine
          </a>
        </li>
      </ul>
    </>
  );
}
