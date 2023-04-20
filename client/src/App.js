import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Allfood from "./pages/Allfood";
import Mycart from "./pages/Mycart";
const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/allfoods" element={<Allfood />}></Route>
        <Route path="/mycart" element={<Mycart />}></Route>
      </Routes>
    </Layout>
  );
};

export default App;
