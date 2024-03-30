import esbuild from "esbuild";
import { config } from "./config";

/** Build with {@link config} */
await esbuild.build(config);
