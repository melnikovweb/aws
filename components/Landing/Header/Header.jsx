import styles from "./Header.module.less";
import Logo from "components/Logo";

const Header = ({ onClick }) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Logo className={styles.header__content__logo} />
        <button className={styles.header__content__button} onClick={onClick}>
          Contact Us
        </button>
      </div>
    </header>
  );
};
export default Header;
