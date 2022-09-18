import { useState } from 'react'

const TabContent = items => {
  const { tabComponent, className } = { ...items }

  return <div className={className}>{tabComponent({ ...items })}</div>
}

function TabsSimple({ items, className }) {
  const [active, setActive] = useState(0)

  const openTab = e => {
    e.preventDefault()
    setActive(+e.currentTarget.dataset.index)
  }

  return (
    <div className={className}>
      <ul id="tabs" className="tabs-simple">
        {items.map(({ Icon, title }, i) => (
          <li
            key={'tab-simple-' + i}
            onClick={openTab}
            data-index={i}
            className={`tabs-simple-item ${
              i === active ? 'tab-item-current' : ''
            }`}
          >
            <div className="tabs-simple-item-icon">
              <Icon />
            </div>
            <a href="#" className="tabs-simple-item-link">
              {title}
            </a>
          </li>
        ))}
      </ul>

      <div id="tabs-content" className="tabs-simple-content">
        {items.map((item, i) => (
          <TabContent
            key={'tab-simple-content-' + i}
            className={
              `tabs-simple-content-item-` +
              i +
              ` tabs-simple-content-item ${i === active ? 'current' : ''}`
            }
            tabNumber={i}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}

export default TabsSimple
