import Image from 'next/image'
import Link from 'next/link'
import classnames from 'classnames'

import Tags from 'components/Tags'
import PeopleIcon from 'components/Icons/People'

const Work = ({
  cover,
  title,
  description,
  tags,
  className,
  specialists,
  link,
}) => (
  <div className={classnames([className, 'work'])}>
    {link ? (
      <>
        <Link href={link}>
          <a className="work__cover work-cover">
            <Image
              src={cover}
              alt=""
              layout="responsive"
              width={690}
              height={597}
            />
          </a>
        </Link>
        <Link href={link}>
          <a className="work__link">
            <h4 className="work__title">{title}</h4>
          </a>
        </Link>
      </>
    ) : (
      <>
        <div className="work__cover work-cover">
          <Image
            src={cover}
            alt=""
            layout="responsive"
            width={690}
            height={597}
          />
        </div>
        <h4 className="work__title">{title}</h4>
      </>
    )}
    <p className="work__description">{description}</p>
    <div className="work__specialists">
      <PeopleIcon width="28" height="21" />
      <span className="work__specialists-count">{specialists}</span>{' '}
      <span>specialists</span>
    </div>

    <Tags className="work__tags tags" list={tags} />
  </div>
)

export default Work
