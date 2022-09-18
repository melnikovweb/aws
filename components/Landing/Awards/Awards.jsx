import styles from "./Awards.module.less";
import {
  GooglePartner,
  GoodFirms,
  UpWork,
  IsoCompany,
  Clutch,
  Amazon,
} from "components/Icons";

const Awards = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Awards & Recognition</h2>
      <div className={styles.container}>
        <Amazon className={styles.container__icon} />
        <Clutch className={styles.container__icon} />
        <IsoCompany className={styles.container__icon} />
        <UpWork className={styles.container__icon} />
        <GoodFirms className={styles.container__icon} />
        <GooglePartner className={styles.container__icon} />
      </div>
    </section>
  );
};
export default Awards;
