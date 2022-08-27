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
    secondaryAccent: "",
    textPrimary: "#000000",
    textSecondary: "#7D7D97",
    background: "#F3F8FF",
    border: "rgba(0,0,0,0.1)",
  },
  ...common,
};

export const darkTheme = {
  colors: {
    primary: "#2C2C38",
    secondary: "#2F2F3A",
    secondaryLight: "#373744",
    primaryAccent: "#6e6eba",
    primaryAccentLight: "#7878BF",
    secondaryAccent: "",
    textPrimary: "#FFFFFF",
    textSecondary: "#9696AB",
    background: "#21212D",
    border: "rgba(250,250,250,0.1)",
  },
  ...common,
};
