import {
  ThemeProviderContext,
  type ThemeProviderState,
} from "@/shared/providers/theme";
import { useContext } from "react";

export const useTheme = (): ThemeProviderState => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
