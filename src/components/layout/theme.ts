export default interface Theme {
  colors: {
    colorAccent: string;
    primaryBackgroundColor: string;
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
    colorAccent: "#FFFDF9",
    primaryBackgroundColor: "#FFF",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
}
