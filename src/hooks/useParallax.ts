import { useEffect, useState } from "react";

export function useParallax(intensity = 20): { x: number; y: number } {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * intensity;
      const y = (event.clientY / window.innerHeight - 0.5) * intensity;
      setOffset({ x, y });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [intensity]);

  return offset;
}
