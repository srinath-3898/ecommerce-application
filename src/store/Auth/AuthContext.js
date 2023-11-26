const { createContext } = require("react");

export const AuthContext = createContext({
  isClient: false,
  token: "",
  onLogin: () => {},
  onLogout: () => {},
});
