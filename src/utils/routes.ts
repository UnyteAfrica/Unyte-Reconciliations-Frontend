export const BrowserRoutes = {
  login: "/login",
  signup: "/signup",
  agent: "/agent",
  company: "/company",
  overview: "/overview",
  dashboard: "/dashboard",
  policies: "/policies",
  commissions: "/commissions",
  devices: "/devices",
  profile: "/profile",
  claims: "/claims",
  agents: "/agents",
  pending: "/pending",
  completed: "/completed",
  forgotPassword: "/forgot-password",
  resetPassword: "/reset-password",
  verify: "/verify",
  wildcard: "/*",
};

export const BrowserComboRoutes = {
  agentLogin: BrowserRoutes.agent + BrowserRoutes.login,
  agentSignup: BrowserRoutes.agent + BrowserRoutes.signup,
  agentForgotPassword: BrowserRoutes.agent + BrowserRoutes.forgotPassword,
  agentResetPassword: BrowserRoutes.agent + BrowserRoutes.resetPassword,
  agentVerify: BrowserRoutes.agent + BrowserRoutes.verify,
  agentDashboard: BrowserRoutes.agent + BrowserRoutes.dashboard,
  companyLogin: BrowserRoutes.company + BrowserRoutes.login,
  companySignup: BrowserRoutes.company + BrowserRoutes.signup,
  companyForgotPassword: BrowserRoutes.company + BrowserRoutes.forgotPassword,
  companyResetPassword: BrowserRoutes.company + BrowserRoutes.resetPassword,
  companyVerify: BrowserRoutes.company + BrowserRoutes.verify,
  companyDashboard: BrowserRoutes.company + BrowserRoutes.dashboard,
  companyClaims:
    BrowserRoutes.company + BrowserRoutes.dashboard + BrowserRoutes.claims,
  pendingCompanyClaims:
    BrowserRoutes.company +
    BrowserRoutes.dashboard +
    BrowserRoutes.claims +
    BrowserRoutes.pending,
  completedCompanyClaims:
    BrowserRoutes.company +
    BrowserRoutes.dashboard +
    BrowserRoutes.claims +
    BrowserRoutes.completed,
};
