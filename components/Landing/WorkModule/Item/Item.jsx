import styles from "./Item.module.less";
import cn from "classnames";

const Item = ({ title, text, Icon, className, circleClass }) => {
  return (
    <div className={cn(styles.container, className)}>
      <div className={cn(styles.circle, circleClass)}>
        <div className={styles.circle__inner}>
          {Icon && <Icon className={styles.circle__inner__icon} />}
        </div>
      </div>
      <div className={styles.text}>
        <h3 className={styles.text__title}>{title}</h3>
        <p className={styles.text__paragraph}>{text}</p>
      </div>
    </div>
  );
};
export default Item;
