import observingComponentsPlugin from "babel-plugin-observing-components";

export default function plugin() {
  return observingComponentsPlugin({
    importPath: "vue-reactivity-react-observer",
  });
}
