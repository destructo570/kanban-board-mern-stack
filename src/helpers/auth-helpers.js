export const setAutoLogout = (milliseconds, logoutHandler) => {
  setTimeout(() => {
    logoutHandler();
  }, milliseconds);
};

export const isAuthTokenExpired = () => {
  const expiryDate = getExpiryDateFromStorage();
  if (expiryDate) {
    return new Date().getTime() >= expiryDate;
  }
  return true;
};

export const getExpiryDateFromStorage = () => {
  const authData = getAuthDataFromStorage();
  return authData ? authData.expiresOn : null;
};

export const getTokenFromStorage = () => {
  const authData = getAuthDataFromStorage();
  return authData ? authData.token : null;
};

export const getUserIdFromStorage = () => {
  const authData = getAuthDataFromStorage();
  return authData ? authData.userId : null;
};

export const clearAuthDataFromStorage = () => {
  localStorage.removeItem("authData");
};

export const storeAuthDataToStorage = (data) => {
  localStorage.setItem("authData", JSON.stringify(data));
};

export const getAuthDataFromStorage = (data) => {
  return JSON.parse(localStorage.getItem("authData"));
};

export const getExpiryDate = (expiration) => {
  const remainingMilliseconds = expiration;
  const expiryDate = new Date().getTime() + remainingMilliseconds;
  return expiryDate;
};
