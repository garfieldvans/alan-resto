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
          <p>Tambahkan Menu</p>
        </div>
        <div className={css.form}>
          <p>Name Menu</p>
          <input type="text" className={css.inputNama} />

          <p>Gambar</p>

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

          <p>Harga</p>
          <div className={css.harga}>
            <p>Rp.</p>
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TambahMenu;
