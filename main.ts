// make.fun news-image-20261117 entry (Node 22, stdlib only).
// Writes the bundled Tuesday 17 November 2026 world-news PNG to /output/entry.png.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const entryImage = fileURLToPath(new URL("./entry.png", import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.png");

mkdirSync(dirname(outputPath), { recursive: true });
copyFileSync(entryImage, outputPath);
