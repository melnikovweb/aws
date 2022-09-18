import Link from 'next/link'
import classnames from 'classnames'

import SectionHeader from 'components/SectionHeader'
import ExampleIcon from 'components/Icons/Example'

export const ExperienceItem = ({ className, value, text }) => (
  <div
    className={classnames(
      className,
      'page-stack-experts-item-info-experience-item',
    )}
  >
    <div className="page-stack-experts-item-info-experience-item__value">
      {value}
    </div>
    <div className="page-stack-experts-item-info-experience-item__text">
      {text}
    </div>
  </div>
)

export const ExpertsItem = ({
  className,
  title,
  subTitle,
  description,
  price,
  link,
  experienceList,
}) => (
  <div className={classnames(className, 'page-stack-experts-item')}>
    <h3 className="page-stack-experts-item__title">{title}</h3>
    <p className="page-stack-experts-item__sub-title">{subTitle}</p>
    <p className="page-stack-experts-item__description divider divider--bottom">
      {description}
    </p>
    <div className="page-stack-experts-item-info">
      <div className="page-stack-experts-item-info__experience page-stack-experts-item-info-experience">
        {experienceList.map(({ value, text }, index) => (
          <ExperienceItem
            key={'experience-item' + index}
            value={value}
            text={text}
          />
        ))}
      </div>
      <div className="page-stack-experts-item-info__price">{price}</div>
      <div className="page-stack-experts-item-info__cv">
        <ExampleIcon
          width="31"
          height="30"
          className="page-stack-experts-item-info__cv-icon"
        />
        <Link href={link}>
          <a className="page-stack-experts-item-info__link">Resume</a>
        </Link>
      </div>
    </div>
  </div>
)

const Experts = ({
  className,
  title,
  description,
  InfoIcon,
  infoDescription,
  list = [],
  perPage = 3,
  children,
  handleRequestExperts = () => null,
  handleShowMore = () => null,
}) => (
  <section className={classnames(className, 'page-stack-experts container')}>
    <SectionHeader title={title} description={description} />
    <div className="page-stack-experts__info page-stack-experts-info">
      <InfoIcon
        width="48"
        height="50"
        className="page-stack-experts-info__icon"
      />
      <p className="page-stack-experts-info__description">{infoDescription}</p>
    </div>
    <div className="page-stack-experts__list">
      {(list ?? [])
        .slice(0, perPage)
        .map(
          (
            { title, subTitle, description, price, link, experienceList },
            index,
          ) => (
            <ExpertsItem
              key={'experts-item' + index}
              className="page-stack-experts__item"
              title={title}
              subTitle={subTitle}
              description={description}
              price={price}
              link={link}
              experienceList={experienceList}
            />
          ),
        )}
      {children}
    </div>
    <div className="page-stack-experts-summary">
      <button
        className="page-stack-experts-summary__request-button button button--big"
        onClick={handleRequestExperts}
      >
        Request experts
      </button>

      {list.length > perPage ? (
        <div
          className="page-stack-experts-summary__more-button button button--empty"
          onClick={handleShowMore}
        >
          Show more
        </div>
      ) : null}
    </div>
  </section>
)

export default Experts
