import { useState } from 'react'
import { ClickAwayListener } from '@material-ui/core'
import { LanguageConsumer } from '~/components/Language/LanguageContext'
import classnames from 'classnames'

import ArrowIcon from 'components/Icons/Arrow'

const list = [
  { value: 'en', abbr: 'EN', title: 'English' },
  { value: 'ru', abbr: 'RU', title: 'Russian' },
  { value: 'ukr', abbr: 'UKR', title: 'Ukrainian' },
]

const Language = ({ className }) => {
  const [open, setOpen] = useState(false)

  return (
    <LanguageConsumer>
      {({ currentLanguage, changeLanguage }) => (
        <div className={classnames([className, 'language'])}>
          <button
            type="button"
            className={classnames({
              language__button: true,
              'language-button': true,
              'is-active': open,
            })}
            onClick={() => setOpen(!open)}
          >
            {list.find(({ value }) => value === currentLanguage).abbr}
            <ArrowIcon className="language-button__icon" />
          </button>
          {open ? (
            <ClickAwayListener onClickAway={() => setOpen(false)}>
              <div className="language__content language-content">
                {list.map(({ value, title }) => (
                  <div className="language-content__item" key={value}>
                    <button
                      type="button"
                      className={classnames({
                        'language-content__button': true,
                        'language-content-button': true,
                        'is-active': value === currentLanguage,
                      })}
                      value={value}
                      onClick={e => {
                        if (value !== currentLanguage) {
                          changeLanguage(e.currentTarget.value)
                        }

                        setOpen(false)
                      }}
                    >
                      {title}
                    </button>
                  </div>
                ))}
              </div>
            </ClickAwayListener>
          ) : null}
        </div>
      )}
    </LanguageConsumer>
  )
}

export default Language
