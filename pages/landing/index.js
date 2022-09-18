import LandingLayout from "layouts/LandingLayout";
import { useRouter } from "next/router";
import Landing from "components/Landing";
import { useEffect } from "react";
import Head from "components/head";

const LandingPage = ({ metaData, brandInfo, externalTracks, referer }) => {
  const { query } = useRouter();
  useEffect(() => {
    if (referer) {
      localStorage.setItem("referer", referer);
    }
  }, [referer]);

  return (
    <>
      <Head
        {...metaData}
        metaTitle="Custom Software Development: IT Solutions That Drive Business Growth | Binerals.com"
        metaDescription="Binerals.com is an Offshore Software Development Company that provides IT executives and large organizations with expertise and skills on an outsource service and technical partnership basis"
        metaImage="Binerals -  Custom Software & Complex Website Solutions"
        brandInfo={brandInfo}
        externalTracks={externalTracks}
      />
      <Landing droutes={query} />
    </>
  );
};

import InitialDataLoader from "lib/InitialDataLoader";

export async function getServerSideProps(context) {
  const data = await InitialDataLoader();
  const referer = context.req.headers.referer;
  if (!referer) {
    return {
      props: {
        ...data,
      },
    };
  }
  return {
    props: {
      ...data,
      referer,
    },
  };
}

LandingPage.layout = LandingLayout;
export default LandingPage;
