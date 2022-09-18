import React from 'react'
import classnames from 'classnames'
import ArrowQuoteIcon from 'components/Icons/ArrowQuote'

//TODO - upgrade to component PageHeader with props {title, description, children}
const PageTitle = ({ children, className }) => (
  <div className={classnames([className, 'page-title'])}>
    <ArrowQuoteIcon className="page-title__arrow" />
    <div className="page-title__content">{children}</div>
    <ArrowQuoteIcon className="page-title__arrow" />
  </div>
)

export default PageTitle
