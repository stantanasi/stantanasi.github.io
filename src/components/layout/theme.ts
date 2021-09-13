export default interface Theme {
  colors: {
    accentColor: string;
    backgroundPrimaryColor: string;
    backgroundSecondaryColor: string;
  };
  fonts: string[];
  fontSizes: {
    small: string;
    medium: string;
    large: string;
  };
}


export const themeLight: Theme = {
  colors: {
    accentColor: "#FFFDF9",
    backgroundPrimaryColor: "#FFF",
    backgroundSecondaryColor: "#FFF",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
}
