const { createContext } = require("react");

export const AuthContext = createContext({
  isClient: false,
  token: "",
  user: { email: "" },
  onLogin: () => {},
  onLogout: () => {},
});
