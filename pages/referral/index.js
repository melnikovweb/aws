import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import HeaderParts from 'components/HeaderParts'
import Section from 'components/Section'
import Accordion from 'components/Accordion'
import BannerPromo from 'components/BannerPromo'
import LocationIcon from 'components/Icons/Location'
import LinkedinRoundIcon from 'components/Icons/LinkedinRound'
import FireIcon from 'components/Icons/Fire'
import WorkIcon from 'components/Icons/Work'

import dataList from 'datastore/Referral_DataList'
import ReferralAppLayout from 'layouts/ReferralAppLayout'

import SectionPartnersAboutUs from 'components/Referral/ui/PartnersAboutUs'
import Report from 'components/Referral/ui/Report'
import PopupBecomePartner from 'components/Popup/ReferralBecomePartner'

const Referral = () => {
  const [isShowPopup, useIsShowPopup] = useState(false)

  return (
    <div className="page page-referral">
      <PopupBecomePartner
        isShown={isShowPopup}
        onClose={() => {
          useIsShowPopup(false)
        }}
      />
      <HeaderParts rightImgUrl={'/static/referral/top-r-bg.png'}>
        <div className="page-referral__header-content">
          <div className="page-referral__header-left container">
            <div className="page-referral__header-left-body">
              <h1>Binerals Referral Program</h1>
              <div className="page-referral__header-description">
                Earn money by inviting other businesses to Binerals!
              </div>
              <button
                className="page-referral__header-button button button--big"
                onClick={() => {
                  useIsShowPopup(true)
                }}
              >
                Join
              </button>
            </div>
          </div>
          <div className="page-referral__header-right">
            <div className="page-referral__header-right-body">
              <div className="page-referral__grey-box page-referral__header-box-1">
                <p>
                  Do{' '}
                  <span className="soft-text">
                    you know companies that are seeking
                  </span>{' '}
                  a full-stack software development company for outsourcing
                  their IT needs?
                </p>
              </div>
              <div className="page-referral__grey-box page-referral__header-box-2">
                <p>
                  <span className="soft-text">Let’s succeed together!</span>
                </p>
                <p className="description">
                  Join our client referral program, recommend Binerals IT
                  outsourcing and team augmentation services to startups or
                  businesses, and get rewarded for each new client!
                </p>
              </div>
            </div>
          </div>
        </div>
      </HeaderParts>
      <div className="page__content">
        {/* About us*/}
        <Section
          className="page-box__center-style container"
          title={'About us'}
          description={
            <>
              <b>
                Binerals is a trusted Full-cycle custom software development
                company
              </b>{' '}
              in Ukraine with deep expertise in Cross-Platform app developments.
            </>
          }
          description2={dataList.about.subDescription}
          coverSection={true}
        >
          <div className="page-referral__about-primary-boxes">
            {dataList.about.primaryBoxes.map(
              ({ icon, value, description }, index) => (
                <div
                  className="page-referral__about-primary-boxes-item"
                  key={`about-primary-box-${index}`}
                >
                  <div className="page-referral__about-primary-boxes-top">
                    <span className="page-referral__about-primary-boxes-icon">
                      {icon()}
                    </span>
                    <span className="page-referral__about-primary-boxes-value">
                      {value}
                    </span>
                  </div>
                  <div className="page-referral__about-primary-boxes-description">
                    {description}
                  </div>
                </div>
              ),
            )}
          </div>
          <div className="page-referral__about-secondary-boxes">
            {dataList.about.secondaryBoxes.map(
              ({ Icon, description }, index) => (
                <div
                  className="page-referral__about-secondary-boxes-item"
                  key={`about-secondary-box-${index}`}
                >
                  <span className="page-referral__about-secondary-boxes-icon">
                    <Icon />
                  </span>
                  <div className="page-referral__about-secondary-boxes-description">
                    {description}
                  </div>
                </div>
              ),
            )}
          </div>
        </Section>
        {/* Our advantages */}
        <Section
          className="page-box__center-style container"
          title={'Our advantages'}
        >
          <div className="page-referral__advantages-wrapper">
            <div className="page-referral__advantages-boxes">
              {dataList.advantages.map(
                ({ Icon, title, description }, index) => (
                  <div
                    className="page-referral__advantages-boxes-item"
                    key={`advantages-box-${index}`}
                  >
                    <span className="page-referral__advantages-boxes-icon">
                      <Icon />
                    </span>
                    <div className="page-referral__advantages-boxes-title">
                      {title}
                    </div>
                    <div className="page-referral__advantages-boxes-description">
                      {description}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </Section>
        {/* Company of experts */}
        <Section
          className="page-box__center-style"
          title={'Company of experts'}
          description={'We are a community, not just an office.'}
          // coverSection={true}
        >
          <div className="page-referral__expert-box cover-section container">
            <Report
              team={'30+'}
              expertLevel={'80%'}
              middleLevel={'20%'}
              juniorLevel={'0%'}
            />
          </div>
          <ul className="page-referral__expert-list container">
            <li className="page-referral__expert-list-item">
              Average level of English: <span>UPPER-INTERMEDIATE, B2</span>
            </li>
            <li className="page-referral__expert-list-item">
              <span>10%</span> Employee Turnover rate
            </li>
            <li className="page-referral__expert-list-item">
              All the developers are <span>OUR EMPLOYEES</span>
            </li>
          </ul>
        </Section>
        {/* Leadership */}
        <Section
          className="page-box__center-style container"
          title={'Leadership'}
        >
          <div className="page-referral__leadership-boxes">
            {dataList.leadership.experts.map(
              ({ photo, name, position, location }, index) => (
                <div
                  className="page-referral__leadership-boxes-item"
                  key={`leadership-box-${index}`}
                >
                  <div className="page-referral__leadership-boxes-photo">
                    <LinkedinRoundIcon className="page-referral__leadership-boxes-photo-icon" />
                    <Image
                      src={photo}
                      width="100"
                      height="100"
                      layout={'fixed'}
                    />
                  </div>
                  <div className="page-referral__leadership-boxes-info">
                    <div className="page-referral__leadership-boxes-name">
                      {name}
                    </div>
                    <div className="page-referral__leadership-boxes-position">
                      {position}
                    </div>
                    <div className="page-referral__leadership-boxes-location">
                      <LocationIcon className="page-referral__leadership-boxes-location-icon" />
                      <span>{location}</span>
                    </div>
                  </div>
                </div>
              ),
            )}
            {/* vacant*/}
            <div className="page-referral__leadership-boxes-vacant">
              {dataList.leadership.vacant.map(
                ({ title, position, location }, index) => (
                  <div
                    className="page-referral__leadership-boxes-item"
                    key={`leadership-vacant-box-${index}`}
                  >
                    <div className="page-referral__leadership-boxes-photo">
                      <FireIcon className="page-referral__leadership-boxes-photo-icon" />
                      <label
                        className="field-upload-photo-fire"
                        forhtml={`field-upload-photo-fire-${index}`}
                      >
                        <WorkIcon />
                        <input
                          className="field-upload-photo-fire-input"
                          id={`field-upload-photo-fire-${index}`}
                          type="file"
                        />
                      </label>
                    </div>
                    <div className="page-referral__leadership-boxes-info">
                      <div className="page-referral__leadership-boxes-title">
                        {title}
                      </div>
                      <button className="button button--mini page-referral__leadership-boxes-vacant-button">
                        APPLY
                      </button>

                      <div className="page-referral__leadership-boxes-position">
                        {position}
                      </div>
                      <div className="page-referral__leadership-boxes-location">
                        <LocationIcon className="page-referral__leadership-boxes-location-icon" />
                        <span>{location}</span>
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </Section>
        {/* Become our partner */}
        <div className="container">
          <BannerPromo
            className="page-referral__banner-promo"
            actionText="Sign Up"
            hasAction={true}
            fullBgImg={true}
            isTextLarge={true}
            hasActionIcon={false}
            handleAction={() => {
              useIsShowPopup(true)
            }}
          >
            Become our partner
          </BannerPromo>
        </div>
        {/* Common questions */}
        <Section
          className="page-box__center-style container"
          title={'Common questions'}
          description={
            <>
              Check out these answers to common questions or send us an
              email/chat message via the{' '}
              {
                <Link href="/">
                  <a className="link">Contact Form</a>
                </Link>
              }
            </>
          }
        >
          {<Accordion items={dataList.faqList} />}
        </Section>
        {/* Achievements & IT Awards */}
        <Section
          className="page-box__center-style container"
          title={'Achievements & IT Awards'}
          coverSection={true}
        >
          <div className="page-referral__awards">
            {dataList.awardsList.map(({ content, logo }, index) => (
              <div
                className="page-referral__awards-item"
                key={`awards-${index}`}
              >
                <div className="page-referral__awards-item-content">
                  {content}
                </div>
                <div className="page-referral__awards-item-logo">
                  <Image
                    src={logo}
                    layout={'fill'}
                    objectFit={'scale-down'}
                    className={'page-referral__awards-item-logo'}
                    objectPosition={'center right'}
                  />
                </div>
              </div>
            ))}
          </div>
        </Section>
        {/* Your projects will be in good company */}
        <Section
          className="page-box__center-style container"
          title={'Your projects will be in good company'}
        >
          <div className="page-referral__companies">
            {dataList.companyList.map((company, index) => (
              <div
                className="page-referral__companies-item"
                key={`company-${index}`}
              >
                <Image src={company} layout="fill" objectFit={'scale-down'} />
              </div>
            ))}
          </div>
        </Section>
        {/*Partners Anout Us*/}
        <SectionPartnersAboutUs list={dataList.partnerList} />
      </div>
    </div>
  )
}

Referral.layout = ReferralAppLayout

export default Referral
