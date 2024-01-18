import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import css from "./DetailModal.module.scss";

const DetailModal = ({ isOpen, onRequestClose, selectedData, totalBill }) => {

  if (!isOpen) {
    return null;
  }

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        {/* <div className={css.closeBtn}>
          <button onClick={onRequestClose}><IoClose size={30}/></button>
        </div> */}
        <p className={css.title}>Detail Pesanan</p>
        <div className={css.modalOverlay} >
          <div
            className={css.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
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
                  {selectedData.map((selectedItem, i) => {
                    console.log(selectedItem.id);
                    return (
                      <tr key={selectedItem.id}>
                        <td>{i + 1}</td>
                        <td>
                          {selectedItem.name} x{selectedItem.quantity}
                        </td>
                        <td>
                          <img
                            src={selectedItem.photo}
                            alt={`Menu ${selectedItem.name}`}
                            className={css.img}
                          />
                        </td>
                        <td>{formatCurrency(selectedItem.price)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              
            </div>
            <p>Total Bill: {totalBill}</p>
          </div>
          <div className={css.line}/>
          <div className={css.transaksi}>
            <p>Uang Pembeli (Rp)</p>
            <input type="text" />
            <div className={css.btn}>
              <button onClick={onRequestClose}>Close</button>
              <button>Pay!</button>
            </div>
            <span>Kembalian : </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
