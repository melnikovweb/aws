import classnames from 'classnames'
import Image from 'next/image'
import styles from 'pages/video/Video.module.less'

import LocationIcon from 'components/Icons/Location'
// import In from "components/Icons/In";

const ExpertBoxes = ({ className, list }) => {
  return (
    <div className={classnames(className, styles['experts'])}>
      <ul className={styles['experts-list']}>
        {list.map(({ photo, name, position, location }, index) => (
          <li
            className={[styles.button, styles['experts-list-item']].join(' ')}
            key={`experts-item-${index}`}
          >
            <div className={styles['experts-list-item-photo']}>
              {/* <In className={styles["experts-list-item-photo-icon"]} /> */}
              <Image src={photo} layout="fill" />
            </div>

            <div className={styles['experts-list-item-info']}>
              <span className={styles['experts-list-item-name']}>{name}</span>
              <span className={styles['experts-list-item-position']}>
                {position}
              </span>
              <span className={styles['experts-list-item-location']}>
                <LocationIcon
                  className={styles['experts-list-item-location-icon']}
                />
                {location}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ExpertBoxes
