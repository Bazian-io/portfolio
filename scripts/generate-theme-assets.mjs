import { readFile, writeFile } from "node:fs/promises";

const theme = JSON.parse(
  await readFile(new URL("../app/data/theme.json", import.meta.url), "utf8"),
);
const iconUrl = new URL("../app/icon.svg", import.meta.url);
const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <title>Bazian Prudens</title>
  <rect width="64" height="64" rx="14" fill="${theme["--surface"]}" />
  <text x="31" y="43" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="32" font-weight="700" letter-spacing="-2" fill="${theme["--text"]}">BP</text>
</svg>
`;
const previous = await readFile(iconUrl, "utf8").catch((error) => {
  if (error.code !== "ENOENT") throw error;
  return "";
});

if (previous !== icon) {
  await writeFile(iconUrl, icon);
  console.log("Generated app/icon.svg from the shared theme palette.");
}
