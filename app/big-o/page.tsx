"use client";

import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";
import { calculateOperations } from "./calculate";
import { algorithms } from "./const";

export default function Page() {
  const [algorithm, setAlgorithm] = useState(0);
  const [n, setN] = useState(25);
  const [html, setHtml] = useState("");

  useEffect(() => {
    async function highlight() {
      const html = await codeToHtml(algorithms[algorithm].code, {
        lang: "ts",
        theme: "github-dark",
      });

      setHtml(html);
    }

    highlight();
  }, [algorithm]);

  return (
    <main className="mx-auto max-w-6xl p-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Big O Visualizer</h1>

        <p className="text-muted-foreground mt-2">
          See how algorithms scale as the input grows.
        </p>
      </div>

      <section className="w-2xl rounded-lg border p-6 space-y-6">
        <div>
          <label className="block font-medium mb-2">Algorithm</label>

          <select
            value={algorithm}
            onChange={(e) => setAlgorithm(parseInt(e.target.value, 10))}
            className="border rounded px-3 py-2"
          >
            {algorithms.map(({ id, complexity }, idx) => (
              <option key={id} value={idx}>
                {complexity}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-medium">Input Size (n): {n}</label>

          <input
            type="range"
            min={1}
            max={500}
            value={n}
            onChange={(e) => setN(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold">Estimated Operations</h2>

          <div className="text-4xl font-bold mt-4">
            {calculateOperations(
              algorithms[algorithm].complexity,
              n,
            ).toLocaleString()}
          </div>
        </div>
        <span className="text-xl font-bold mt-4 mr-2">
          {algorithms[algorithm].title}
        </span>
        -
        <span className="text-lg mt-4 ml-2">
          {algorithms[algorithm].description}
        </span>
      </section>
      <div className="p-2" dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
