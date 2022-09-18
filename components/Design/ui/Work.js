import Image from 'next/image'
import Link from 'next/link'
import classnames from 'classnames'

import Tags from 'components/Tags'

const Work = props => {
  const { work, className, brandInfo } = { ...props }
  return (
    <div className={classnames(className, 'page-design__work')}>
      <div className="page-design__work-cover">
        <span className="page-design__work-info">
          <span className="page-design__work-info-header">
            <h6 className="page-design__work-info-title">{work.title}</h6>
            {work.link ? (
              <Link href={work.link.slice(1)}>
                <a className="page-design__work-info-more">
                  More<span>{' >>>'}</span>
                </a>
              </Link>
            ) : null}
          </span>
          <p className="page-design__work-info-desc">{work.description}</p>
          <span className="page-design__work-info-footer">
            <Tags className="page-design__work-info-tags" list={work.tags} />
            <span className="page-design__work-info-year">{work.year}</span>
          </span>
        </span>
        <Image src={work.cover} layout="fill" />
      </div>
    </div>
  )
}

export default Work
