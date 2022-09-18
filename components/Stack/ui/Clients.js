import classnames from 'classnames'

import Reviews from 'components/Reviews/Reviews'
import SectionHeader from 'components/SectionHeader'

const Clients = ({
  className,
  title,
  description,
  handleMoreClick = () => null,
}) => (
  <section className={classnames(className, 'page-stack-clients')}>
    <div className="page-stack-clients__header container">
      <SectionHeader
        className="page-stack-clients__title"
        title={title}
        description={description}
      />
    </div>
    <Reviews className="container-fluid" />
    <div className="page-stack-clients__footer container">
      <button
        className="page-stack__request button button--big"
        onClick={handleMoreClick}
      >
        More references
      </button>
    </div>
  </section>
)

export default Clients
