import React from "react";
const Homepage = React.lazy(() => import("../container/homepage.js"));
const UserLogin = React.lazy(() => import("../container/user/UserLogin.js"));
const Dashboard = React.lazy(() => import("../container/user/dashboard.js"));
const Register = React.lazy(() => import("../container/shopkeeper/register"));
export const routes = [
  { id: 0, path: "/", component: Homepage },
  { id: 1, path: "/user/login", component: UserLogin },
  { id: 2, path: "/user/dashboard", component: Dashboard },
  { id: 3, path: "/shopkeeper/register", component: Register },
];
