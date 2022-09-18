import classnames from 'classnames'

import Works from 'components/Portfolio/ui/Works'
import SectionHeader from 'components/SectionHeader'

const Projects = ({
  className,
  title,
  description,
  handleMoreClick = () => null,
}) => (
  <section className={classnames(className, 'page-stack-projects container')}>
    <SectionHeader
      className="page-stack-projects__title"
      title={title}
      description={description}
    />
    <Works />
    <div className="page-stack-projects__more">
      <div
        className="page-stack-projects__more-button button button--empty"
        onClick={handleMoreClick}
      >
        Load More
      </div>
    </div>
  </section>
)

export default Projects
