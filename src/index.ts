import { merge } from "lodash";
export { pathsToModuleNameMapper } from "ts-jest";

export default (options: any = {}) => {
  return merge(
    {
      verbose: true,
      clearMocks: true,
      collectCoverage: true,
      coverageDirectory: ".coverage",
      coverageProvider: "v8",
      preset: "ts-jest",
      globals: {
        "ts-jest": {
          isolatedModules: true,
        },
      },

      testEnvironment: "jsdom",
      maxWorkers: "50%",
      // moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
      //   prefix: "<rootDir>/",
      // }),

      setupFilesAfterEnv: ["@iiko/jest-react-config-legacy/dist/setupAfterEnv.js"],
      transform: {
        "^.+\\.(ts|tsx|js|jsx)$": [
          "ts-jest",
          {
            babelConfig: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              plugins: ["@babel/plugin-transform-modules-commonjs"],
            },
          },
        ],
        ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
          "jest-transform-stub",
      },

      transformIgnorePatterns: ["\\\\node_modules\\\\", "\\.pnp\\.[^\\\\]+$"],
    },
    options
  );
};
