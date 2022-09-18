import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classnames from 'classnames'

import Menu from 'components/Menu'
import Logo from 'components/Logo'

const Header = ({ className }) => {
  const [scroll, setScroll] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const router = useRouter()
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    const unlisten = () => {
      document.body.classList.remove('modal-open')
      setShowMenu(false)
    }
    router.events.on('routeChangeStart', unlisten)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      router.events.off('routeChangeStart', unlisten)
    }
  }, [])

  function handleScroll(e) {
    const { scrollTop } = e.target.documentElement

    if (scrollTop) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  const toggleMenu = () => {
    document.body.classList.toggle('modal-open')
    setShowMenu(!showMenu)
  }

  return (
    <header
      className={classnames({
        className,
        header: true,
        'is-scrolled': scroll,
      })}
    >
      <Logo className="header__logo" />
      <div
        className={classnames({
          header__content: true,
          'header-content': true,
          'is-show': showMenu,
        })}
      >
        <Menu className="header-content__menu" />
        <Link href="/contact?cta=header">
          <a className="button button--empty">Contact Us</a>
        </Link>
      </div>
      <button
        type="button"
        className={classnames({
          'header__compact-button': true,
          'header-compact-button': true,
          'is-active': showMenu,
        })}
        onClick={toggleMenu}
      >
        <span className="header-compact-button__icon"></span>
      </button>
    </header>
  )
}

export default Header
