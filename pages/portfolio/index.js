import PageTitle from 'components/PageTitle'
import SectionContactUs from 'components/ContactUs'
import Head from 'components/head'
import SectionWorks from 'components/Portfolio/ui/Works'

const Portfolio = ({ metaData, brandInfo, externalTracks }) => (
  <div className="page page-portfolio">
    <Head
      {...metaData}
      noindex={true}
      brandInfo={brandInfo}
      externalTracks={externalTracks}
    />
    <div className="page__header">
      <PageTitle className="page__title">
        <h1>PORTFOLIO</h1>
      </PageTitle>
      <h3 className="page__description">
        A selection of projects we have done recently
      </h3>
    </div>
    <SectionWorks className="page-portfolio__works page-box container" />
    <div className="container-fluid">
      <SectionContactUs className="page-portfolio__contact-us page-box">
        <h2 className="page-box__title">LET’S KEEP IN TOUCH!</h2>
      </SectionContactUs>
    </div>
  </div>
)

import InitialDataLoader from 'lib/InitialDataLoader'

export async function getStaticProps(_) {
  const data = await InitialDataLoader()
  return {
    revalidate: 3600, // revalidate every one hour
    props: {
      ...data,
    },
  }
}

export default Portfolio
