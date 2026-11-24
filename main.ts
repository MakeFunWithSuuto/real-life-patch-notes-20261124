// Writes one patch note for a bug in real life to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  'v31.0.4: Fixed reply handler returning "You too!" when the waiter says "Enjoy your meal." ' +
  "Won't fix: 3 a.m. replay of the incident, nightly until 2047.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
