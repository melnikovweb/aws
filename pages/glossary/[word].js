import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import PageTitle from 'components/PageTitle'
import LetterSection from 'components/Glossary/ui/LetterSection'
import SectionContactUs from 'components/ContactUs'
import NotFound from 'pages/404'

import list from 'datastore/Glossary_WorldList'
import listSpecialUrl from 'datastore/Glossary_SpecialUrlList'

const GlossaryWord = () => {
  const router = useRouter()
  let word = router.query.word
  word = listSpecialUrl[word] ? listSpecialUrl[word] : word

  const [notFound, setNotFound] = useState(false)
  const [stateContent, setStateContent] = useState('')
  const [stateTitle, setStateTitle] = useState(word)

  const searchContent = word => {
    const resultList = list.find(item => {
      return (
        item.value.replace(/-/gi, ' ').toLowerCase() ===
          word.replace(/-/gi, ' ').toLowerCase() ||
        item.value
          .replace(/[^0-9a-z-]/gi, '')
          .replace(/-/gi, ' ')
          .toLowerCase() === word.replace(/-/gi, ' ').toLowerCase()
      )
    })

    if (resultList) {
      setNotFound(false)
      setStateTitle(resultList.value)
      setStateContent(
        <LetterSection
          className="glossary-letter-simple"
          words={[resultList]}
        />,
      )
    } else {
      setNotFound(true)
    }
  }

  useEffect(() => {
    word ? searchContent(word) : null
  }, [word])

  return !notFound ? (
    <div className="page page-glossary">
      <div className="page__header container">
        <PageTitle className="page__title">
          <h1>{stateTitle}</h1>
        </PageTitle>

        <h3 className="page__description">
          Binerals Team prepared for you complete vocabulary of programmers
          slang and software development words you need to know when
          talking/working with the outsourcing company. This dictionary of
          Information technology Terms provides a brief and simple definition of
          the key IT terminology, acronyms, and technical words most often used
          among developers and managers in the IT Industry.
        </h3>
      </div>
      <div className="page__content container">{stateContent}</div>
      <div className="page__footer container">
        We know that our glossary misses many additional terminologies. That's
        because Information and Communication Technologies is a broad and
        fast-growing field; nevertheless, we have covered the most recent and
        frequently used IT terms. With this vocabulary help, you and your
        software development partner should always be on the same page when you
        hear words like: built with React, Flutter, Cross-Platform Apps, and so
        on. You can't get far if you're not up on the lingo, and in the
        worst-case scenario, you might end up losing money.
      </div>
      <div className="container-fluid container-fluid-dark">
        <SectionContactUs className="page-glossary__contact-us page-box">
          <h2 className="page-box__title">
            LET’S KEEP IN TOUCH!
            <br />
          </h2>
        </SectionContactUs>
      </div>
    </div>
  ) : (
    <NotFound />
  )
}

export default GlossaryWord
