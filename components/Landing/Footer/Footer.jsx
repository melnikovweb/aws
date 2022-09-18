import styles from "./Footer.module.less";
import Logo from "components/Logo";
import FacebookIcon from "components/Icons/Fb";
import LinkedInIcon from "components/Icons/LinkedIn";
import InstaIcon from "components/Icons/Insta";
import { useEffect, useState } from "react";
import Link from "next/link";

const Footer = ({ droutes }) => {
  const [linkParams, setLinkParams] = useState("");

  const urlParamsToString = (params) => {
    const paramString = new URLSearchParams(params).toString();
    return `?${paramString}`;
  };

  const filterParams = (params) => {
    let filteredParams = {};
    const utmParams = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
      "lp",
    ];
    for (let param in params) {
      if (utmParams.includes(param)) {
        filteredParams[param] = params[param];
      }
    }
    return filteredParams;
  };

  useEffect(() => {
    if (Object.entries(droutes).length > 0) {
      setLinkParams(urlParamsToString(filterParams(droutes)));
    }
  }, [droutes]);
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.container}>
          <Logo className={styles.container__image} />
          <p className={styles.container__text}>
            © Binerals - 2022. All Rights Reserved.
          </p>
        </div>
        <div className={styles.links}>
          <a
            target="_blank"
            href="https://www.facebook.com/binerals/"
            className={styles.links__link}
          >
            <FacebookIcon className={styles.links__link__icon} />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/binerals/"
            className={styles.links__link}
          >
            <InstaIcon className={styles.links__link__icon} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/binerals/mycompany/"
            className={styles.links__link}
          >
            <LinkedInIcon className={styles.links__link__icon} />
          </a>
        </div>
        <div className={styles.button_wrap}>
          <Link href={`/${linkParams}`}>
            <a className={styles.button_wrap__button}>Corporate Site</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
