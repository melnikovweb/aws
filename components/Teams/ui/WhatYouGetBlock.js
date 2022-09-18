import Tags from 'components/Tags'

const WhatYouGetBlock = ({ Icon, title, tags }) => {
  return (
    <div className="cover-section-mini">
      <Icon className="cover-section-mini-icon" />
      <div className="cover-section-mini-title">{title}</div>
      <div className="cover-section-mini-body">
        <Tags list={tags} />
      </div>
    </div>
  )
}

export default WhatYouGetBlock
