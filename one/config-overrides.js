const {
  override,
  addBabelPlugin,
  addBundleVisualizer,
  addBabelPreset,
  babelInclude,
} = require("customize-cra")
const { ModuleFederationPlugin } = require("webpack").container
const path = require("path")

let config = override(
  // babelInclude([path.resolve("src"), path.resolve("../three")]),
  (config) => {
    config.plugins.push(
      new ModuleFederationPlugin({
        name: "app1",
        remotes: {
          app2: "app2@http://localhost:1234/remoteEntry.js",
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: "17.0.2",
          },
          "react-dom": {
            singleton: true,
            requiredVersion: "17.0.2",
          },
          "@emotion/react": {
            singleton: true,
            requiredVersion: "11.7.1",
          },
        },
      }),
    )
    return config
  },
  (config) => {
    config.plugins = config.plugins.filter((plugin) => {
      return plugin.key !== "ESLintWebpackPlugin"
    })
    // Adds human readable names to chunks
    config.optimization.chunkIds = "named"
    return config
  },
  addBabelPlugin("@emotion/babel-plugin"),
  addBabelPreset("@emotion/babel-preset-css-prop"),
  process.env.ANALYZE && addBundleVisualizer(),
)

/*eslint-disable no-param-reassign */
if (process.env.NODE_ENV === "test") {
  config = {
    babelrc: true,
    jest: (config) => {
      config.setupFilesAfterEnv = ["<rootDir>/test/setup-tests.js"]
      config.modulePaths = ["."]

      return config
    },
  }
}

module.exports = config
