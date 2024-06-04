export const BrowserRoutes = {
  login: "/login",
  signup: "/signup",
  agent: "/agent",
  company: "/company",
  overview: "/overview",
};

export const BrowserComboRoutes = {
  agentLogin: BrowserRoutes.agent + BrowserRoutes.login,
  agentSignup: BrowserRoutes.agent + BrowserRoutes.signup,
};
