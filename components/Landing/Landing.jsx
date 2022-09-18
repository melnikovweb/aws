import styles from "./Landing.module.less";

import dynamic from "next/dynamic";
const Popup = dynamic(() => import("./Popup"));
const Successful = dynamic(() => import("./Successful"));

import HireDeveloperSection from "./HireDeveloperSection";
import WorkModule from "./WorkModule";
import Clients from "./Clients";
import Awards from "./Awards";
import WhatCanDo from "./WhatCanDo";
import FreeQuote from "./FreeQuote";
import Header from "./Header";
import Footer from "./Footer";

import { useState, useEffect, memo } from "react";
import { useRouter } from "next/router";

const Content = memo(() => {
  return (
    <div className={styles.content}>
      <HireDeveloperSection />
      <WorkModule />
      <Clients />
      <Awards />
      <WhatCanDo />
      <FreeQuote />
    </div>
  );
});

const Landing = () => {
  const router = useRouter();

  const [show, setShow] = useState();
  const [success, setSuccess] = useState(false);

  const handleClosePopup = () => setShow(false);
  const handleOpenPopup = () => setShow(true);
  const handleCloseSuccess = () => setSuccess(false);
  const handleOpenSuccess = () => setSuccess(true);

  useEffect(() => {
    if (router.asPath !== router.route) {
      const { p } = router.query;
      if (p == "1") handleOpenPopup();
    }
  }, [router]);

  return (
    <>
      <Header onClick={handleOpenPopup} />
      <Content />
      {show && (
        <Popup onClose={handleClosePopup} openSuccess={handleOpenSuccess} />
      )}
      {success && <Successful onClose={handleCloseSuccess} />}
      <Footer droutes={router.query} />
    </>
  );
};
export default Landing;
