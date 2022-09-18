import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import DevServices from 'components/Stack/ui/DevServices'
import Outsource from 'components/Stack/ui/Outsource'
import Tools from 'components/Stack/ui/Tools'
import Calculation from 'components/Stack/ui/Calculation'
import Experts from 'components/Stack/ui/Experts'
import Processes from 'components/Stack/ui/Processes'
import Clients from 'components/Stack/ui/Clients'
import Projects from 'components/Stack/ui/Projects'
import Contacts from 'components/Stack/ui/Contacts'

import PopupCalculation from 'components/Popup/StackCalculation'
import Head from 'components/head'
import SubNav from 'components/SubNav'
import PageTitle from 'components/PageTitle'
import ShieldIcon from 'components/Icons/Shield'

import dataList from 'datastore/Stack_dataList'
import expertsList from 'datastore/Stack_expertsList'
import stackDropDownList from 'datastore/Stack_dropDownMenu'

import outsourceList from 'datastore/Stack_outsourceList'
import toolsList from 'datastore/Stack_toolsList'
import processesList from 'datastore/Stack_processesList'

import subNavList from 'datastore/Stack_dropDownMenu'

const StackFrontEnd = ({ metaData, brandInfo, externalTracks }) => {
  const [isShowPopup, useIsShowPopup] = useState(false)
  const [dataPopup, setDataPopup] = useState({})
  const [currentTerm, setCurentTerm] = useState('')

  const resumePerPageDefault = 3
  const [resumePerPage, setResumePerPage] = useState(resumePerPageDefault)

  const router = useRouter()

  const { term } = router.query

  const getActualData = datastore => {
    return datastore[term[term.length - 1]]
      ? datastore[term[term.length - 1]]
      : datastore[term[term.length - 2]]
      ? datastore[term[term.length - 2]]
      : datastore['front-end']
  }

  const getActualExperts = datastore => {
    return term[1]
      ? datastore[term[0]][term[1]]
      : datastore[term[0]]
      ? Object.values(datastore[term[0]]).flat()
      : datastore['front-end']
  }

  const actualdata = getActualData(dataList)
  const actualdataExpert = getActualExperts(expertsList)
  const getActiveTerm = list => {
    return list.some(item => {
      if (item.route === router.asPath) {
        setCurentTerm(item.text)
        return true
      }
      if (item.dropList) return getActiveTerm(item.dropList)
    })
  }

  const handleShowMoreExperts = () => {
    setResumePerPage(resumePerPage + resumePerPageDefault)
  }

  useEffect(() => {
    setResumePerPage(resumePerPageDefault)
    !getActiveTerm(stackDropDownList) ? setCurentTerm(list[0].text) : null
  }, [router.asPath])

  return (
    <div className="page page-stack">
      <PopupCalculation
        data={dataPopup}
        term={currentTerm}
        isShown={isShowPopup}
        onClose={() => {
          useIsShowPopup(false)
        }}
      />
      <Head
        {...metaData}
        brandInfo={brandInfo}
        externalTracks={externalTracks}
        noindex
      />
      <SubNav className="page-stack__nav" list={subNavList} isSticky />

      <div className="page-stack__header page__header container">
        <PageTitle className="page__title">
          <h1>{`Work With Top ${currentTerm} Developers`}</h1>
        </PageTitle>
        <h3 className="page__description page-stack__description">
          kick-off your project within two weeks
        </h3>
        <button className="page-stack__request button button--big">
          Request Specialists
        </button>
      </div>

      <div className="page__content">
        <DevServices
          className="page-stack__ds"
          Icon={actualdata.Icon}
          title={`${currentTerm} development services`}
          list={actualdata.devServicesList.content}
          currentTerm={currentTerm}
        />

        <Outsource
          className="page-stack__outsource"
          title={`Outsource ${currentTerm} development in Ukraine`}
          description={`If you need top-notch ${currentTerm} developers right now, we are here to help. Receive resumes in no time, pick the best of the best, and our ${currentTerm} experts will start coding for you, and deliver your solution on time and within budget.`}
          list={outsourceList}
        />

        <Tools
          className="page-stack__tools"
          title={'Versatile tools we work with'}
          description={
            'We have vast experience in Front-end software development. Our Angular experts apply the most advanced technologies, frameworks, and components to build solutions that combine performance and intuitive design.'
          }
          list={toolsList}
        />

        <Calculation
          className="page-stack__calculation"
          title={'Know the real price of the project'}
          description={
            "Wonder how much your team of developers can cost? Well, don't look any further. Just specify the number of developers you need and get an estimated price of your project."
          }
          Icon={actualdata.Icon}
          list={actualdata.calculationList}
          handleCalculate={data => {
            setDataPopup(data)
            useIsShowPopup(true)
          }}
        />

        <Experts
          className="page-stack__experts"
          title={'Our engineers'}
          sescription={
            "Hire your Ukrainian development team today. Whether you're outsourcing a project, or filling a skills gap, check out some CVs!"
          }
          InfoIcon={ShieldIcon}
          infoDescription={
            'We assure quality that our specialists deliver, so we offer a 6-month warranty against critical or blocking bugs on anything our developers build for you.'
          }
          list={actualdataExpert}
          perPage={resumePerPage}
          handleShowMore={handleShowMoreExperts}
        />

        <Processes
          className="page-stack__processes"
          title={'Can You Ever Be 100% Confident in the quality of our code?'}
          description={
            'The answer is yes. We strive to provide high quality at every stage of development so that you get a product you can be proud of. Check out our processes.'
          }
          list={processesList}
        />

        <Clients
          className="page-stack__clients"
          title={'Our satisfied clients'}
          description={
            'We would like to thank all of our clients for leaving their review we really appreciate it! Here’s what they say about Binerals..'
          }
        />

        <Projects
          className="page-stack__projects"
          title={'Lasting partnerships'}
          description={'Latest projects'}
        />

        <Contacts />
      </div>
    </div>
  )
}

import InitialDataLoader from 'lib/InitialDataLoader'

export async function getStaticPaths() {
  return {
    paths: [
      { params: { term: ['front-end'] } },
      { params: { term: ['front-end', 'angular'] } },
      { params: { term: ['front-end', 'java-script'] } },
      { params: { term: ['front-end', 'react-js'] } },
      { params: { term: ['front-end', 'vue-js'] } },

      { params: { term: ['back-end'] } },
      { params: { term: ['back-end', 'java'] } },
      { params: { term: ['back-end', 'net'] } },
      { params: { term: ['back-end', 'php'] } },
      { params: { term: ['back-end', 'ruby'] } },
      { params: { term: ['back-end', 'node-js'] } },
      { params: { term: ['back-end', 'scala'] } },
      { params: { term: ['back-end', 'golang'] } },
      { params: { term: ['back-end', 'c-plus-plus'] } },

      { params: { term: ['mobile'] } },
      { params: { term: ['mobile', 'android'] } },
      { params: { term: ['mobile', 'ios'] } },

      { params: { term: ['content-management'] } },
    ],
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

export default StackFrontEnd
