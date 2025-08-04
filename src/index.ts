export { pathsToModuleNameMapper } from "ts-jest";

export default (options: any = {}) => {
  return {
    verbose: true,
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: ".coverage",
    coverageProvider: "v8",
    preset: "ts-jest",

    testEnvironment: "jsdom",
    maxWorkers: "50%",
    // moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    //   prefix: "<rootDir>/",
    // }),

    ...options,
    setupFilesAfterEnv: [
      "@iiko/jest-react-config-legacy/dist/setupAfterEnv.js",
      ...options.setupFilesAfterEnv,
    ],

    transformIgnorePatterns: [
      "\\\\node_modules\\\\",
      "\\.pnp\\.[^\\\\]+$",
      ...(options.transformIgnorePatterns || []),
    ],

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
      ...options.transform,
    },

    globals: {
      ...options.globals,
      "ts-jest": {
        isolatedModules: true,
        ...options.globals?.["ts-jest"],
      },
    },
  };
};
