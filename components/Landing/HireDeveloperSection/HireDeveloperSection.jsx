import styles from "./HireDeveloperSection.module.less";
import Form from "./Form";

const HireDeveloperSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.containerOne}>
          <h1 className={styles.title}>
            Hire Best Software <br /> Developer for Your Project
          </h1>
          <p className={styles.paragraph}>
            We specialize in design and custom software development to build
            products that fascinate users and grow your business.
          </p>
          <h4 className={styles.titleTwo}>Why Choose Binerals?</h4>
          <ul className={styles.list}>
            <li className={styles.list__item}>
              We are a high-quality go-to team for all of your custom web
              application development needs at less than half the cost you would
              pay a full-time employee.
            </li>
            <li className={styles.list__item}>
              One of our strongest assets is our significant business background
              and experience. We are both tech experts and business people at
              our core.
            </li>
            <li className={styles.list__item}>
              Binerals is one of UA’s respected leaders among custom software
              development companies, specializing in enterprise applications on
              the AWS Platform.
            </li>
            <li className={styles.list__item}>
              We are principally dedicated to custom software development and
              integration for the AWS
            </li>
            <li className={styles.list__item}>
              We have successfully provided our services to leading companies
              and global giants.
            </li>
          </ul>
        </div>
        <div className={styles.containerTwo}>
          <Form />
        </div>
      </div>
    </section>
  );
};
export default HireDeveloperSection;
