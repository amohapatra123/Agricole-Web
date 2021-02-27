import React from "react";
const Homepage = React.lazy(() => import("../container/homepage.js"));

export const routes = [{ id: 0, path: "/", component: Homepage }];
