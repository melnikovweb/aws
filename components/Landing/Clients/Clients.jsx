import styles from "./Clients.module.less";
import Item from "./Item";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.less";
import { NoSsr } from "@material-ui/core";

const Clients = () => {
  const swiperSettings = {
    slidesPerView: 3,
    spaceBetween: 60,
    centeredSlides: true,
    initialSlide: 1,
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      1252: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <NoSsr>
      <section className={styles.section}>
        <h2 className={styles.title}>Client Testimonials</h2>
        <Swiper className={styles.swiper} {...swiperSettings}>
          <SwiperSlide>
            <Item
              title="Michael Moskalev"
              location="CIO,	Ukraine"
              job="Social Network MVP Dev for Transportation Investment Company"
              text="The team understands our ideas at a glance and helps describe and implement them exactly as we imagined it."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              title="Fabian Jansen"
              location="CEO,	Spain"
              job="Dating Platform for Advertising Performance Agency"
              text="Communication was good. They kept me posted about all the steps and were very helpful."
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              title="Lisa Moskotova"
              location="CMO,	Malta"
              job="Custom software development services"
              text="Igor was very good in terms of responsiveness with a really great developer at hand."
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </NoSsr>
  );
};
export default Clients;
