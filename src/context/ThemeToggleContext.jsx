import { createContext, useContext, useState } from "react";

//storing the context function we "create" in a named var for ease of use and no props drilling.
const ThemeContext = createContext();

//Creating the provider part of the theme component
export function ThemeProvider({ children }) {
  // Gotta be honest: a lot, if not most, of this is me testing stuff I've googled to attempt getting an overview of what that connects to what and gives the desired results.
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("appTheme") || "bright";
  });

  //toggle function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "bright" ? "dark" : "bright"));
  };

  //google quote: Keep attributes and localstorage in sync with the current theme
  useEffect(() => {
    localStorage.setItem("appTheme", theme);
    // note I've never used this before so I actually do not know what it does O.o
    document.documentElement.setAttribute("data-theme", theme);

    //Google says this is optional if using class based styling, which I belive is what I do indeed.
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      // May need to add a bright class here instead?
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

//Custom hook for ease of use and cleaner synatx
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("the useTheme must be used within a ThemeProvider");
  }
  return context;
};
