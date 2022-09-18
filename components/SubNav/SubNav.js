import { useEffect, useRef, useState } from 'react'
import classnames from 'classnames'

import ActiveLink from 'components/ActiveLink'

const SubNav = ({ className, list = [], isSticky = false }) => {
  const navRef = useRef(null)
  const [sticky, setSticky] = useState(false)

  const handleScroll = () => {
    const navPositionTop = navRef.current?.getBoundingClientRect().top

    const headerHeight = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue(
        '--headerHeight',
      ),
    )

    if (navPositionTop < headerHeight) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }

  useEffect(() => {
    if (isSticky) {
      window.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (isSticky) {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [isSticky])

  return (
    <div
      ref={navRef}
      className={classnames(
        className,
        'sub-nav-wrap',
        sticky && 'sub-nav-wrap--sticky',
      )}
    >
      <div className="sub-nav container-fluid">
        <nav className="sub-nav__list">
          {list.map(({ route, text, dropList }) => (
            <li className="sub-nav__li" key={route}>
              <ActiveLink href={route} activeClassName="sub-nav__item--active">
                <a className="sub-nav__item">{text}</a>
              </ActiveLink>
              {dropList ? (
                <ul className="sub-nav__sub-list">
                  {dropList.map(({ route, text }) => (
                    <li className="sub-nav__li" key={route}>
                      <ActiveLink href={route} activeClassName="is-active">
                        <a className="sub-nav__item">{text}</a>
                      </ActiveLink>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default SubNav
