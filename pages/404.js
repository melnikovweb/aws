import Link from 'next/link'

import ArrowControlIcon from 'components/Icons/ArrowControl'

const NoMatch = _ => (
  <div className="page page-no-match">
    <div className="page-no-match__cover page-no-match-cover">
      <ArrowControlIcon className="page-no-match-cover__arrow" />
      <h1 className="page-no-match-cover__title">404</h1>
      <ArrowControlIcon className="page-no-match-cover__arrow" />
    </div>
    <h2 className="page-no-match__title">Oh, no! Everything’s gone!</h2>
    <h4 className="page-no-match__description">
      Just kidding) Looks like you’re lost.
      <br /> Let us guide you!
    </h4>
    <Link href={'/'}>
      <a className="page-no-match__button button button--big">{`<<< Go Back to Main Page`}</a>
    </Link>
  </div>
)

export default NoMatch
