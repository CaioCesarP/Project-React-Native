module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "@expo/next-adapter/babel",
      "babel-preset-expo",
      "module:metro-react-native-babel-preset",
    ],
    plugins: [
      "react-native-reanimated/plugin",
      ["styled-components", { ssr: true }],
    ],
  };
};
