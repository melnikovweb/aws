import { Children, cloneElement, useEffect, useState } from 'react'

const ScrollParallax = ({ children, direction, speed }) => {
  const [styles, setStyles] = useState({})

  const handleScroll = e => {
    const scroll = e.target.documentElement.scrollTop * (speed || 1)

    let newStyles = {}

    switch (direction) {
      case 'right':
        newStyles = {
          transform: 'translateX(' + scroll + 'px)',
          willChange: 'transform',
        }
        break
      case 'bottom':
        newStyles = {
          transform: 'translateY(' + scroll + 'px)',
          willChange: 'transform',
        }
        break
      case 'top':
        newStyles = {
          transform: 'translateY(' + -scroll + 'px)',
          willChange: 'transform',
        }
        break
      default:
        newStyles = {
          transform: 'translateX(' + -scroll + 'px)',
          willChange: 'transform',
        }
    }

    setStyles(newStyles)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return Children.map(children, child =>
    cloneElement(child, {
      style: { ...styles },
    }),
  )
}

export default ScrollParallax
