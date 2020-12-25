import React from "react";
const Homepage = React.lazy(() => import("../container/page1.js"));
const Page2 = React.lazy(() => import("../container/page2.js"));
export const routes = [
  { id: 0, path: "/", component: Homepage },
  { id: 1, path: "/page2", component: Page2 },
];
