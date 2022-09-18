import Link from 'next/link'
import styles from 'pages/video/Video.module.less'

const Buttons = props => {
  return (
    <ul className={styles.buttons}>
      <li className={styles['buttons-item']}>
        <Link href="/video" as="/">
          <a
            className={[
              styles.button,
              styles['buttons-item-link'],
              styles['button--blue'],
            ].join(' ')}
          >
            Messenger
          </a>
        </Link>
      </li>
      <li className={styles['buttons-item']}>
        <Link href="/video" as="/">
          <a
            className={[
              styles.button,
              styles['buttons-item-link'],
              styles['button--orange'],
            ].join(' ')}
          >
            Contact us
          </a>
        </Link>
      </li>
    </ul>
  )
}

export default Buttons
