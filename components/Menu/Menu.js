import classnames from 'classnames'

import ActiveLink from 'components/ActiveLink'
import DropDownMenu from './ui/DropDownMenu'
import { LanguageConsumer } from 'components/Language/LanguageContext'

import stackDropDown from 'datastore/Stack_dropDownMenu'
import { messages } from 'datastore/Menu_messages'

const Menu = ({ className }) => (
  <LanguageConsumer>
    {({ currentLanguage }) => (
      <nav
        className={classnames([className, 'menu'])}
        itemScope
        itemType="http://www.schema.org/SiteNavigationElement"
      >
        <li className="menu__li" itemProp="name">
          <ActiveLink href="/services" activeClassName="is-active">
            <a className="menu__item menu-link" itemProp="url">
              {messages.services[currentLanguage]}
            </a>
          </ActiveLink>
        </li>
        <li className="menu__li" itemProp="name">
          <ActiveLink href="/process" activeClassName="is-active">
            <a className="menu__item menu-link" itemProp="url">
              {messages.process[currentLanguage]}
            </a>
          </ActiveLink>
        </li>
        {/* 
          <li className="menu__li  menu__li-dropdown" itemProp="name">
            <ActiveLink href="/stack" activeClassName="is-active">
              <a className="menu__item menu-link" itemProp="url">
                {messages.stack[currentLanguage]}
              </a>
            </ActiveLink>
            <DropDownMenu list={stackDropDown} />
          </li> */}
        <li className="menu__li" itemProp="name">
          <ActiveLink href="/company" activeClassName="is-active">
            <a className="menu__item menu-link" itemProp="url">
              {messages.company[currentLanguage]}
            </a>
          </ActiveLink>
        </li>
        <li className="menu__li" itemProp="name">
          <ActiveLink href="/blog" activeClassName="is-active">
            <a className="menu__item menu-link" itemProp="url">
              {messages.blog[currentLanguage]}
            </a>
          </ActiveLink>
        </li>
      </nav>
    )}
  </LanguageConsumer>
)

export default Menu
