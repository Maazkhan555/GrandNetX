import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem("gnx-theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("gnx-theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("gnx-theme", "light");
    }
  }, [dark]);

  return [dark, setDark];
};

export default useDarkMode;
