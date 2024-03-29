import esbuild from "esbuild";
import { config } from "./config";

(await esbuild.context(config)).watch();
