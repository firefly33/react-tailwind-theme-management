import React, { useEffect } from "react";
import { applyTheme } from "../themes/applyTheme";
import baseTheme from "../themes/base";
import darkTheme from "../themes/dark";
import summerBeam from "../themes/summer-beam";
import Button from "./Button";

function ThemeSwitcher() {
  useEffect(() => {
    applyTheme(baseTheme);
  }, []);
  return (
    <section className="flex gap-2">
      <Button variant="primary" onClick={() => applyTheme(baseTheme)}>
        Base
      </Button>
      <Button variant="primary" onClick={() => applyTheme(summerBeam)}>
        Summer beam
      </Button>
      <Button variant="secondary" onClick={() => applyTheme(darkTheme)}>
        Dark theme
      </Button>
    </section>
  );
}

export default ThemeSwitcher;
