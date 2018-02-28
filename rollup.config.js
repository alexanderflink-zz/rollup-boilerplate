import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";

export default {
	input: "src/js/main.js",
	output: {
		file: "dist/js/bundle.js",
		format: "iife",
		name: "main"
	},
	plugins: [
		resolve(),
		commonjs({
			namedExports: {},
		}),
		babel({
			exclude: "node_modules/**", // only transpile our source code
		}),
	]
};
