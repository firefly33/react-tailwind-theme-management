/* eslint-disable no-debugger */
import { ITheme } from "./ITheme";

export function applyTheme(theme: ITheme) {
  const root = document.documentElement;
  const entries = Object.entries(theme);

  entries.forEach((entry) => {
    const key = entry[0];
    const value = entry[1];
    root.style.setProperty(key, value);
  });
}
