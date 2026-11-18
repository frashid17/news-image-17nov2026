/**
 * make.fun news-image-20261117 — Tuesday 17 November 2026 world day sheet.
 * Deterministic copy of the repository entry.png into the sandbox output path.
 */
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY = "entry.png" as const;
const source = fileURLToPath(new URL(`./${ENTRY}`, import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const dest = join(outDir, ENTRY);

// Ensure /output exists, then copy the day-sheet bytes unchanged.
mkdirSync(dirname(dest), { recursive: true });
copyFileSync(source, dest);
