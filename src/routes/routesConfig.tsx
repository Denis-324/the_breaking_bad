/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import React, { ReactElement } from "react";
import MainPage from "../containers/MainPage";
import –°haractersPage from "../containers/–°haractersPage";
import NotFoundPage from "../containers/NotFoundPage";
import PersonagePage from "../containers/PersonagePage";
import FavoritePage from "../containers/FavoritePage";
import SearchPage from "../containers/SearchPage";
import RandomPage from "../containers/RandomPage";

type routesConfigType = {
  path: string;
  element: ReactElement;
}[];

const routesConfig: routesConfigType = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/characters",
    element: <–°haractersPage />,
  },
  {
    path: "/random",
    element: <RandomPage />,
  },
  {
    path: "/favorites",
    element: <FavoritePage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/characters/:id",
    element: <PersonagePage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
export default routesConfig;
