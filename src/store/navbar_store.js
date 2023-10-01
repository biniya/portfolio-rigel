import { defineStore } from "pinia";

export const useNavBarStore = defineStore({
  id: "navbar",
  state: () => ({
    style: "bg-black",
    secondaryStyle: "fill-gray-500 text-gray-100",
    logoStyle: "text-primary",
    menuStyle: "bg-white text-black",
    menuButtonStyle: "fill-primary",
    showNavBar: false,
    showMenu: false,
    selectedProject: 1,
    currentPage: "home",
  }),
  actions: {
    toggleNavBar() {
      this.showNavBar = !this.showNavBar;
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    setProjectsNavBarTheme() {
      switch (this.selectedProject) {
        case 1:
          this.setNavBarTheme(
            "bg-purple-600 text-purple-50",
            "text-purple-50 fill-purple-50",
            "text-amber-400",
          );
          this.setMenuProperty(
            "bg-purple-600 text-purple-50",
            "fill-[#B8BFC6]",
          );
          break;
        case 2:
          this.setNavBarTheme(
            "bg-gray-700 text-gray-50",
            "text-gray-100 fill-gray-50",
            "text-amber-400",
          );
          this.setMenuProperty("bg-gray-700 text-gray-50", "fill-gray-50");
          break;
        case 3:
          this.setNavBarTheme(
            "bg-blue-700 text-blue-50",
            "text-blue-50 fill-blue-50",
            "text-amber-400",
          );
          this.setMenuProperty("bg-blue-700 text-blue-50 ", "fill-orange-50");
          break;
        case 4:
          this.setNavBarTheme(
            "bg-orange-700 text-orange-50",
            "text-white fill-white",
            "text-orange-200",
          );
          this.setMenuProperty(
            "bg-orange-700 text-orange-50",
            "fill-orange-50",
          );
          break;

        case 5:
          this.setNavBarTheme(
            "bg-red-600 text-red-50",
            "text-red-50 fill-red-50",
            "text-[#2E2E2E]",
          );
          this.setMenuProperty("bg-red-600 text-red-50", "fill-red-50");
          break;
        case 6:
          this.setNavBarTheme(
            "bg-white text-black",
            "text-gray-800 fill-gray-800",
            "text-primary",
          );
          this.setMenuProperty("bg-white text-black", "fill-black");
          break;
        case 7:
          this.setNavBarTheme(
            "bg-yellow-600 text-yellow-50",
            "text-yellow-50 fill-yellow-50",
            "text-[#37323E]",
          );
          this.setMenuProperty(
            "bg-yellow-600 text-yellow-50",
            "fill-yellow-50",
          );
          break;
        default:
          break;
      }
    },
    setNavBarTheme(style, secondaryStyle, logoStyle) {
      this.style = style;
      this.secondaryStyle = secondaryStyle;
      this.logoStyle = logoStyle;
    },
    setMenuTheme() {
      switch (this.currentPage) {
        case "home":
          this.setMenuProperty(
            "bg-gradient-to-b from-black to-primary/20 text-gray-100",
            "fill-primary",
          );
          this.setNavBarTheme(
            "bg-black text-gray-100",
            "text-white fill-gray-500",
            "text-primary",
          );
          break;
        case "about":
          this.setMenuProperty("bg-gray-100 text-black", "fill-black");
          this.setNavBarTheme(
            "bg-gray-100 text-gray-700",
            "text-gray-800 fill-gray-800",
            "text-primary",
          );
          break;
        case "projects":
          this.setProjectsNavBarTheme();
          break;
        case "team":
          this.setMenuProperty("bg-gray-100 text-black", "fill-black");
          this.setNavBarTheme(
            "bg-gray-100 text-gray-800",
            "text-gray-800 fill-gray-800",
            "text-primary",
          );
          break;
        case "contact":
          this.setNavBarTheme(
            "bg-gray-100 text-gray-800",
            "text-gray-800 fill-gray-800",
            "text-primary",
          );
          this.setMenuProperty("bg-gray-100 text-black", "fill-black");
          break;
        default:
          break;
      }
    },
    setMenuProperty(menuStyle, menuButtonStyle) {
      this.menuStyle = menuStyle;
      this.menuButtonStyle = menuButtonStyle + " w-10";
    },
  },
});
