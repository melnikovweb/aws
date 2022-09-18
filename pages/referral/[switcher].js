import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import HeaderParts from 'components/HeaderParts'
import Section from 'components/Section'
import SwitсhHeaderContent from 'components/Referral/ui/SwitсhHeaderContent'
import BecomeRefarral from 'components/Referral/ui/BecomeReferralForm'
import BecomeITSales from 'components/Referral/ui/BecomeITSales'
import BecomeAffiliate from 'components/Referral/ui/BecomeAffiliate'
import SectionPartnersAboutUs from 'components/Referral/ui/PartnersAboutUs'

import ReferralAppLayout from 'layouts/ReferralAppLayout'

import dataList from 'datastore/Referral_DataList'

const switchContentList = {
  1: {
    header: (
      <SwitсhHeaderContent
        description={
          'Know companies that are looking for a full-stack software development company?'
        }
        subDescription={
          'Earn money by inviting businesses to hire us for their IT project'
        }
        joinLink={{
          title: 'Join the Team',
          to: 'page-referral-main-content',
        }}
      />
    ),
    body: <BecomeITSales />,
    partners: <SectionPartnersAboutUs list={dataList.partnerList} />,
  },
  2: {
    header: (
      <SwitсhHeaderContent
        description={
          'Know companies or have users that might be interested in IT outsourcing services?'
        }
        subDescription={
          'Earn money by inviting businesses to hire our developers and marketers for their project'
        }
        joinLink={{
          title: 'Join Referral Program',
          to: 'page-referral-main-content',
        }}
      />
    ),
    body: <BecomeAffiliate />,
    partners: <SectionPartnersAboutUs list={dataList.partnerList2} />,
  },
}
const ReferralSwitcher = () => {
  const router = useRouter()
  const switcher = router.query.switcher

  const [stateSwitch, setStateSwitch] = useState(switcher)
  const [stateSwitchW, setStateSwitchW] = useState('')
  const [stateSwitchL, setStateSwitchL] = useState('')
  const switchStyle = {
    width: `${stateSwitchW}px`,
    left: `${stateSwitchL}px`,
  }

  stateSwitchL !== 0 ? (switchStyle.animation = 'none') : ''

  useEffect(() => {
    const handleSetDimentions = () => {
      const checked = document.querySelector(
        '.page-switcher input:checked + label',
      )
      if (checked) {
        setStateSwitchW(checked.scrollWidth)
        setStateSwitchL(checked.offsetLeft)
      }
    }
    handleSetDimentions()

    window.addEventListener('resize', handleSetDimentions)
    return () => {
      window.removeEventListener('resize', handleSetDimentions)
    }
  }, [])

  const handleChange = e => {
    setStateSwitch(e.target.value)
    setStateSwitchW(e.target.nextSibling.clientWidth)
    setStateSwitchL(e.target.nextSibling.offsetLeft)

    router.push(
      {
        query: { switcher: e.target.value },
      },
      undefined,
      { shallow: true },
    )
  }

  return (
    <div className="page page-referral-switcher">
      <HeaderParts
        leftImgUrl={'/static/referral/top-l-bg.png'}
        rightImgUrl={'/static/referral/top-r-bg.png'}
      >
        <div className="page-referral-switcher__header-content container">
          <div className="page-referral-switcher__header-title">
            Choose which program is best for you ?
          </div>
          <div className="page-switcher">
            <div className="page-switcher-item">
              <input
                type="radio"
                id="programType_left"
                name="programType"
                value={'1'}
                onChange={handleChange}
                checked={stateSwitch === '1' ? true : false}
              />
              <label htmlFor="programType_left">
                <span>{'Binerals Sales Rep'}</span>
              </label>
            </div>
            <span className="page-switcher-or">OR</span>
            <div className="page-switcher-item">
              <input
                type="radio"
                id="programType_right"
                name="programType"
                value={'2'}
                onChange={handleChange}
                checked={stateSwitch === '2' ? true : false}
              />
              <label htmlFor="programType_right">
                <span>{'Binerals Referral Program'}</span>
              </label>
            </div>
            <div className="page-switcher-element" style={switchStyle}></div>
          </div>
          {switchContentList[stateSwitch].header}
        </div>
      </HeaderParts>
      <div id="page-referral-main-content" className="page__content container">
        {switchContentList[stateSwitch].body}
        <Section
          className="page-box__center-style"
          title={'LET’S BECOME A REFERRAL'}
          description2={
            "Participation in Binerals' Referral Program is confidential. Terms outlined in the Referral Agreement and ensured by the NDA."
          }
        >
          <BecomeRefarral />
        </Section>
        {switchContentList[stateSwitch].partners}
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { switcher: '1' } }, { params: { switcher: '2' } }],
    fallback: false,
  }
}

import InitialDataLoader from 'lib/InitialDataLoader'

ReferralSwitcher.layout = ReferralAppLayout

export async function getStaticProps(_) {
  const data = await InitialDataLoader()
  return {
    revalidate: 3600, // revalidate every one hour
    props: {
      ...data,
    },
  }
}

export default ReferralSwitcher
