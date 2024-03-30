import { BuildOptions, type Plugin, type PluginBuild } from "esbuild";
import { rm } from "fs/promises";
import pkg from "../package.json";

/** A plugin for deleting the `./dist` directory when a build start */
const deleteDistPlugin: Plugin = {
  name: "delete-dist",
  setup(build: PluginBuild) {
    build.onStart(async () => {
      console.log("Deleting the `./dist` directory...");
      await rm("./dist", { force: true, recursive: true });
      console.log("the `./dist` directory has been deleted.");
    });
  },
};

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

  // Plugins
  plugins: [deleteDistPlugin],
};
