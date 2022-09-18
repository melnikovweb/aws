import { forwardRef, useEffect, useState } from 'react'
import classnames from 'classnames'
import { ArcherContainer, ArcherElement } from 'react-archer'

import ArrowIcon from 'components/Icons/Arrow'
import WorkflowItemChildren from './WorkflowItemChildren'

const WorkflowItem = forwardRef(
  (
    {
      Icon,
      title = '',
      description,
      isStart = false,
      isOpen = false,
      isFinish = false,
      isDisabled = false,
    },
    ref,
  ) => {
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(isOpen)

    const handleItemClick = () => {
      if (!isStart && description && !isDisabled) {
        setIsDescriptionOpen(s => !s)
      }
    }

    return (
      <li
        className={classnames([
          'page-process-workflow-item',
          { 'page-process-workflow-item--start': isStart },
          { 'page-process-workflow-item--finish': isFinish },
          {
            'page-process-workflow-item--disabled': isDisabled,
          },
          { 'page-process-workflow-item--open': isDescriptionOpen },
        ])}
        onClick={handleItemClick}
        ref={ref}
      >
        {!isStart && Icon ? (
          <Icon className="page-process-workflow-item__icon" />
        ) : null}
        <h3 className="page-process-workflow-item__title">{title}</h3>
        {!isStart && description ? (
          <ArrowIcon className="page-process-workflow-item__arrow" />
        ) : null}
        {description ? (
          <p className="page-process-workflow-item__description">
            {description}
          </p>
        ) : null}
      </li>
    )
  },
)

const Workflow = ({
  className,
  title,
  subTitle,
  breakpointPx = 991,
  rowItemsCount = 5,
  items = [],
  children,
  isFinishHighlighted = false,
}) => {
  const size = useWindowSize()
  const checkPageWidth = breakpointPx => size.width <= breakpointPx
  const [isVertical, setIsVertical] = useState(checkPageWidth(breakpointPx))

  useEffect(() => {
    setIsVertical(checkPageWidth(breakpointPx))
  }, [size])

  const renderItems = (items, startIndex, isInverted) =>
    items.map(
      ({ Icon, title, description, isDisabled, isOpen, children }, index) => {
        const isRowEnd = (index + 1) % rowItemsCount === 0

        if (index >= startIndex && index < startIndex + rowItemsCount) {
          var relations = []

          if (children) {
            children.map((item, i) => {
              relations.push({
                targetId: `item${index}_child${i}`,
                sourceAnchor:
                  isVertical || isRowEnd
                    ? 'bottom'
                    : isInverted
                    ? 'left'
                    : 'right',
                targetAnchor:
                  isVertical || isRowEnd
                    ? 'top'
                    : isInverted
                    ? 'right'
                    : 'left',
              })
            })
          } else {
            relations =
              index + 1 < items.length
                ? [
                    {
                      targetId: `item${index + 1}`,
                      sourceAnchor:
                        isVertical || isRowEnd
                          ? 'bottom'
                          : isInverted
                          ? 'left'
                          : 'right',
                      targetAnchor:
                        isVertical || isRowEnd
                          ? 'top'
                          : isInverted
                          ? 'right'
                          : 'left',
                    },
                  ]
                : []
          }
          return (
            <div
              className={classnames([
                'page-process-workflow-item-wrapper',
                { 'with-children': children },
              ])}
              key={index}
            >
              <ArcherElement
                id={`item${index}`}
                relations={relations}
                key={index}
              >
                <WorkflowItem
                  isStart={index === 0}
                  title={title}
                  Icon={Icon}
                  description={description}
                  isDisabled={isDisabled}
                  isOpen={isOpen}
                  isFinish={isFinishHighlighted && items.length - 1 === index}
                />
              </ArcherElement>
              {children && (
                <WorkflowItemChildren
                  itemId={`item${index}`}
                  childrenItems={children}
                  nextItemId={`item${index + 1}`}
                  isVertical={isVertical}
                  isRowEnd={isRowEnd}
                  isInverted={isInverted}
                />
              )}
            </div>
          )
        }
      },
    )

  const renderRows = items => {
    let rowCount = 0

    return items.map((item, index) => {
      if (index % rowItemsCount === 0) {
        rowCount++

        return (
          <div
            className="page-process-workflow__row"
            key={'workflow-row' + index}
          >
            {renderItems(items, index, rowCount % 2 === 0)}
          </div>
        )
      }
    })
  }

  return (
    <section className={classnames([className, 'page-process-workflow'])}>
      <div className="container">
        {title ? (
          <h2 className="page-process-workflow__title">{title}</h2>
        ) : null}
        {subTitle ? (
          <p className="page-process-workflow__sub-title">{subTitle}</p>
        ) : null}
        <ArcherContainer
          strokeWidth={1}
          strokeColor={'#6A7184'}
          svgContainerStyle={{ zIndex: '-1' }}
          endShape={{
            arrow: {
              arrowLength: 5,
              arrowThickness: 6,
            },
          }}
        >
          <ol className="page-process-workflow__content">
            {children ? (
              <div className="page-process-workflow__row">{children}</div>
            ) : null}
            {renderRows(items)}
          </ol>
        </ArcherContainer>
      </div>
    </section>
  )
}

const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }

      // Add event listener
      window.addEventListener('resize', handleResize)

      // Call handler right away so state gets updated with initial window size
      handleResize()

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize)
    }
  }, []) // Empty array ensures that effect is only run on mount
  return windowSize
}

export default Workflow
