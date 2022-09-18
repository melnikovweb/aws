import Link from 'next/link'
import classnames from 'classnames'
import listSpecialUrl from 'datastore/Glossary_SpecialUrlList'

const LetterSection = ({ className, letter, words }) => {
  const getWordUrl = word => {
    for (let url in listSpecialUrl) {
      if (listSpecialUrl[url] === word) return url
    }

    return word
      .replace(/\s+/gi, '-')
      .replace(/[^0-9a-z-]/gi, '')
      .toLowerCase()
  }

  return (
    <section className={classnames(className, 'glossary-letter')}>
      {letter && <h2 className="glossary-letter__title">{letter}</h2>}
      <div className="glossary-letter__words">
        {!words.length && <p>Unfortunately nothing was found.</p>}
        {words.length
          ? words.map(({ value, description }, index) => (
              <div className="glossary-letter__word" key={`word-${index}`}>
                <h3 className="glossary-letter__word-title">
                  <Link href={`/glossary/${getWordUrl(value)}`}>
                    <a>{value}</a>
                  </Link>
                </h3>
                <div className="glossary-letter__word-description">
                  {description}
                </div>
              </div>
            ))
          : null}
      </div>
    </section>
  )
}

export default LetterSection
