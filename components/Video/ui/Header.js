import Link from 'next/link'
import Image from 'next/image'
import styles from 'pages/video/Video.module.less'

const Header = () => {
  return (
    <header className={[styles.header, styles.container].join(' ')}>
      <Link href="/works">
        <a className={[styles.button, styles['button--empty']].join(' ')}>
          Portfolio
        </a>
      </Link>

      <Link href="/video" as="/">
        <a className={styles['video-logo']}>
          <Image
            src={'/static/video/Logo.png'}
            className={styles['video-logo-img']}
            width={'155'}
            height={'65'}
            layout={'fixed'}
          />
          BINERALS
        </a>
      </Link>

      {/*<Link
        href="/video#consulting"        
        as="/#consulting"        
      >*/}
      <a
        href="/#consulting"
        className={[styles.button, styles['button--empty']].join(' ')}
      >
        Consulting and prices
      </a>
      {/*</Link>}*/}
    </header>
  )
}

export default Header
