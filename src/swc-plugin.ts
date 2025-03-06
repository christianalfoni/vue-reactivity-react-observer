export default function plugin() {
  return [
    "swc-plugin-observing-components",
    { import_path: "vue-reactivity-react-observer" },
  ];
}
