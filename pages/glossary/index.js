import { useState, useEffect } from 'react'
import { isMobile } from 'react-device-detect'

import Head from 'components/head'
import LetterSection from 'components/Glossary/ui/LetterSection'
import Alphabet from 'components/Glossary/ui/Alphabet'
import ResetButton from 'components/Glossary/ui/ResetButton'
import SearchForm from 'components/Glossary/ui/SearchForm'

import PageTitle from 'components/PageTitle'
import AddToBookmarksPopup from 'components/AddToBookmarksPopup'
import SectionContactUs from 'components/ContactUs'

import list from 'datastore/Glossary_WorldList'

const Glossary = ({ metaData }) => {
  const [stateContent, setStateContent] = useState('')
  const [stateLettersActive, setStateLettersActive] = useState([])
  const [stateSearch, setStateSearch] = useState('')

  const alfabetSort = list => {
    list.sort((a, b) => a.value.localeCompare(b.value))

    let data = list.reduce((r, e) => {
      let letter = e.value[0]

      if (!r[letter]) r[letter] = { letter, words: [e] }
      else r[letter].words.push(e)

      return r
    }, {})

    return Object.values(data)
  }
  const glossaryContent = () => {
    if (stateSearch) {
      const content = searchContent()
      setStateContent(content)
      return
    }
    if (stateLettersActive.length != 0) {
      const list = sortList.filter(item =>
        stateLettersActive.includes(item.letter),
      )
      const content = (
        <>
          <ResetButton resetOnClick={resetOnClick} />
          {list.map((item, i) => (
            <LetterSection
              key={`letter-section-${i}`}
              className="glossary-letter-simple"
              letter={item.letter}
              words={item.words}
            />
          ))}
        </>
      )
      setStateContent(content)
    } else {
      const content = sortList.map(({ letter, words }, index) => (
        <LetterSection
          letter={letter}
          words={words}
          key={`letter-section-${index}`}
        />
      ))
      setStateContent(content)
    }
  }

  const searchContent = () => {
    let regexp = new RegExp('\\b' + stateSearch.toLowerCase())
    const resultList = list.filter(item => {
      return regexp.test(item.value.toLowerCase())
    })

    return (
      <LetterSection className="glossary-letter-simple" words={resultList} />
    )
  }

  useEffect(() => {
    glossaryContent()
  }, [stateLettersActive, stateSearch])

  const onClickLetter = e => {
    setStateSearch('')

    const letterObj = e.target
    !stateLettersActive.includes(letterObj.innerText)
      ? setStateLettersActive([...stateLettersActive, letterObj.innerText])
      : setStateLettersActive(
          stateLettersActive.filter(letter => letter != letterObj.innerText),
        )
  }

  const resetOnClick = () => {
    setStateLettersActive([])
  }

  const onClickSearch = (e, text) => {
    e.preventDefault()

    setStateSearch(text)
    setStateLettersActive([])
  }
  const sortList = alfabetSort(list)

  return (
    <div className="page page-glossary">
      <Head
        {...metaData}
        noindex={true}
        metaTitle="It Terms & Slang - 1000+ Acronyms, Abbreviations, and Definitions."
        metaDescription="Binerals It Dictionary Has Most of the Computer Terms You Are Likely to Come Across, Along With a Description of Exactly What They Mean. Here You Will Find Key Software Development Acronyms, Abbreviations, and Jargon Explained. This Essential Info Will Help You to Avoid Confusion Between You and Your It Department."
      />
      <div>{!isMobile && <AddToBookmarksPopup />}</div>
      <div className="page__header container">
        <PageTitle className="page__title">
          <h1>IT Terms & Definitions</h1>
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
      <div className="page__content container">
        <Alphabet
          list={sortList}
          onClickLetter={onClickLetter}
          listActive={stateLettersActive}
        />
        <SearchForm onClickSearch={onClickSearch} searchValue={stateSearch} />
        <div className="glossary-content">{stateContent}</div>
      </div>
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
  )
}

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

export default Glossary
