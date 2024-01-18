import React, { useRef, useState } from "react";
import css from "./TransaksiScreen.module.scss";
import { MdPerson4 } from "react-icons/md";
import { data } from "../../../backend/utils/data";
import DetailModal from "./detailModal/DetailModal";

const TransaksiScreen = () => {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState([]);
  const rightSectionRef = useRef(null);

  const handleCardClick = (selectedCard) => {
    const existingItem = selectedData.find(
      (item) => item.id === selectedCard.id
    );

    if (existingItem) {
      setSelectedData((prevSelectedData) =>
        prevSelectedData.map((item) =>
          item.id === selectedCard.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: (item.quantity + 1) * item.price,
              }
            : item
        )
      );
    } else {
      // If the item doesn't exist, add it with quantity 1 and calculate total price
      setSelectedData((prevSelectedData) => [
        ...prevSelectedData,
        { ...selectedCard, quantity: 1, totalPrice: selectedCard.price },
      ]);
    }
  };

  const printBill = () => {
    const printContent = rightSectionRef.current.innerHTML; // Access innerHTML using the ref

    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent;

    window.print();

    document.body.innerHTML = originalContent;
  };

  const calculateTotalBill = () => {
    return selectedData
      .reduce((total, item) => total + item.totalPrice, 0)
      .toFixed(2);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const clearItems = () => {
    setSelectedData([]);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.menu}>
          {data.map((menu, i) => {
            return (
              <>
                <div
                  className={css.menuCard}
                  key={i}
                  onClick={() => handleCardClick(menu)}
                >
                  <img src={menu.photo} alt={menu.name} />
                  <span>{menu.name}</span>
                  <span>{formatCurrency(menu.price)}</span>
                </div>
              </>
            );
          })}
        </div>

        <div className={css.transaksi}>
          <div className={css.top}>
            <MdPerson4 size={30} />
            <h3>Pesanan</h3>
          </div>
          <div className={css.items}>
            {selectedData.map((selectedItem) => (
              <>
                <div className={css.itemCard} key={selectedItem.id}>
                  <img src={selectedItem.photo} alt={selectedItem.name} />
                  <span>{selectedItem.name}</span>
                  <p>x{selectedItem.quantity}</p>
                  <p>{formatCurrency(selectedItem.totalPrice)}</p>
                </div>
              </>
            ))}

            <div className={css.bottom}>
              <div className={css.clearBtn}>
                <button onClick={clearItems}>Clear Cart</button>
              </div>
              <div className={css.printBtn}>
                <button>Save Bill</button>
                <button onClick={printBill}>Print Bill</button>
              </div>
              <div className={css.submitBtn}>
                <button onClick={openModal}>
                  <p>Charge</p>
                  <p>{formatCurrency(calculateTotalBill() || 0)}</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <DetailModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          selectedData={selectedData}
          totalBill={formatCurrency(calculateTotalBill() || 0)}
        />
      </div>
    </div>
  );
};

export default TransaksiScreen;
