import { ReactiveEffect } from "@vue/reactivity";
import { memo, useState } from "react";

// Use this to track garbage collector
// const registry = new FinalizationRegistry(console.log);

export function observer<T extends (...args: any[]) => any>(Component: T): T {
  const observingComponent = memo((...args) => {
    let initialResult: any;
    const effectRunner: ReactiveEffect = new ReactiveEffect(() =>
      initialResult ? setResult(Component(...args)) : Component(...args)
    );
    const [result, setResult] = useState(() => effectRunner.run());

    initialResult = result;

    // Use this to register each effect runner. Click the memory tab in developer tools
    // and clean, you'll see it removes dereferenced effect runners
    // registry.register(effectRunner, "It is gone!");

    return result;
  });

  observingComponent.displayName =
    // @ts-ignore
    Component.displayName || "ObservingComponent";

  return observingComponent as unknown as T;
}
