import { useEffect, useState } from "react";

export function useMouse() {
  const [mousePosition, setMousePosition] = useState({
    x: null,
  });

  useEffect(() => {
    function handle(e) {
      setMousePosition({
        x: e.pageX,
      });
    }
    document.addEventListener("mousemove", handle);
    return () => document.removeEventListener("mousemove", handle);
  });

  return mousePosition;
}
