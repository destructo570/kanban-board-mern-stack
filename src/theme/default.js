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
    teal: "#31C3C0",
    darkTeal: "#25807E",
    yellow: "#F0B13D",
    darkYellow: "#946A1D",
    gray: "#A8BEC9",
    darkGray: "#374B56",
    green: "#1F3540",
    darkGreen: "#0F212B",
    black: "#192A32",
  },
  ...common,
};

export const darkTheme = {
  colors: {
    primary: "#2C2C38",
    secondary: "#FFFFFF",
    primaryAccent: "#6e6eba",
    primaryAccentLight: "#7e7ecf",
    secondaryAccent: "",
    textPrimary: "#FFFFFF",
    textSecondary: "#2C2C38",
    background: "#21212D",
  },
  ...common,
};
