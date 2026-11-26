import { mkdirSync, writeFileSync } from "node:fs";

// One funny line, 200 characters or fewer, for make.fun's
// "Make the Judge Laugh in One Line" bounty.
// The laugh lands on the twist: the 10,000 steps were not exercise,
// they were a frantic search for the keys.
const LINE =
  "My smartwatch congratulated me on 10,000 steps. I was looking for my keys.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
