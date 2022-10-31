import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
// import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.tsx",
  output: {
    file: "dist/index.mjs",
  },
  plugins: [
    typescript({ module: "ESNext" }),
    postcss({
      plugins: [],
      minimize: true,
    }),
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/preset-react"],
    }),
    //external(),
    //resolve(),
    terser(),
  ],
};
