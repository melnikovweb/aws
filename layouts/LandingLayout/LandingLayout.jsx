import styles from "./LandingLayout.module.less";

const LandingLayout = ({ children }) => {
  return <div className={styles.landing}>{children}</div>;
};
export default LandingLayout;
