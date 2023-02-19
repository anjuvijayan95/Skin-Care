import React from "react";
import css from "./Hero.module.css";
import HeroImg from "../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { duration: 3, type: "spring" };
  return (
    <div className={css.container}>
      {/* LEFT SIDE PORSION*/}

      <div className={css.h_sides}>
        <span className={css.text1}>Skin Protection Cream</span>

        <div className={css.text2}>
          <span>Trendy Collections</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          </span>
        </div>
      </div>

      {/* MIDDLE PORSTION */}

      <div className={css.wrapper}>
        <motion.div
          initial={{ bottom: "2rem" }}
          whileInView={{ bottom: "0rem" }}
          transition={transition}
          className={css.blueCircle}
        ></motion.div>
        <motion.img
          initial={{ bottom: "-2rem" }}
          whileInView={{ bottom: "0rem" }}
          transition={transition}
          src={HeroImg}
          alt=""
          width="600"
        />
        <motion.div
          initial={{ right: "-20%" }}
          whileInView={{ right: "-17%" }}
          transition={transition}
          className={css.cart2}
        >
          <RiShoppingBagFill />

          <div className={css.signup}>
            <span>Best Signup Offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
      </div>

      {/* RIGHT SIDE PORSION */}

      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>1.5m</span>
          <span>Monthly Traffic</span>
        </div>

        <div className={css.customer}>
          <span>100k</span>
          <span>Happy Customer</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
