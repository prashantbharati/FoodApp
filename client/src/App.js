import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Allfood from "./pages/Allfood";
import Mycart from "./pages/Mycart";
import Github from "./pages/Github";
const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/allfoods" element={<Allfood />}></Route>
        <Route path="/mycart" element={<Mycart />}></Route>
        <Route path="/github" element={<Github />}></Route>
      </Routes>
    </Layout>
  );
};

export default App;
