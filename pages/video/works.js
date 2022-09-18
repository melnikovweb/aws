import TopContent from 'components/Video/ui/TopContentBlock'
import VideoBoxes from 'components/VideoPortfolio/ui/VideoBoxes'
import styles from './Video.module.less'

import VideoList from 'datastore/VideoPortfolio_VideoList'

import VideoAppLayout from 'layouts/VideoAppLayout'

const VideoPortfolio = () => {
  return (
    <>
      <div className={styles['page-video-portfolio']}>
        <TopContent
          className={styles['page-video-top']}
          title={'Portfolio'}
          description={'Creating a turnkey video product'}
        />
        <div className={styles['page-video-portfolio-list']}>
          <VideoBoxes list={VideoList} />
        </div>
      </div>
    </>
  )
}

VideoPortfolio.layout = VideoAppLayout

export default VideoPortfolio
