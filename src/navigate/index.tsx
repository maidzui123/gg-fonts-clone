import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage, FontDetailPage } from "../pages";

const routers = [
  {
    key: "1",
    path: "/",
    element: <HomePage />,
  },
  {
    key: "2",
    path: "/specimen/:font",
    element: <FontDetailPage />,
  },
];

const NavigateContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routers.map((item) => (
          <Route
            key={item.key}
            path={item.path}
            element={item.element}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default NavigateContainer;
