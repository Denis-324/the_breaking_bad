/* eslint-disable react/no-array-index-key */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import routesConfig from "../../routes/routesConfig";
import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={styles.flex}>
      <div className={styles.wrapper}>
        <Header />
        <Routes>
          {routesConfig.map((route, index) => (
            <Route path={route.path} element={route.element} key={index} />
          ))}
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
