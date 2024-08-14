import { useThemes as originalUseTheme } from "@/commons/composables/useTheme";

const themeInstance = originalUseTheme();

export function useTheme() {
  return themeInstance;
}
