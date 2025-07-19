import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat-theme") || "coffee",
  setTheme: (theme) => {
    // ✅ Save the selected theme to localStorage
    localStorage.setItem("chat-theme", theme);
    
    // ✅ Apply it globally to the <html> tag
    document.documentElement.setAttribute("data-theme", theme);
    
    set({ theme });
  },
}));
