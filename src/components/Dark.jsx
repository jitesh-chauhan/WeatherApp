import React, { useEffect, useState } from "react";

function Dark() {
  const [theme, setTheme] = useState("light");

  const changetheme = () => {
    setTheme(theme == "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      onClick={changetheme}
      className="bg-green-400 w-36 mt-4 h-12 px-2 border-none rounded-md text-white"
    >
      {" "}
      {theme == "dark" ? "Light mode" : "Dark mode"}
    </button>

  );
}

export default Dark;
