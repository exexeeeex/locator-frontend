import type { Theme } from "..";

export interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
