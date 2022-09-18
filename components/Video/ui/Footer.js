import Link from 'next/link'
import Image from 'next/image'
import styles from 'pages/video/Video.module.less'

const Footer = () => {
  return (
    <footer className={[styles.footer, styles.container].join(' ')}>
      <Link href="/video" as="/">
        <a className={styles['video-logo']}>
          <Image
            src={'/static/video/Logo.png'}
            className={styles['video-logo-img']}
            width={'128'}
            height={'54'}
            layout={'fixed'}
          />
          BINERALS
        </a>
      </Link>
      <span className={styles['copyright']}>
        © Binerals - 2020. All Rights Reserved.
      </span>
    </footer>
  )
}

export default Footer
