import * as ReactDOM from "react-dom/client";
import React, { useEffect, useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Header from "../Header/Header";
import Dashboard from "../Dashboard/Dashboard";
import TambahMenu from "../Dashboard/FoodScreen/TambahMenu/TambahMenu";
import FoodScreen from "../Dashboard/FoodScreen/FoodScreen";
import TransaksiScreen from "../Dashboard/TransaksiScreen/TransaksiScreen";

const ScreenRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Dashboard/>
            <Routes>
                <Route path="/" element={<FoodScreen/>}/>
                <Route path="/tambah-menu" element={<TambahMenu/>}/>
                <Route path="/transaksi" element={<TransaksiScreen/>}/>
            </Routes>
        

      </div>
    </BrowserRouter>
  );
};

export default ScreenRouter;
