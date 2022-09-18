import styles from "./Item.module.less";

const Item = ({ text, title, location, job }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h4 className={styles.container__title}>{title}</h4>
        <p className={styles.container__paragraph}>{location}</p>
        <p className={styles.container__paragraph}>{job}</p>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
export default Item;
