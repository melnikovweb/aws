import Link from 'next/link'

const SwitherHeaderContent = ({ description, subDescription, joinLink }) => {
  const joinClick = e => {
    e.preventDefault()
    const headerHeight = document.querySelector('header').clientHeight
    window.scrollTo({
      top: document.querySelector(e.target.hash).offsetTop - headerHeight,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <div className="page-referral-switcher__header-desc">{description}</div>
      <div className="page-referral-switcher__header-sub-desc">
        {subDescription}
      </div>
      <div className="page-referral__buttons">
        <Link href={`/#${joinLink.to}`}>
          <a className="button button--big" onClick={joinClick}>
            {joinLink.title}
          </a>
        </Link>
        <Link href="/">
          <a className="button button--big button--orange">
            Download Presentation
          </a>
        </Link>
      </div>
    </>
  )
}

export default SwitherHeaderContent
