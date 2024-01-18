import React from 'react'
import { IoRestaurantOutline } from "react-icons/io5";
import css from './Header.module.scss'

const Header = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.logos}>
        <IoRestaurantOutline className={css.logo} size={25}/>
            <span className={css.restoName}>Alan Resto</span>
        </div>
      </div>
    </div>
  )
}

export default Header
