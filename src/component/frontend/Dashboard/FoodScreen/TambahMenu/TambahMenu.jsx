import React, { useRef, useState } from "react";
import { SlCloudUpload } from "react-icons/sl";
import css from "./TambahMenu.module.scss";

const TambahMenu = () => {
  const [image, setImage] = useState(null)
  const [fileName, setFileName] = useState("No selected file")


  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.title}>
          <span>Tambahkan Menu</span>
        </div>
        <div className={css.form}>
          <span>Nama Menu</span>
          <input type="text" className={css.inputNama} />

          <span>Gambar</span>

          <form
            action=""
            className={css.inputGambar}
            onClick={() => document.querySelector(".input-field").click()}
          >
            <input
              type="file"
              className="input-field"
              accept="image/*"
              onChange={({target: {files}}) => {
                files[0] && setFileName(files[0].name)
                if(files){
                    setImage(URL.createObjectURL(files[0]))
                }
              }}
              hidden
            />
            {image ? <img src={image}  alt={fileName} className={css.preview}/> :
            <>
            <SlCloudUpload size={20}/>
            <p>drag and drop a file here or click</p>
            </>
            }
          </form>

          <span>Harga</span>
          <div className={css.harga}>
            <p>Rp.</p>
            <input type="text" />
          </div>
        </div>

        <div className={css.simpanBtn}>
            <button>Simpan</button>
        </div>
      </div>
    </div>
  );
};

export default TambahMenu;
