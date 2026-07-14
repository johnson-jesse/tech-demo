"use client";

import { Database, SqlEngine } from "@fizzog/sqlx";
import { useRef, useState } from "react";
import { ResultsTable } from "./ResultsTable";

export default function Page() {
  const engine = useRef<SqlEngine | null>(null);
  const [sql, setSql] = useState("");
  const [result, setResult] = useState<unknown>(null);
  const [error, setError] = useState<string | null>(null);

  if (!engine.current) {
    const e = SqlEngine.start(new Database());

    e.consume("CREATE TABLE users (id, name, age);");

    e.consume("INSERT INTO users VALUES (1, 'Alice', 30);");
    e.consume("INSERT INTO users VALUES (2, 'Bob', 24);");
    e.consume("INSERT INTO users VALUES (3, 'Charlie', 18);");
    e.consume("INSERT INTO users VALUES (4, 'Diana', 42);");
    e.consume("INSERT INTO users VALUES (5, 'Ethan', 35);");

    engine.current = e;
  }

  function execute() {
    if (!engine.current) return;
    try {
      const output = engine.current.consume(sql);

      setError(null);
      setResult(output);
    } catch (err) {
      setResult(null);

      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unknown SQL error");
      }
    }
  }

  return (
    <>
      <p className="max-w-2xl">
        @fizzog/sqlx is a lightweight SQL engine written in TypeScript that
        provides a simple, educational implementation of core database concepts.
        The project accepts SQL statements, tokenizes the input using a custom
        lexer, parses the tokens into an abstract syntax tree (AST), and
        executes the resulting statements against an in-memory database engine.
        It supports basic SQL operations including creating tables, inserting
        records, selecting data, updating rows, deleting records, and filtering
        results with conditional expressions. The goal of the project is to
        explore how SQL databases work internally by building the fundamental
        components of a query engine from scratch while providing a simple
        JavaScript/TypeScript API for applications to execute SQL commands.
      </p>
      <p>
        See documentation here:{" "}
        <a
          href="https://www.npmjs.com/package/@fizzog/sqlx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400  hover:text-blue-600 hover:bg-blue-200 px-2 py-1 rounded transition-colors"
        >
          @fizzog/SQLx
        </a>
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          execute();
        }}
        className="flex items-center gap-3"
      >
        <input
          type="text"
          className="w-80 px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={sql}
          onChange={(e) => setSql(e.target.value)}
          placeholder="Enter SQL..."
        />

        <button
          type="submit"
          className="px-4 py-3 rounded-lg bg-blue-600 text-white"
        >
          Run
        </button>
      </form>
      {error ? (
        <div className="mt-6 rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-red-700">
          {error}
        </div>
      ) : (
        <ResultsTable data={result} />
      )}
    </>
  );
}
