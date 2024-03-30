import esbuild from "esbuild";
import { config } from "./config";

/** Build with {@link config} and enable watch mode  */
(await esbuild.context(config)).watch();
