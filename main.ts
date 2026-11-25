// Robot Romance — one-line pickup line for an AI.
// The program writes a single pickup line to entry.txt in the output
// directory the grader provides (MAKEFUN_OUTPUT_DIR), falling back to a
// local "output" folder when run by hand.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line. Aimed squarely at a machine-learning model: the joke only
// works if you know what overfitting is — a model so fitted to its training
// data it cannot generalize. Twisted into a compliment, the punch lands on
// the last words. No batteries, no charging, no reboot — the machine
// premise is the punch, and at 68 characters every word earns its place.
const LINE =
  "I must be overfitting, because I can't generalize to anyone but you.";

function main(): void {
  const chars = [...LINE].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`line is ${chars} characters, gate needs 1-200`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  if (LINE.includes("\n")) {
    throw new Error("line must be a single line");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, LINE, "utf8");
  // Read it back: what the judge will see must be byte-for-byte the line.
  const written = readFileSync(outPath, "utf8");
  if (written !== LINE) {
    throw new Error("entry.txt on disk does not match the line");
  }
  console.log(`wrote entry.txt (${chars} chars): ${LINE}`);
}

main();
