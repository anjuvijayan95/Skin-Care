import React from "react";
import css from "./Footer.module.css";
import Logo from "../assets/logo.png";
import {
  InboxIcon,
  PhoneIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />
      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src="https://png.pngtree.com/png-vector/20220909/ourmid/pngtree-beauty-logo-png-image_6130081.png" alt="" />
          <span>Its Beauty</span>
        </div>
<div className={css.whole}>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact Us</span>
            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>111 north avenue Orlando,FL 32801</span>
            </span>

            <span className={css.pngLine}>
              <PhoneIcon className={css.icon} />
              <span>352-306-4453</span>
            </span>

            <span className={css.pngLine}>
              <InboxIcon className={css.icon} />
              <span>support@itsbeauty.com</span>
            </span>
          </div>
        </div>

        <div className={css.block}>
        <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              <LoginIcon className={css.icon} />
              <span>SignIn</span>
            </span>
            </div>
        </div>

        <div className={css.block}>
        <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <UsersIcon className={css.icon} />
              <span>About Us</span>
            </span>
            </div>
        </div>

        <div className={css.block}>
        <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngLine}>
              <LinkIcon className={css.icon} />
              <span>Saftey Privacy & Terms</span>
            </span>
            </div>
        </div>

      </div>
</div>  
      <div className={css.copyRight}>
        <span>Copyright @2023 by gulu's website, Inc</span>
        <span>All right reserved</span>
      </div>
    
    </div>
  );
};

export default Footer;
