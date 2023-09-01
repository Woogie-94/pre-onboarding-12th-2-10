import { useEffect, useState } from "react";

export default function useObserver({ root = null, rootMargin = "0%", threshold = 0 }: IntersectionObserverInit) {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry);
      },
      { root, rootMargin, threshold },
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [target, root, rootMargin, threshold]);

  return { entry, setTarget };
}
