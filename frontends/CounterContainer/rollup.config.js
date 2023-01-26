import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const EXTENSIONS = [".js", ".jsx", ".ts", ".tsx"];

export default {
  external: ["react", "react-dom", "react-router-dom", "history"],
  input: {
    main: "src/index.jsx",
  },
  output: {
    dir: "build",
    entryFileNames: "index.js",
    format: "es",
  },

  plugins: [
    peerDepsExternal(),
    babel({
      extensions: EXTENSIONS,
      babelrc: false,
      babelHelpers: "inline",
      presets: ["@babel/preset-react"],
      plugins: [],
    }),
    terser({
      compress: {
        drop_console: true,
      },
    }),
  ],
};
