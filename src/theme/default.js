const common = {
  padding: {
    small: "",
    medium: "",
    large: "",
  },
  margin: {
    small: "",
    medium: "",
    large: "",
  },
  media: {
    small: "365px",
    medium: "765px",
    large: "1200px",
  },
  borderRadius: "8px",
};

export const lighTheme = {
  colors: {
    primary: "#FFFFFF",
    secondary: "#FFFFFF",
    secondaryLight: "#F1F1F1",
    primaryAccent: "#6e6eba",
    primaryAccentLight: "#7878BF",
    secondaryAccent: "#F3F8FF",
    textPrimary: "#000000",
    textSecondary: "#7D7D97",
    background: "#F3F8FF",
    backgroundLight: "#E6EDF7",
    border: "rgba(0,0,0,0.1)",
    shadow: "rgba(50, 50, 93, 0.15)",
    textHighlight: "#cfdb5e",
    popupBg: "#a1a1b3",
    popupHover: "#87879a",
  },
  ...common,
};

export const darkTheme = {
  colors: {
    primary: "#323242",
    secondary: "#323242",
    secondaryLight: "#383849",
    primaryAccent: "#6e6eba",
    primaryAccentLight: "#7878BF",
    secondaryAccent: "#87879a",
    textPrimary: "#FFFFFF",
    textSecondary: "#9696AB",
    background: "#282836",
    backgroundLight: "#2B2B3B",
    border: "rgba(250,250,250,0.1)",
    shadow: "rgba(0, 0, 0, 0.15)",
    textHighlight: "#d9e854",
    popupBg: "#a1a1b3",
    popupHover: "#87879a",
  },
  ...common,
};
