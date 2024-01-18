import React, { useState } from "react";
import css from "./Dashboard.module.scss";
import FoodScreen from "./FoodScreen/FoodScreen";
import TransaksiScreen from "./TransaksiScreen/TransaksiScreen";
import { NavLink } from "react-router-dom";
import { menu } from "../../backend/utils/data";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.tabMenu}>
          <ul className={css.tab}>
            {menu.map((menu, i) => {
              return (
                <li key={i} >
                  <NavLink
                    to={menu.link}
                    end={menu.link === "/"}
                    className={({ isActive }) => (isActive ? css.active : "")}
                  >
                    {menu.nama}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
