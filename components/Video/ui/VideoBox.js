import classnames from 'classnames'
import styles from 'pages/video/Video.module.less'
import PlayPauseIcon from 'components/Icons/PlayPause'

const VideoBox = ({ className, videoSrc, videoPoster, title, body }) => {
  const playPauseClick = e => {
    if (e.currentTarget.previousSibling.paused) {
      e.currentTarget.classList.add(styles.hide)
      e.currentTarget.nextSibling.classList.add(styles.hide) // overlay
      e.currentTarget.previousSibling.play() // video tag
    }
  }

  return (
    <div className={classnames(className, styles['video-list-item'])}>
      <div className={styles['video-list-item-player']}>
        <video
          className={styles['video-element']}
          width="686"
          height="392"
          controls="controls"
          poster={videoPoster}
        >
          <source src={videoSrc} type="video/mp4;" />
        </video>
        <PlayPauseIcon className={styles.playpause} onClick={playPauseClick} />
        {<div className={styles['video-overlay']}></div>}
      </div>

      <div className={styles['video-list-item-info']}>
        <div className={styles['video-list-item-title']}>{title}</div>
        <div className={styles['video-list-item-body']}>
          {body.map((part, index) => (
            <p key={`video-item-body-part-${index}`}>{part}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VideoBox
