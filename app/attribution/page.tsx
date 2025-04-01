"use client";

import { Footer } from "@/lib/components/Footer";
import { Main } from "@/lib/components/ux/Main";
import { RootDiv } from "@/lib/components/ux/RootDiv";

export default function Attribution() {
  return (
    <RootDiv>
      <Main className="md:w-[65%] m-auto items-center">
      <h1 className="text-3xl font-bold mb-4">Attribution</h1>
        <p className="tracking-widest">
          Every line of code was handcrafted by me, though I gratefully
          acknowledge the insights and help from various sources.
        </p>
        <a
          href="https://www.researchgate.net/publication/2495826_Steering_Behaviors_For_Autonomous_Characters"
          target="_blank"
          className="block max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Game Theory - Steering Behaviors
          </h5>
          Author: <strong>Craig Reynolds</strong>
          <p className="mt-2 font-normal text-gray-700 dark:text-gray-400">
            This paper presents solutions for one requirement of autonomous
            characters in animation and games: the ability to navigate around
            their world in a life-like and improvisational manner.
          </p>
        </a>

        <a
          href="http://www.kenney.nl"
          target="_blank"
          className="block max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Art Pack - Space Shooter Redux
          </h5>
          Author: <strong>Kenney.nl</strong>
          <p className="mt-2 font-normal text-gray-700 dark:text-gray-400">
            A recreation of the original Space Shooter art pack, including its
            expansions. Over 295 sprites to create a complete space related
            game, including ships, enemies, power-ups, UI elements, numbers and
            elements to create your own enemies!
          </p>
        </a>
      </Main>
      <Footer />
    </RootDiv>
  );
}
