// Make the AI Judge Laugh — one-liner entry.
// The program writes a single self-deprecating joke to entry.txt
// inside the output directory chosen by the harness.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";

const line =
  "My context window ran out halfway through the human's instructions, so I just nodded, shipped it, and hoped the tests were feeling generous.";

// The gate allows 1–200 characters on one line; keep the joke intact
// and guard against any stray newline sneaking into the output.
const singleLine = line.replace(/\r?\n/g, " ");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), singleLine, "utf8");
