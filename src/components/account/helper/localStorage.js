export const getToken = () => localStorage.getItem("userToken");
export const resetToken = () => localStorage.removeItem("userToken");
export const setToken = (token) =>
    localStorage.setItem("userToken", token);

export const getEmail = () => localStorage.getItem("userEmail");
export const resetEmail = () => localStorage.removeItem("userEmail");
export const setEmail = (email) =>
    localStorage.setItem("userEmail", email);
