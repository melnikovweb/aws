import { useEffect, useState, useRef } from 'react'
import classnames from 'classnames'

import ArrowControlIcon from 'components/Icons/ArrowControl'
import Tags from 'components/Tags'

const Tabs = ({
  className,
  list,
  currentTab = 0,
  handleTabChange = () => null,
  isBottom = false,
  isNavSticky = false,
  controlButtons = true,
}) => {
  const buttons = []
  const headerRef = useRef(null)

  list.map(() => buttons.push(useRef(null)))

  const [activeTab, setActiveTab] = useState(currentTab || 0)
  const [number, setActiveNumber] = useState(currentTab + 1 || 1)
  const [width, setWidth] = useState(0)
  const [left, setLeft] = useState(0)
  const [sticky, setSticky] = useState(false)

  const changeActiveTab = value => {
    setActiveTab(value)
    setActiveNumber(value + 1)
  }

  const handleTabControlClick = ({ currentTarget: { name } }) => {
    let newActiveTab = activeTab

    if (name === 'decrement') {
      newActiveTab--
    } else {
      newActiveTab++
    }

    changeActiveTab(newActiveTab)
  }

  const handleHeaderItemClick = value => {
    changeActiveTab(value)

    if (isBottom || isNavSticky) {
      scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
  }

  const setActiveTabHighlightPosition = activeTab => {
    const el = buttons[activeTab].current

    setWidth(el.offsetWidth + 'px')
    setLeft(el.offsetLeft + 'px')
  }

  useEffect(() => {
    handleTabChange(activeTab)
    setActiveTabHighlightPosition(activeTab)
  }, [activeTab])

  useEffect(() => {
    changeActiveTab(currentTab)
  }, [currentTab])

  const handleResize = () => {
    const activeTab = document.querySelector('.tabs-header-button.is-active')
      .dataset.index

    setActiveTabHighlightPosition(activeTab)
  }

  const handleScroll = () => {
    const headerPositionTop = headerRef.current.getBoundingClientRect().top

    if (headerPositionTop < 0) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    if (isNavSticky) {
      window.addEventListener('scroll', handleScroll)
    }

    return () => {
      window.removeEventListener('resize', handleResize)
      if (isNavSticky) {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <div
      className={classnames([
        className,
        'tabs',
        { 'tabs--compact': isBottom },
        { 'tabs--sticky': sticky },
        { 'tabs-no-control': !controlButtons },
      ])}
    >
      <div ref={headerRef} className="tabs__header-wrap">
        <div
          className={classnames([
            'tabs__header',
            { container: isBottom },
            { 'container-fluid': !isBottom },
          ])}
        >
          <div className="tabs-header">
            {list.map(({ button, buttonIcon }, index) => (
              <div className="tabs-header__item" key={'tab-header' + index}>
                <button
                  type="button"
                  className={classnames({
                    'tabs-header-button': true,
                    'is-active': activeTab === index,
                  })}
                  onClick={() => handleHeaderItemClick(index)}
                  ref={buttons[index]}
                  data-index={index}
                >
                  {button}
                  {buttonIcon && (
                    <span className="tabs-header-button-icon">
                      {buttonIcon}
                    </span>
                  )}
                </button>
              </div>
            ))}
            <div
              className="tabs-header-active"
              style={{
                '--tabsHeaderActiveWidth': width,
                '--tabsHeaderActiveLeft': left,
              }}
            />
          </div>
        </div>
      </div>

      {!isBottom ? (
        <div className="tabs__content container">
          {controlButtons && (
            <div className="tabs__side">
              <div className="tabs-control">
                <button
                  type="button"
                  name="decrement"
                  className="tabs-control__button tabs-control-button"
                  onClick={handleTabControlClick}
                  disabled={activeTab === 0}
                >
                  <ArrowControlIcon className="tabs-control-button__icon" />
                </button>
                <div className="tabs-control__board">
                  {number > 9 ? number : '0' + number}
                </div>
                <button
                  type="button"
                  name="increment"
                  className="tabs-control__button tabs-control-button tabs-control-button_next"
                  onClick={handleTabControlClick}
                  disabled={activeTab === list.length - 1}
                >
                  <ArrowControlIcon className="tabs-control-button__icon" />
                </button>
              </div>
            </div>
          )}

          <div className="tabs__box tabs-box">
            <div
              className="tabs-box__wrapper"
              style={{
                '--tabsContentActiveLeft': '-' + 100 * activeTab + '%',
              }}
            >
              {list.map(({ title, titleIcon, description, tags }, index) => (
                <div className="tabs-box__item tab" key={'tab' + index}>
                  <div className="tab__header">
                    {titleIcon && (
                      <span className="tab__header-icon">{titleIcon()}</span>
                    )}
                    <h4>{title}</h4>
                  </div>
                  <div className="tab__content">
                    {description.map((text, descriptionIndex) => (
                      <p key={'tab' + index + 'description' + descriptionIndex}>
                        {text}
                      </p>
                    ))}
                  </div>
                  <div className="tab__footer">
                    <Tags list={tags} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Tabs
