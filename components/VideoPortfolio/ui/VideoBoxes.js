import classnames from 'classnames'
import VideoBox from 'components/Video/ui/VideoBox'
import Section from 'components/Video/ui/Section'
import styles from 'pages/video/Video.module.less'

const VideoBoxes = ({ className, list }) => {
  return (
    <div className={classnames(className, styles['video-portfolio'])}>
      <div className={styles['video-portfolio-list']}>
        {list.map((item, index) => (
          <Section
            title={item.sectionTitle}
            description={item.sectionDescription}
            imageLink={item.featuredImg}
            key={`video-item-${index}`}
          >
            <VideoBox {...item} />
          </Section>
        ))}
      </div>
    </div>
  )
}

export default VideoBoxes
