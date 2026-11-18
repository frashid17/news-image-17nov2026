/**
 * make.fun news-image-20261117
 * Copies Tuesday 17 November 2026 world-news board image to the grader output.
 * Node 22, standard library only. Deterministic across two runs.
 */

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const IMAGE_NAME = "entry.png" as const;
const sourcePath = fileURLToPath(new URL(`./${IMAGE_NAME}`, import.meta.url));
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const destinationPath = join(outputDirectory, IMAGE_NAME);

// Ensure the output folder exists before the deterministic copy.
mkdirSync(dirname(destinationPath), { recursive: true });
copyFileSync(sourcePath, destinationPath);
