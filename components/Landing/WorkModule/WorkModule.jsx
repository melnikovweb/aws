import styles from "./WorkModule.module.less";
import Item from "./Item";
import { Fly as FlyIcon, GetQuote, PhoneCheck } from "components/Icons";
import cn from "classnames";
import {
  Intuit,
  Viasat,
  DeepFraud,
  Globalpersonals,
  Mirasol,
} from "components/Icons";

const WorkModule = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>Work Module</h2>
        <div className={styles.block1}>
          <Item
            circleClass={styles.gradient_1}
            Icon={FlyIcon}
            title="Inquire"
            text="All you require is to send an inquiry,  and our representative will get back to you within 24 hours to discuss the details."
          />
          <div className={cn(styles.line, styles.line_first)}>
            <div className={styles.line__inner}></div>
            <div
              className={cn(
                styles.line__inner__arrow,
                styles.line__inner__arrow_first
              )}
            ></div>
          </div>
          <Item
            circleClass={styles.gradient_2}
            Icon={GetQuote}
            title="Get Quote"
            text="In line with your requirement, our expert will discuss details with our design and development teams and introduce project estimation to you."
          />
          <div className={cn(styles.line, styles.line_second)}>
            <div className={styles.line__inner}></div>
            <div
              className={cn(
                styles.line__inner__arrow,
                styles.line__inner__arrow_second
              )}
            ></div>
          </div>
          <Item
            circleClass={styles.gradient_3}
            Icon={PhoneCheck}
            title="Get Started"
            text="Once approved, our team will kickstart the proposed project in coordination with our analytics, design, and development teams."
          />
        </div>
        <div className={styles.block2}>
          <h2 className={styles.title}>
            A few of our customers from our happy <br /> 50+ clients list
          </h2>
          <div className={styles.block2__container}>
            <Mirasol className={styles.block2__container__logo} />
            <DeepFraud className={styles.block2__container__logo} />
            <Viasat className={styles.block2__container__logo} />
            <Intuit className={styles.block2__container__logo} />
            <Globalpersonals
              className={cn(
                styles.block2__container__logo,
                styles.block2__container__logo_high
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default WorkModule;
