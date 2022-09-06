export const getItemFromLocalStorage = (key, isJsonObject = false) => {
  const value = localStorage.getItem(key);
  return isJsonObject ? JSON.parse(value) : value;
};

export const setItemToLocalStorage = (key, value, isJsonObject = false) => {
  if (isJsonObject) {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    localStorage.setItem(key, value);
  }
};

export const getUserThemePref = () => {
  const theme = localStorage.getItem("isDark");
  if (theme !== null) {
    return theme === "false" ? false : true;
  } else {
    return setUserThemePref(false);
  }
};

export const setUserThemePref = (value) => {
  localStorage.setItem("isDark", value);
  return value;
};
