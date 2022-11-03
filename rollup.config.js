import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";

export default [
  {
    input: "./src/index.tsx",
    output: [
      { file: "dist/index.js", format: "cjs" },
      { file: "dist/index.es.js", format: "es", exports: "named" },
    ],
    plugins: [
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
        babelHelpers: "bundled",
      }),
      external(),
      resolve({ browser: true }),
      typescript({ module: "ESNext" }),
      postcss({
        plugins: [],
        minimize: true,
      }),
      commonjs({
        include: /node_modules/,
        requireReturnsDefault: "auto", // <---- this solves default issue
      }),
      terser(),
    ],
  },
];
