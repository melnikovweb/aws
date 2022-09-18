import { useMediaQuery } from 'react-responsive'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

import ContactUsBanner from 'components/ContactUs/ui/Banner'
import ContactUsForm from 'components/ContactUs/ui/Form'
import Head from 'components/head'
import SectionWorks from 'components/Portfolio/ui/Works'
import Report from 'components/Work/ui/Report'
import ResultStatisticsItem from 'components/Work/ui/ResultStatisticsItem'
import ReviewItem from 'components/Work/ui/ReviewItem'

import Smartphone from 'components/Icons/Smartphone'
import DoneList from 'components/Icons/DoneList'
import WindowChecked from 'components/Icons/WindowChecked'
import Graphic from 'components/Icons/Graphic'
import Feedback from 'components/Icons/Feedback'
import People from 'components/Icons/People'
import StarBubble from 'components/Icons/StarBubble'
import Duration from 'components/Icons/Duration'
import Bearing from 'components/Icons/Bearing'
import Section from 'components/Section'
import Expert from 'components/Expert'

import list from 'datastore/Portfolio_WorksList'

const Work = ({ metaData, brandInfo, externalTracks }) => {
  const router = useRouter()
  const { name } = router.query

  const work = list.filter(({ id }) => id === name)[0]

  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1100px)' })

  return (
    <div className="page page-work">
      <Head
        {...metaData}
        brandInfo={brandInfo}
        externalTracks={externalTracks}
        noindex
      />
      <div className="page-work__top-cover">
        <Image src={work?.topImg} alt="" layout="fill" />
      </div>
      <div className="page__content page-work__content container">
        <div className="page-work__title-block">
          <div className="page-work__title">{work?.title}</div>
          <div className="page-work__title-description-1">
            {work?.titleDescription_1}
          </div>
          <div className="page-work__title-description-2">
            {work?.titleDescription_2}
          </div>
        </div>
        <Section
          className="page-work__spec"
          title={work?.sections.spec.title}
          icon={() => <Smartphone width="62" height="62" fill="#0069FF" />}
          coverSection={true}
        >
          <div className="page-work__spec-items">
            {work?.spec_items.map((spec, index) => (
              <div className="page-work__spec-item" key={`spec-item-${index}`}>
                <div className="page-work__spec-item-title">{spec.title}</div>
                <div className="page-work__spec-item-body">{spec.desc}</div>
                <div className="page-work__spec-item-footer">
                  <span>{spec.footer_value}</span>
                  <span>{spec.footer_label}</span>
                </div>
              </div>
            ))}
          </div>
        </Section>
        <Section
          description={work?.sections.about.desc}
          className="page-work__about"
          title={work?.sections.about.title}
          icon={() => <DoneList width="62" height="62" fill="#0069FF" />}
          coverSection={true}
        >
          <div className="page-work__about-items">
            <div className="page-work__about-item">
              <div className="page-work__about-item-icon">
                <StarBubble fill="#0069FF" width="42" height="46" />
              </div>
              <div className="page-work__about-item-title">Industry</div>
              <div className="page-work__about-item-value">
                {work?.about_items.industry}
              </div>
            </div>
            <div className="page-work__about-item">
              <div className="page-work__about-item-icon">
                <People width={56} height={56} />
              </div>
              <div className="page-work__about-item-title">Team size</div>
              <div className="page-work__about-item-value">
                {work?.about_items.team_size}
              </div>
            </div>
            <div className="page-work__about-item">
              <div className="page-work__about-item-icon">
                <Duration width="43" height="43" />
              </div>
              <div className="page-work__about-item-title">Duration</div>
              <div className="page-work__about-item-value">
                {work?.about_items.duration}
              </div>
            </div>
            <div className="page-work__about-item">
              <div className="page-work__about-item-icon">
                <Bearing width="43" height="43" />
              </div>
              <div className="page-work__about-item-title">Tech Stack</div>
              <div className="page-work__about-item-value">
                {work?.about_items.tech_stack}
              </div>
            </div>
          </div>
        </Section>
        <div className="page-work__ui cover-section section-box">
          <div className="page-work__ui-info cover-section-box">
            <div className="page-work__ui-info-col">
              <div className="page-box__sub-title-icon-text">01</div>
              <div className="page-work__ui-info-title">UX-research</div>
              <div className="page-work__ui-info-body">{work?.ui_items[0]}</div>
            </div>
            <div className="page-work__ui-info-col">
              <div className="page-box__sub-title-icon-text">02</div>
              <div className="page-work__ui-info-title">UI-system</div>
              <div className="page-work__ui-info-body">{work?.ui_items[1]}</div>
            </div>
          </div>
          <div className="page-work__ui-colors cover-section-box">
            <div className="page-work__ui-title-2">Colors</div>
            <div className="page-work__ui-colors-columns">
              <div className="page-work__ui-colors-col">
                <div className="page-work__ui-title-3">Primary</div>
                <div className="page-work__ui-colors-items">
                  {work?.colors.primary.map((color, index) => (
                    <div
                      className="page-work__ui-colors-item"
                      style={{ background: color }}
                      key={'work-colors-primary-' + index}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="page-work__ui-colors-col">
                <div className="page-work__ui-title-3">Secondary</div>
                <div className="page-work__ui-colors-items">
                  {work?.colors.secondary.map((color, index) => (
                    <div
                      className="page-work__ui-colors-item"
                      style={{ background: color }}
                      key={'work-colors-secondary-' + index}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="page-work__ui-icons cover-section-box">
            <div className="page-work__ui-title-2">Iconography</div>
            <div className="page-work__ui-icons-columns">
              <div className="page-work__ui-icons-col">
                <div className="page-work__ui-title-3">Monochrome</div>
                <div className="page-work__ui-icons-items">
                  {work?.icons.mono.map((item, index) => (
                    <div
                      className="page-work__ui-icons-item"
                      key={'work-icons-mono-' + index}
                    >
                      <div className="page-work__ui-icons-wrap-icon">
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={''}
                          height={''}
                          layout="responsive"
                        />
                      </div>
                      <div className="page-work__ui-icons-item-title">
                        {item.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="page-work__ui-icons-col">
                <div className="page-work__ui-title-3">Colors</div>
                <div className="page-work__ui-icons-items">
                  {work?.icons.color.map((item, index) => (
                    <div
                      className="page-work__ui-icons-item"
                      key={'work-icons-color-' + index}
                    >
                      <div className="page-work__ui-icons-wrap-icon">
                        <Image
                          width={''}
                          height={''}
                          layout="responsive"
                          src={item.icon}
                          alt={item.title}
                        />
                      </div>
                      <div className="page-work__ui-icons-item-title">
                        {item.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="page-work__ui-buttons">
            <div className="page-work__ui-title-2">Buttons</div>
            <div className="page-work__ui-buttons-columns">
              <div className="page-work__ui-buttons-col">
                {work?.buttons.default.map((btn, index) => (
                  <div
                    className={
                      'page-work__ui-button page-work__ui-button-' + index
                    }
                    key={'work-buttons-default-' + index}
                  >
                    <Image src={btn} layout="fill" />
                  </div>
                ))}

                {/* <span className="button-black">Default</span>
                <span className="button-grey">Default</span>
                <span className="button-arrow"><Arrow color="white"/></span>
                <span className="button-chat"><ChatMini /></span>
                <span className="button-phone"><Phone /></span>*/}
              </div>
              <div className="page-work__ui-buttons-col">
                {work?.buttons.active.map((btn, index) => (
                  <span
                    className={
                      'page-work__ui-button page-work__ui-button-' + index
                    }
                    key={'work-buttons-active-' + index}
                  >
                    <Image layout="fill" src={btn} />
                  </span>
                ))}

                {/* <span className="button-black pressed">Pressed</span>
                <span className="button-grey pressed">Selected</span>
                <span className="button-arrow pressed"><Arrow color="black"/></span>
                <span className="button-chat pressed"><ChatMini /></span>
                <span className="button-phone pressed"><Phone /></span>*/}
              </div>
            </div>
          </div>
        </div>
        <div className="page-work__wareframes section-box">
          <div className="page-box__sub-title-icon-text">03</div>
          <div className="page-work__wareframes-main">
            <div className="page-work__header-section">
              <div className="page-work__header-section-title">Wireframes</div>
              <div className="page-work__header-section-body">
                The main goal of our team is to provide you a top IT product for
                your business. Each development stage is aimed at realizing your
                desires and guaranteeing the implementation is truly high-tech
                and user-friendly.
              </div>
            </div>
            <div className="page-work__wireframe-img">
              {isBigScreen && (
                <Image
                  src={work?.wireframe}
                  alt=""
                  layout="responsive"
                  width={965}
                  height={800}
                />
              )}
              {!isBigScreen && (
                <Image
                  src={work?.wireframeMobile}
                  alt=""
                  layout="responsive"
                  width={'375'}
                  height={'900'}
                />
              )}
            </div>
          </div>
          {work?.screens.map((item, index) => (
            <div
              className="page-work__screens"
              key={'page-work-screens' + index}
            >
              <div className="page-work__header-section-row">
                <div className="page-work__header-section-row-title">
                  {item.title}
                </div>
                <div className="page-work__header-section-row-body">
                  {item.description}
                </div>
              </div>
              <div className="page-work__screens-items">
                {item.imgs.map((link, i) => (
                  <div
                    className="page-work__screens-item"
                    key={'page-work-screens' + index + '-img-' + i}
                  >
                    <Image layout="fill" src={link} alt="" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="page-work__pages section-box">
          <div className="page-box__sub-title-icon-text">04</div>
          <div className="page-work__header-section-title">Main pages</div>
          {work?.mainPages.map((item, index) => (
            <div className="page-work__screens" key={'page-work-pages' + index}>
              <div className="page-work__header-section-row">
                <div className="page-work__header-section-row-title">
                  {item.title}
                </div>
                <div className="page-work__header-section-row-body">
                  {item.description}
                </div>
              </div>
              <div className="page-work__screens-items">
                {item.imgs.map((link, i) => (
                  <div
                    className="page-work__screens-item"
                    key={'page-work-pages' + index + '-img-' + i}
                  >
                    <Image layout="fill" src={link} alt="" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Section
          description={work?.sections.report.desc}
          className="page-work__report"
          title={work?.sections.report.title}
          icon={() => <WindowChecked width="62" height="62" />}
          coverSection={true}
        >
          <div className="page-work__report-items">
            {work?.reports.map((report, i) => (
              <Report items={report} key={'work-report-' + i} />
            ))}
          </div>
        </Section>
        <Section
          description={work?.sections.team.desc}
          className="page-work__team"
          title={work?.sections.team.title}
          icon={() => <People width={80} height={60} />}
          coverSection={true}
        >
          <div className="page-work__team-items">
            {work?.teams.map((team, i) => (
              <Expert items={team} key={'work-team-' + i} />
            ))}
          </div>
          <div className="page-work__team-summary">
            <button className="page-work__team-summary__request-button button button--big">
              Request specialists
            </button>
            <div className="page-work__team-summary__more-button button button--empty">
              Show more
            </div>
          </div>
        </Section>
        <Section
          description={work?.sections.statistics.desc}
          className="page-work__result-statistics"
          title={work?.sections.statistics.title}
          icon={() => <Graphic width="62" height="62" />}
          coverSection={true}
        >
          <div className="page-work__result-statistics-items">
            {work?.resultStatistics.diagram.map((data, i) => (
              <ResultStatisticsItem items={data} key={'work-result-' + i} />
            ))}
            <div className="result-statistics-item page-work__result-statistics-incubators">
              <div className="page-work__result-statistics-incubators-value">
                <People />
                {work?.resultStatistics.incubators}
              </div>
              <div className="page-work__result-statistics-incubators-label">
                Incubators accepted idea to final round
              </div>
            </div>
          </div>
        </Section>
        <Section
          description={work?.sections.feedback.desc}
          className="page-work__feedback"
          title={work?.sections.feedback.title}
          icon={() => <Feedback width="62" height="62" />}
          coverSection={true}
        >
          <ReviewItem feedback={work?.feedback} />
          <div className="page-work__feedback-more-button">
            <Link href="/">
              <a className="button button--empty">More references</a>
            </Link>
          </div>
        </Section>
        <Section
          description={work?.sections.portfolio.desc}
          className="page-work__portfolio"
          title={work?.sections.portfolio.title}
          icon={() => <People width="80" height="55" />}
          coverSection={true}
        >
          <SectionWorks className="page-portfolio__works" />
        </Section>
      </div>

      <div className="container-fluid">
        <div className="contact-us-box">
          <div className="page-portfolio__contact-us page-box  container">
            <h2 className="page-box__title">LET’S KEEP IN TOUCH!</h2>
            <ContactUsBanner />
            <ContactUsForm />
          </div>
        </div>
      </div>
    </div>
    /*
     <div className="page page-work">      
      <div className="page__header container">
        <PageTitle className="page__title">
          <h1>{work?.title}</h1>
        </PageTitle>
        <h3 className="page__description">{work?.description}</h3>
      </div>
      <div className="page__content container">
        <div className="page-content">
          <div className="page-content__item page-content__cover">
            <Image src={work?.cover} alt="" className="page-cover" />
          </div>
          {work?.body.map((text, index) => (
            <p className="page-content__item" key={'work-body-' + index}>
              {text}
            </p>
          ))}
        </div>
      </div>
      <div className="container-fluid">
        <SectionContactUs className="page-portfolio__contact-us page-box">
          <h2 className="page-box__title">
            HOW COME YOUR IDEA DOESN’T HAVE AN ONLINE PRESENCE YET?
            <br />
            <br />
            <div className="highlight">LET’S MAKE A CHANGE.</div>
          </h2>
        </SectionContactUs>
      </div>
    </div>
     */
  )
}

import InitialDataLoader from 'lib/InitialDataLoader'

export async function getStaticPaths() {
  return {
    paths: [{ params: { name: 'duochat' } }],
    fallback: false,
  }
}

export async function getStaticProps(_) {
  const data = await InitialDataLoader()
  return {
    revalidate: 3600, // revalidate every one hour
    props: {
      ...data,
    },
  }
}

export default Work
