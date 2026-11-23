import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "I can predict exactly when the toast pops — three seconds early, every time — and it has never once made me breakfast.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
