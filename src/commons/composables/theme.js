import { useThemes as originalUseTheme } from './useTheme';

const themeInstance = originalUseTheme();

export function useTheme() {
  return themeInstance;
}
