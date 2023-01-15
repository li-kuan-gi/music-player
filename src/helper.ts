import { useEffect, useRef } from "react";

function useDidUpdateEffect(
  fn: CallableFunction,
  inputs: React.DependencyList | undefined = undefined
) {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      return fn();
    }
    didMountRef.current = true;
  }, inputs);
}

export { useDidUpdateEffect };
