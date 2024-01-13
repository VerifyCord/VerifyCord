import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

const ROUTES = import.meta.glob("./routes/**/*.jsx", { eager: true });

const routes = Object.keys(ROUTES).map((route) => {
  const path = route
    .toLowerCase()
    .replace(/\.\/routes|index|\.jsx$/g, "")
    .replace(/\[\.{3}.+\]/, "*")
    .replace(/\[(.+)\]/, ":$1");

  return { path, component: ROUTES[route].default };
});

export const Router = () => {
  return (
    <Routes>
      {routes.map(({ path, component: Component = Fragment }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<h1>404: Not found</h1>} />
    </Routes>
  );
};