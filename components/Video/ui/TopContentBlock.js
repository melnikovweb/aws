import classnames from 'classnames'
import Buttons from './Buttons'
import styles from 'pages/video/Video.module.less'

const TopContentBlock = ({ className, title, description }) => {
  return (
    <div className={classnames(className, styles.container)}>
      <div className={styles['workShop-wrapper']}>
        <span className={styles.workShop}>
          <span className={styles['workShop-pre']}>New</span>Binerals’ Workshop
        </span>
      </div>
      <h1>{title}</h1>
      <p className={styles['page-description']}>{description}</p>
      <Buttons />
      <span className={styles.microphone}></span>
    </div>
  )
}

export default TopContentBlock
