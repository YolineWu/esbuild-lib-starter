import { BuildOptions } from "esbuild";

export const config: BuildOptions = {
  entryPoints: ["src/main.ts"],
  outdir: "dist",
};
