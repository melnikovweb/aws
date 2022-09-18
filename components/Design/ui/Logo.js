import Link from 'next/link'
import Image from 'next/image'
import classnames from 'classnames'

const Logo = ({ className }) => (
  <Link href="/">
    <a className={classnames([className, 'logo'])}>
      <Image
        src="/static/design/logo.png"
        alt=""
        width={158}
        height={48}
        layout="fixed"
      />
    </a>
  </Link>
)

export default Logo
