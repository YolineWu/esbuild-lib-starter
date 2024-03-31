import { BuildOptions } from "esbuild";
import pkg from "../package.json";

/** The build options */
export const config: BuildOptions = {
  // General options
  bundle: true,
  tsconfig: "tsconfig.lib.json",

  // Input options
  entryPoints: ["src/main.ts"],

  // Output options
  banner: { js: `/* ${pkg.name} with version v${pkg.version} */` },
  format: "esm",
  outdir: "dist",

  // Source maps
  sourcemap: "linked",
};
