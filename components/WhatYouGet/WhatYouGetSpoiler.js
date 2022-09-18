import { useState, useCallback } from 'react'
import classnames from 'classnames'

import FileTextIcon from 'components/Icons/FileText'
import ArrowRightIcon from 'components/Icons/ArrowRight'
import CloseIcon from 'components/Icons/Close'

const WhatYouGetSpoilerItem = ({ title, description }) => (
  <li className="what-you-get-spoiler-content-item">
    <span className="what-you-get-spoiler-content-item__title">{title}</span>
    <span className="what-you-get-spoiler-content-item__description">
      {description}
    </span>
  </li>
)

const WhatYouGetSpoiler = ({ className, title = '', list, isOpen = false }) => {
  const [isSpoilerOpen, setIsSpoilerOpen] = useState(isOpen)

  const handleButtonClick = useCallback(
    () => setIsSpoilerOpen(isOpen => !isOpen),
    [isSpoilerOpen],
  )

  const renderButtonRightIcon = isOpen => {
    const Icon = isOpen ? CloseIcon : ArrowRightIcon
    return (
      <Icon className="what-you-get-spoiler__button-icon what-you-get-spoiler__button-icon--right" />
    )
  }

  return (
    <section
      className={classnames(
        className,
        'what-you-get-spoiler',
        isSpoilerOpen && 'what-you-get-spoiler--open',
      )}
    >
      <button
        className={classnames([
          'what-you-get-spoiler__button',
          { 'what-you-get-spoiler__button--active': isSpoilerOpen },
          'button',
          'button--big',
          'button--empty',
        ])}
        onClick={handleButtonClick}
      >
        <FileTextIcon className="what-you-get-spoiler__button-icon what-you-get-spoiler__button-icon--left" />
        {title}
        {renderButtonRightIcon(isSpoilerOpen)}
      </button>
      <ul
        className={classnames([
          'what-you-get-spoiler__content',
          { 'what-you-get-spoiler__content--visible': isSpoilerOpen },
        ])}
      >
        {list.map(({ title, description }, index) => (
          <WhatYouGetSpoilerItem
            title={title}
            description={description}
            key={`${title}${index}`}
          />
        ))}
      </ul>
    </section>
  )
}

export default WhatYouGetSpoiler
