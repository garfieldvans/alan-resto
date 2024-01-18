import React, { useState } from "react";
import css from "./Dashboard.module.scss";
import FoodScreen from "./FoodScreen/FoodScreen";
import TransaksiScreen from "./TransaksiScreen/TransaksiScreen";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.tabMenu}>
          <div
            className={`${css.tab} ${activeTab === 1 ? css.active : ""}`}
            onClick={() => handleTabClick(1)}
          >
            Food
          </div>
          <div
            className={`${css.tab} ${activeTab === 2 ? css.active : ""}`}
            onClick={() => handleTabClick(2)}
          >
            Transaksi
          </div>

      </div>
        </div>
          <div className={css.tabContent}>
            {activeTab === 1 && <FoodScreen/>}
            {activeTab === 2 && <TransaksiScreen/>}
          </div>
    </div>
  );
};

export default Dashboard;
