import classnames from 'classnames'
import styles from 'pages/video/Video.module.less'
import Link from 'next/link'

import Icon from 'components/Icons/Heragon'

const PriceBoxes = ({ list }) => {
  return (
    <div className={styles['video-prices']}>
      {list.map(({ title, iconClass, type, descriptionList, price }, index) => (
        <div
          className={classnames(
            styles['video-prices-item'],
            list.length === index + 1 ? styles['video-prices-item-last'] : '',
          )}
          key={`video-prices-item-${index}`}
        >
          <div className={styles['video-prices-item-header']}>
            <Icon
              className={classnames(
                styles['video-prices-item-icon'],
                styles[iconClass],
              )}
            />
            <div className={styles['video-prices-item-header-right']}>
              <span className={styles['video-prices-item-title']}>{title}</span>
              <span className={styles['video-prices-item-type']}>{type}</span>
            </div>
          </div>
          <ul className={styles['video-prices-item-list']}>
            {descriptionList.map((item, index) => (
              <li
                className={styles['video-prices-item-list-elem']}
                key={`video-prices-item-list-li-${index}`}
              >
                {item}
              </li>
            ))}
          </ul>

          <div className={styles['video-prices-item-price']}>
            {price.hour ? (
              <>
                {price.hour} / <span>hour</span>
              </>
            ) : (
              price.contract
            )}
          </div>
          <Link href="/">
            <a
              className={[
                styles.button,
                styles['video-prices-item-button'],
              ].join(' ')}
            >
              Choose
            </a>
          </Link>
        </div>
      ))}
      <span
        className={[styles.break, styles['video-prices-item']].join(' ')}
      ></span>
      <span
        className={[styles.break, styles['video-prices-item']].join(' ')}
      ></span>
      <span
        className={[styles.break, styles['video-prices-item']].join(' ')}
      ></span>
    </div>
  )
}

export default PriceBoxes
