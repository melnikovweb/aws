import styles from "./Successful.module.less";
const Successful = ({ onClose }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.content__title}>Thank you!</h2>
          <p className={styles.content__paragraph}>
            Your application has been <br /> successfully sent. <br /> Our
            manager will contact you <br /> shortly.
          </p>
          <button className={styles.content__btn} onClick={onClose}>
            Ok!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Successful;
