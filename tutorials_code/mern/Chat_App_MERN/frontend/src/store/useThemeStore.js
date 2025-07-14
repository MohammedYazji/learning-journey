import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat-theme") || "retro",
  setTheme: (theme) => {
    localStorage.setItem("chat-theme", theme);
    // after updated it locally also update it here
    set({ theme });
  },
}));
