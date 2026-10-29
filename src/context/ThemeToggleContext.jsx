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
  return <></>;
}
