import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import classnames from 'classnames'

import ActiveLink from 'components/ActiveLink'

const DropDownMenu = ({ className, list = [] }) => {
  const router = useRouter()

  const getActiveData = list => {
    return list.some(item => {
      if (item.route === router.asPath) {
        setActiveData({ ...item })
        return true
      }
      if (item.dropList) return getActiveData(item.dropList)
    })
  }

  const [activeData, setActiveData] = useState({})

  useEffect(() => {
    !getActiveData(list) ? setActiveData({ ...list[0] }) : null
  }, [router.asPath])

  return (
    <div className={classnames(className, 'dropdown-menu')}>
      <div className="dropdown-menu__info">
        <h2 className="dropdown-menu__info-title">{activeData.text}</h2>
        <div className="dropdown-menu__info-description">
          {activeData.description}
        </div>
      </div>
      <ul className="dropdown-menu__list">
        {list.map(({ route, text, dropList }) => (
          <li className="dropdown-menu__item" key={route}>
            <ActiveLink href={route} key={route} activeClassName="is-active">
              <a className="dropdown-menu__link">{text}</a>
            </ActiveLink>

            {dropList ? (
              <ul className="dropdown-menu__sub-list">
                {dropList.map(({ route, text }) => (
                  <li className="dropdown-menu__item" key={route}>
                    <ActiveLink href={route} activeClassName="is-active">
                      <a className="dropdown-menu__link">{text}</a>
                    </ActiveLink>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DropDownMenu
