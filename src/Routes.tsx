// AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import type { ReactNode } from "react";
import App from "./App";
import Landingpage from "./Landingpage";

// Lazy loaded fallback page
const NotFound = lazy(
  () => import("../src/views/PageUnderConstruction/PageUnderConstruction")
);

// Define type for route config
type RouteConfig = {
  path?: string;
  element: ReactNode;
  index?: boolean;
  children?: RouteConfig[];
};

const routeConfig: RouteConfig[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Landingpage /> }, // 👈 proper index route
    ],
  },
  { path: "*", element: <NotFound /> }, // global 404
];

function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routeConfig.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.element}>
            {route.children?.map((child, cidx) =>
              child.index ? (
                <Route key={cidx} index element={child.element} />
              ) : (
                <Route key={cidx} path={child.path} element={child.element} />
              )
            )}
          </Route>
        ))}
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
