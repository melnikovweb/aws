import { useEffect, useState } from 'react'
import classnames from 'classnames'

import SectionHeader from 'components/SectionHeader'
import ReloadActionIcon from 'components/Icons/ReloadAction'
import PlusIcon from 'components/Icons/Plus'
import MinusIcon from 'components/Icons/Minus'

export const CounterItem = ({
  className,
  name,
  value,
  isCompact = false,
  onItemChange = value => value,
}) => {
  const [count, setCount] = useState(parseInt(value) || 0)

  const handleCountRemove = () => {
    if (count > 0) {
      setCount(count => count - 1)
    }
  }

  const handleCountAdd = () => {
    setCount(count => count + 1)
  }

  useEffect(() => {
    onItemChange(count)
  }, [count])

  useEffect(() => {
    setCount(value)
  }, [value])

  return (
    <div
      className={classnames(
        className,
        'page-stack-counter',
        isCompact && 'page-stack-counter--compact',
      )}
    >
      <div className="page-stack-counter__name">{name}</div>
      <div className="page-stack-counter__value">
        <MinusIcon
          width="20"
          height="20"
          className={classnames(
            'page-stack-counter__button',
            count <= 0 && 'page-stack-counter__button--disabled',
          )}
          onClick={handleCountRemove}
        />
        <div className="page-stack-counter__count">
          {count > 9 ? count : `0${count}`}
        </div>
        <PlusIcon
          width="20"
          height="20"
          className="page-stack-counter__button"
          onClick={handleCountAdd}
        />
      </div>
    </div>
  )
}

export const CalculationSection = ({
  className,
  title,
  description,
  list = [],
  onCounterChange = () => null,
  data,
}) => {
  return (
    <section
      className={classnames(className, 'page-stack-calculation-section')}
    >
      <h3 className="page-stack-calculation-section__title">{title}</h3>
      {description ? (
        <div className="page-stack-calculation-section__description">
          {description}
        </div>
      ) : null}
      <div className="page-stack-calculation-section__content">
        {list.map((item, index) =>
          Array.isArray(item) ? (
            <div
              key={'section-include-item' + index}
              className="page-stack-calculation-include-item"
            >
              {item.map(({ name, value }) => (
                <CounterItem
                  key={name}
                  className="page-stack-calculation-include-item__counter"
                  name={name}
                  value={(data && data[name]) || value}
                  isCompact
                  onItemChange={value => onCounterChange({ [name]: value })}
                />
              ))}
            </div>
          ) : (
            <CounterItem
              key={item.name}
              className="page-stack-calculation-experts-item"
              name={item.name}
              value={(data && data[item.name]) || item.value}
              onItemChange={value => onCounterChange({ [item.name]: value })}
            />
          ),
        )}
      </div>
    </section>
  )
}

const Calculation = ({
  className,
  title,
  description,
  Icon,
  list = [],
  children,
  handleCalculate = () => null,
  handleReset = () => null,
}) => {
  const [data, setData] = useState({})

  const handleCounterChange = value => {
    setData(data => {
      return { ...data, ...value }
    })
  }

  const onResetClick = () => {
    const newData = { ...data }
    for (let key in newData) {
      newData[key] = 0
    }
    setData(newData)
    handleReset()
  }

  const onCalculateClick = data => {
    handleCalculate(data)
  }

  return (
    <section
      className={classnames(className, 'page-stack-calculation container')}
    >
      <SectionHeader
        className="page-stack-calculation__title"
        title={title}
        description={description}
        Icon={Icon}
      />
      {list.map(({ title, description, items }, index) => (
        <CalculationSection
          key={'calculation-section' + index}
          className="page-stack-calculation__section"
          title={title}
          description={description}
          list={items}
          onCounterChange={handleCounterChange}
          data={data}
        />
      ))}
      {children}
      <div className="page-stack-calculation-summary">
        <button
          className="button button--big"
          onClick={() => onCalculateClick(data)}
        >
          Get calculation
        </button>
        <div
          className="page-stack-calculation-summary__reset-button button button--empty button--clear"
          onClick={onResetClick}
        >
          <ReloadActionIcon className="page-stack-calculation-summary__reset-button-icon" />
          Set all to zero
        </div>
      </div>
    </section>
  )
}

export default Calculation
