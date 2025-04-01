/// Copyright (c) 2025 Jesse A. Johnson (Fizzog)
/// Attribution required. See LICENSE.

import Image from "next/image";
import Link from "next/link";
import { SizeWarning } from "@/lib/components/SizeWarning";
import { MouseFollower } from "@/lib/components/MouseFollower";
import { Footer } from "@/lib/components/Footer";
import { RootDiv } from "@/lib/components/ux/RootDiv";
import { Main } from "@/lib/components/ux/Main";

export default function Home() {
  return (
    <RootDiv id="home-container">
      <MouseFollower />
      <Main>
        <h1 className="text-5xl font-extrabold dark:text-white">
          Tech Demo
          <small className="ms-2 font-semibold text-gray-500 dark:text-gray-400">
            Jesse A Johnson
          </small>
        </h1>
        <SizeWarning />

        <Image
          className="rounded-full"
          src="/fizzog.png"
          alt="fizzog"
          width={180}
          height={240}
          priority
        />
        <ul className="list-inside list-disc text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Showcase of custom built code
          </li>
          <li className="tracking-[-.01em]">
            ReactJS | NextJS | Tailwind CSS | Game Theory
          </li>
        </ul>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://github.com/johnson-jesse/tech-demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/github-mark-white.png"
              alt="Github logo"
              width={20}
              height={20}
            />
            See the code
          </a>
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/greeting"
          >
            Send a greeting / ask a question
          </Link>
        </div>
      </Main>
      <Footer />
    </RootDiv>
  );
}
