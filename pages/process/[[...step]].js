import { useCallback, useState } from 'react'
import { useRouter } from 'next/router'

import Head from 'components/head'
import Tabs from 'components/Tabs'
import Articles from 'components/Articles'

import PageTitle from 'components/PageTitle'

import processList from 'datastore/Process_ProcessList'
import articlesList from 'datastore/Process_ArticlesList'

const parseUrlParams = (step, list) => {
  const index = list.findIndex(data => data.path === step)
  return index !== -1 ? index : 0
}

const Process = ({ metaData, brandInfo, externalTracks }) => {
  const router = useRouter()
  const { step } = router.query
  const [activeProcess, setActiveProcess] = useState(
    Array.isArray(step) ? parseUrlParams(step[0], processList) : 0,
  )

  const handleTabChange = useCallback(
    activeTab => {
      setActiveProcess(activeTab)
      const href = `/process/${processList[activeTab].path}`
      router.push(href, href, { shallow: true })
    },
    [activeProcess],
  )

  const ContentComponent = processList[activeProcess].ContentComponent

  return (
    <div className="page page-process">
      <Head
        {...metaData}
        brandInfo={brandInfo}
        externalTracks={externalTracks}
      />
      <PageTitle className="page__title">
        <h1>Scope of work (sow)</h1>
      </PageTitle>
      <Tabs
        className="page-process__tabs"
        list={processList}
        handleTabChange={handleTabChange}
        currentTab={activeProcess}
        isNavSticky
      />
      <ContentComponent data={processList[activeProcess]} />
      <Articles
        title={'Our Articles'}
        hasAction
        actionText={'Read More'}
        list={articlesList}
        isHidden
      />
      <Tabs
        className="page-process__tabs"
        list={processList}
        handleTabChange={handleTabChange}
        currentTab={activeProcess}
        isBottom
      />
    </div>
  )
}

import InitialDataLoader from 'lib/InitialDataLoader'

export async function getStaticPaths() {
  return {
    paths: [
      { params: { step: null } },
      { params: { step: ['idea'] } },
      { params: { step: ['design'] } },
      { params: { step: ['management'] } },
      { params: { step: ['growth'] } },
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

export default Process
