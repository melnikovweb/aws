import classnames from 'classnames'
import SectionHeader from 'components/SectionHeader'

export const DevServicesItem = ({
  className,
  title,
  description,
  infoPre,
  infoMain,
  hasAction = false,
  handleAction = () => null,
}) => (
  <div className={classnames(className, 'page-stack-ds-item')}>
    <h3 className="page-stack-ds-item__title">{title}</h3>
    <p className="page-stack-ds-item__description divider divider--bottom">
      {description}
    </p>
    <p className="page-stack-ds-item__info">
      <span className="page-stack-ds-item__info-pre">{infoPre}</span>
      <span className="page-stack-ds-item__info-main">{infoMain}</span>
    </p>
    <div className="page-stack-ds-item__action">
      {hasAction ? (
        <button
          className="page-stack-ds-item__action-button button button--big"
          onClick={handleAction}
        >
          View
        </button>
      ) : null}
    </div>
  </div>
)

const DevServices = ({
  className,
  Icon,
  title,
  list = [],
  currentTerm,
  handleItemAction = () => null,
  children,
}) => (
  <section className={classnames(className, 'page-stack-ds container')}>
    <SectionHeader className="page-stack-ds__title" title={title} Icon={Icon} />
    <div className="page-stack-ds__list">
      {list.map(
        ({ title, description, infoPre, infoMain, hasAction }, index) => (
          <DevServicesItem
            key={'ds-item' + index}
            title={title}
            description={description}
            infoPre={infoPre}
            infoMain={infoMain}
            hasAction={hasAction}
            handleAction={handleItemAction}
          />
        ),
      )}
      {children}
    </div>
  </section>
)

export default DevServices
