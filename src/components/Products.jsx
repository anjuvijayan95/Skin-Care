import React, { useState } from "react";
import css from "./Products.module.css";
import Plane from "../assets/plane.png";
import { ProductsData } from "../data/products";
import { useAutoAnimate } from '@formkit/auto-animate/react'
const Products = () => {
    
    const [animationParent]=useAutoAnimate()
  const [MenuProducts, setMenuProducts] = useState(ProductsData);
  const filter =(type)=>{
    setMenuProducts(ProductsData.filter((product)=>product.type===type))
  }
  return (
    <div className={css.container}>
      <img src={Plane} alt="" />
      <h1>Our Feature Products</h1>

      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={()=>setMenuProducts(ProductsData)}>All</li>
          <li onClick={()=>filter("skin care")}>Skin Care</li>
          <li onClick={()=>filter("conditioner")}>Conditioners</li>
          <li onClick={()=>filter("foundation")}>Foundations</li>
          <img src={Plane} alt="" />

        </ul>

        <div className={css.list} ref={animationParent}>
          {MenuProducts.map((pro,i) => (
            <div className={css.product}>
              <div className="left-s">
                <div className="name">
                  <span>{pro.name}</span>
                  <span>{pro.detail}</span>
                </div>
                <span>{pro.price}$</span>
                <div>Shop Now</div>
              </div>
              <img src={pro.img} alt="products" className="img-p" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
