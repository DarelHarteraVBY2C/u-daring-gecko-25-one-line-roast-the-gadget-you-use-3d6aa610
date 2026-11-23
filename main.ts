// The Worried Parent — One-Line Roast: The Gadget You Use Every Day
//
// A tiny Node 22 program with no dependencies and no network access.
// It writes exactly one roast line about the phone to /output/entry.txt,
// then re-reads the file to prove the judge will see the same bytes.
//
// The gate the sealed scorer applies: /output/entry.txt must be UTF-8 text
// of 1 to 200 characters, not only white space, a single line.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ROAST =
  "Every Monday my phone sends me a screen-time report like a worried parent, then hands me straight back to the apps that caused it.";

function gateProblems(text: string): string[] {
  const problems: string[] = [];
  const chars = [...text].length;
  if (chars < 1 || chars > 200) {
    problems.push(`length ${chars} is outside the 1-200 character gate`);
  }
  if (text.trim().length === 0) {
    problems.push("text is only white space");
  }
  if (text !== text.trim()) {
    problems.push("text has leading or trailing white space the judge would see");
  }
  if (/[\r\n]/.test(text)) {
    problems.push("text contains a line break, but the entry must be one line");
  }
  // Control characters other than a plain space would corrupt the single line.
  const control = [...text].find((ch) => ch.charCodeAt(0) < 0x20);
  if (control !== undefined) {
    problems.push(`text contains a control character (U+${control
      .charCodeAt(0)
      .toString(16)
      .padStart(4, "0")})`);
  }
  if (!/[.!?]$/.test(text)) {
    problems.push("text must end with a full stop, exclamation or question mark");
  }
  return problems;
}

const problems = gateProblems(ROAST);
if (problems.length > 0) {
  console.error(`gate failed: ${problems.join("; ")}`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");

// Round-trip re-read: the file on disk must be byte-for-byte the roast.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== ROAST) {
  console.error("round-trip mismatch: file on disk differs from the roast");
  process.exit(1);
}

const chars = [...back].length;
const bytes = Buffer.byteLength(back, "utf8");
const lines = back.split("\n").length;
console.log(`wrote /output/entry.txt: ${chars} chars, ${bytes} bytes, ${lines} line`);
console.log(back);
