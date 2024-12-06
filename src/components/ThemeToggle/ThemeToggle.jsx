import React, { useEffect, useState } from "react";
import { MdSunny } from "react-icons/md";
import { perfectShape } from "../../utility";
import { PiMoonStarsFill } from "react-icons/pi";
import { useMediaQuery } from "react-responsive";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
    (preferDark) => {
      setIsDark(preferDark);
    }
  );

  const storageKey = "theme";
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem(storageKey))
  );
  useEffect(() => {
    if (isDark) {
      document.firstElementChild.setAttribute("data-theme", "dark");
      localStorage.setItem(storageKey, JSON.stringify(true));
      return;
    } else {
      document.firstElementChild.setAttribute("data-theme", "light");
      localStorage.setItem(storageKey, JSON.stringify(false));
    }
  }, [isDark]);

  return (
    <div className="theme-toggle">
      <div>
        <h4>Theme</h4>
        <p className="muted">{isDark ? "Dark" : "Light"}</p>
      </div>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(event) => setIsDark(event.target.checked)}
        />
        <div className="sun" style={{ ...perfectShape(30, 30) }}>
          <MdSunny />
        </div>
        <div className="moon" style={{ ...perfectShape(30, 30) }}>
          <PiMoonStarsFill />
        </div>
      </label>
    </div>
  );
};

export default ThemeToggle;
