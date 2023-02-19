import React from "react";
import css from "./Testimonial.module.css";
import Hero from "../assets/testimonialHero.png";
import {Swiper} from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { TestimonialsData } from "../data/testimonials";

const Testimonial = () => {
  return (
    <div className={css.whole}> 
      <div className={css.testimonial}>
        <div className={css.wrapper}>
          <span>Top Rated</span>
          <span>
            You won't get anywhere, this quality in these prices, so grab it
          </span>
        </div>

        <img src={Hero} alt="" />

        <div className={css.container}>
          <span>100k</span>
          <span>Happy Customer with Us</span>
        </div>
      </div>

      {/* ****************** Review ******************* */}
    <div className={css.reviews}>Reviews</div>
      <div className={css.carousal}>
        <Swiper
        slidesPerView={3}
        slidesPerGroup={1}
        spaceBetween={20}
        loop={true}
        className={css.tCarousel}
        breakpoints={{
          1024:{
            slidesPerView:3
          },
          856:{
            slidesPerView:3
          },
          640:{
            slidesPerView:2
          },
          8:{
            slidesPerView:1
          }
        }}>
          {TestimonialsData.map((testimonial, i) => (
            <SwiperSlide>
                <div className={css.testimonials}>
                    <img src={testimonial.image} alt="" />
                    <span className={css.comment}>{testimonial.comment}</span>
                    <hr />
                    <span className={css.name}>{testimonial.name}</span>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
