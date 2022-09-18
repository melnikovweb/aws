import { ArcherElement } from 'react-archer'

const WorkflowItemChildren = ({
  itemId,
  childrenItems,
  nextItemId,
  isVertical,
  isRowEnd,
  isInverted,
}) => {
  return (
    <ul className="page-process-workflow-children">
      {childrenItems.map(({ Icon, title }, index) => (
        <ArcherElement
          id={`${itemId}_child${index}`}
          relations={[
            {
              targetId: nextItemId,
              sourceAnchor:
                isVertical || isRowEnd
                  ? 'bottom'
                  : isInverted
                  ? 'left'
                  : 'right',
              targetAnchor:
                isVertical || isRowEnd ? 'top' : isInverted ? 'right' : 'left',
            },
          ]}
          key={index}
        >
          <li className="page-process-workflow-children-item">
            <Icon className="page-process-workflow-children-item-icon" />
            <span className="page-process-workflow-children-item-title">
              {title}
            </span>
          </li>
        </ArcherElement>
      ))}
    </ul>
  )
}

export default WorkflowItemChildren
