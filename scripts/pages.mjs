import fs from "node:fs";
import path from "node:path";

// Public assets also contain local links inside the historical catalogues and the game script.
const base = process.env.PAGES_BASE_PATH;
if (base === undefined || !/^(\/[A-Za-z0-9_.-]+)?$/.test(base)) throw Error("Invalid Pages base path");
const assets = /(["'`])\/(?=(?:flags|vendor|history|officers|portraits)\/|(?:city-[\w-]+|map-cities|world(?:-play)?|terrain-[\w-]+)\.(?:json|jpg|webp))/g;
for (const file of ["europe-1936.js", "history/leaders.json", "history/staff.json", "history/flags.json"]) {
  const target = path.join("out", file);
  fs.writeFileSync(target, fs.readFileSync(target, "utf8").replace(assets, "$1"+base+"/"));
}
fs.writeFileSync("out/.nojekyll", "");
