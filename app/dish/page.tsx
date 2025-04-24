import Link from "next/link";
import styles from "./page.module.css";

export default function Dish() {
  return (
    <div className={styles.container}>
      <h1>
        <Link href="https://www.npmjs.com/package/@fizzog/dish">
          D.I.S.H. - Dynamic Internationalization Scanner and Harvester
        </Link>
      </h1>
      <p>
        A developer tool for managing localization files. Includes support for
        scanning and analyzing project usage, detecting orphaned keys, and
        providing a streamlined process for handling localization files in your
        project.
      </p>
      <p>
        Specifically, this project is designed to work with <code>i18next</code>{" "}
        and <code>react-i18next</code> by tracking usage of{" "}
        <code>useTranslation</code> and <code>t('namespace:key')</code>.
      </p>

      <h2>Features</h2>
      <ul>
        <li>
          <strong>Localization File Management:</strong> Easily manage and
          maintain your localization JSON files.
        </li>
        <li>
          <strong>Scanning:</strong> Automatically scan your project for
          localization key usage.
        </li>
        <li>
          <strong>Orphan Detection:</strong> Identify orphaned or unused
          localization keys.
        </li>
        <li>
          <strong>Usage Analysis:</strong> Detect missing or unreferenced keys
          and streamline the translation process.
        </li>
      </ul>

      <h2>Installation</h2>
      <p>
        To get started with <code>@fizzog/dish</code>, we recommend using{" "}
        <code>@fizzog/create-dish</code>, a tool that sets up everything for you
        with minimal configuration. Follow the steps below.
      </p>

      <h3>Step 1: Install</h3>
      <pre>
        <code>npm init @fizzog/dish@latest</code>
      </pre>
      <pre>
        <code>yarn create @fizzog/dish</code>
      </pre>

      <h3>Step 2: Run the CLI</h3>
      <pre>
        <code>npm run dish usage</code>
      </pre>
      <p>Or leverage the package.json script that is optionally created.</p>

      <h2>Supported Config Options</h2>
      <h3>dish.config.json</h3>
      <pre>
        <code>
          {`{
  "out": ".dish",
  "sourceGlob": "./src/**/*.{tsx,jsx}",
  "localeGlob": "./src/locales/**/*.json",
  "usageExports": [
    "used",
    "unused",
    "missing"
  ]
}`}
        </code>
      </pre>

      <p>
        <strong>out</strong> <em>string</em> - The output directory where
        locale-specific files for missing, used, and used data will be created.
      </p>
      <p>
        <strong>sourceGlob</strong> <em>string</em> - The glob expression for
        finding files that make use of translation code, e.g., <code>ts</code>,{" "}
        <code>tsx</code>, <code>js</code>, <code>jsx</code>.
      </p>
      <p>
        <strong>localeGlob</strong> <em>string | string[]</em> - The glob
        expression for finding files that store translation text, e.g.,{" "}
        <code>en.feature.json</code>.
      </p>
      <p>
        <strong>usage</strong> <em>string | string[]</em> - What files should be
        generated when <code>dish</code> is run.{" "}
        <em>options: used, unused, missing</em>
      </p>
    </div>
  );
}
