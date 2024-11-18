import { initializeJQuery } from "./jquery";

// Wait for jQuery to be available
document.addEventListener("DOMContentLoaded", () => {
  if (typeof window.$ !== "undefined") {
    initializeJQuery(window.$);
  }
});

interface GhostThemeConfig {
  siteUrl: string;
  datePlaceholder: string;
}

class ThemeManager {
  private config: GhostThemeConfig;

  constructor(config: GhostThemeConfig) {
    this.config = config;
    this.init();
  }

  private init(): void {
    this.setupEventListeners();
  }

  private setupEventListeners(): void {
    document.addEventListener("DOMContentLoaded", () => {
      this.initializeTheme();
    });
  }

  private initializeTheme(): void {
    // Add your theme initialization logic here
    console.log("Theme initialized");
  }
}

// Initialize the theme
new ThemeManager({
  siteUrl: window.location.origin,
  datePlaceholder: "YYYY-MM-DD",
});
