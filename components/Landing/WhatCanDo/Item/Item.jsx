import styles from "./Item.module.less";
import cn from "classnames";

const Item = ({ title, text, Icon, className }) => {
  return (
    <div className={cn(styles.container, className)}>
      <Icon className={styles.icon} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.paragraph}>{text}</p>
    </div>
  );
};
export default Item;
