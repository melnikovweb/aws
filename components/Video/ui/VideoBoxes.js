import classnames from 'classnames'
import styles from 'pages/video/Video.module.less'
import VideoBox from './VideoBox'

const VideoBoxes = ({ className, list }) => {
  return (
    <div className={classnames(className, styles.video)}>
      <div className={styles['video-list']}>
        {list.map((item, index) => (
          <VideoBox {...item} key={`video-item-${index}`} />
        ))}
      </div>
    </div>
  )
}

export default VideoBoxes
