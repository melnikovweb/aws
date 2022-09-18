import classnames from 'classnames'

import SectionHeader from 'components/SectionHeader'
import ExampleIcon from 'components/Icons/Example'

export const ProcessesItem = ({
  className,
  index,
  title,
  descriptionList = [],
  hasAction = false,
  handleAction = () => null,
}) => (
  <div className={classnames(className, 'page-stack-processes-item')}>
    <div className="page-stack-processes-item__index">{index}</div>
    <div className="page-stack-processes-item__title divider divider--bottom">
      {title}
    </div>
    <ul className="page-stack-processes-item__description page-stack-processes-item-description">
      {descriptionList.map(({ text }, index) => (
        <li
          key={'description-item' + index}
          className="page-stack-processes-item-description-li"
        >
          {text}
        </li>
      ))}
    </ul>
    {hasAction ? (
      <div className="page-stack-processes-item__action">
        <div
          className="page-stack-processes-item__action-content"
          onClick={handleAction}
        >
          <ExampleIcon
            width="30"
            height="30"
            className="page-stack-processes-item__action-icon"
          />
          <span className="page-stack-processes-item__action-text">
            Example
          </span>
        </div>
      </div>
    ) : null}
  </div>
)

const Processes = ({ className, title, description, list = [], children }) => (
  <section className={classnames(className, 'page-stack-processes container')}>
    <SectionHeader title={title} description={description} />
    <div className="page-stack-processes__list">
      {list.map(({ title, descriptionList, hasAction }, index) => (
        <ProcessesItem
          key={'processes-item' + index}
          className="page-stack-processes__item"
          index={index >= 9 ? index + 1 : `0${index + 1}`}
          title={title}
          descriptionList={descriptionList}
          hasAction={hasAction}
        />
      ))}
      {children}
    </div>
  </section>
)

export default Processes
