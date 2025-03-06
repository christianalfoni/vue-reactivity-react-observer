# vue-reactivity-react-observer

React observer for Vue Reactivity

```sh
npm install vue-reactivity-react-observer
```

Automatic observation from [observing-components](https://github.com/christianalfoni/observing-components).

**Babel plugine example**

```ts
import observerPlugin from "vue-reactivity-react-observer/babel-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [observerPlugin()],
      },
    }),
  ],
});
```

**SWC plugine example**

```ts
import observerPlugin from "vue-reactivity-react-observer/swc-plugin";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [
    react({
      plugins: [observerPlugin()],
    }),
  ],
});
```

You can now just use Vue reactivity primitives wherever.

```tsx
import { reactive } from "@vue/reactivity";

const counter = reactive({
  count: 0,
});

function Counter() {
  return (
    <button
      onClick={() => {
        counter.count++;
      }}
    >
      Count {counter.count}
    </button>
  );
}
```
