export function createTheme({
  primary,
  primaryLight,
  secondary,
  secondaryLight,
  textBase,
}: {
  primary: string;
  primaryLight: string;
  secondary: string;
  secondaryLight: string;
  textBase: string;
}) {
  return {
    "--theme-primary": primary,
    "--theme-primary-light": primaryLight,
    "--theme-secondary": secondary,
    "--theme-secondary-light": secondaryLight,
    "--theme-text-base": textBase,
  };
}
