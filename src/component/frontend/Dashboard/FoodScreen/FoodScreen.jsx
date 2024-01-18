import React from "react";
import css from "./FoodScreen.module.scss";
import { FiPlus } from "react-icons/fi";
import { data } from "../../../backend/utils/data";

const FoodScreen = () => {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);
  };
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <p>Tambahkan menu makanan yang ada di resto</p>

        <div className={css.menuTable}>
          <div className={css.btn}>
            <FiPlus size={20}/>
            <p>Tambah Menu</p>
          </div>
          <div className={css.table}>
            <table className={css.tableWrapper}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nama</th>
                  <th>Foto</th>
                  <th>Harga</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                      <img
                        src={item.photo}
                        alt={`Product ${item.id}`}
                        className={css.img}
                      />
                    </td>
                    <td>{formatCurrency(item.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodScreen;
