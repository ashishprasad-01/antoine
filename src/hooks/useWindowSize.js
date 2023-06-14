import { useState, useEffect } from "react";

function useWindowResize() {
  const [screenSize, setScreenSize] = useState({ width: undefined });

  useEffect(() => {
    function handleresize() {
      setScreenSize({ width: window.innerWidth });
    }
    window.addEventListener("resize", handleresize);

    handleresize();

    return () => window.removeEventListener("resize", handleresize);
  }, []);
  return screenSize;
}

export default useWindowResize;
