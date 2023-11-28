const { createContext } = require("react");

export const AuthContext = createContext({
  token: "",
  user: { email: "" },
  onLogin: () => {},
  onLogout: () => {},
});
