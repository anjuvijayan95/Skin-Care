import {React,  useState } from "react";
import css from "./Header.module.css";
// import Logo from "../assets/logo.png";
import {CgShoppingBag} from 'react-icons/cg'
import {GoThreeBars} from 'react-icons/go'

const Header = () => {

  const [showMenu,setShowMenu]=useState(true)

  const toggleMenu=()=>{
    setShowMenu(showMenu=>!showMenu)
  }

  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src="https://png.pngtree.com/png-vector/20220909/ourmid/pngtree-beauty-logo-png-image_6130081.png" />
        <span>Its Beauty</span>
      </div>

      <div className={css.right}>
        <div className={css.bars} onClick={toggleMenu}>
          <GoThreeBars/>
        </div>
            <ul className={css.menu} style={{display:showMenu? 'inherit':'none'}}>
                <li>Collections</li>
                <li>Brands</li>
                <li>New</li>
                <li>Sales</li>
                <li>ENG</li>
            </ul>
        <input type="text" placeholder="search" className={css.search} />
        <CgShoppingBag className={css.cart}  style={{display:showMenu? 'inherit':'none'}}/>
      </div>
    </div>
  );
};

export default Header;
