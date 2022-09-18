import React from 'react'
import Link from 'next/link'
import classnames from 'classnames'
import Image from 'next/image'

const Logo = ({ className }) => (
  <Link href="/">
    <a className={classnames([className, 'logo'])}>
      <Image
        src="/l.putin.huilo.svg"
        alt=""
        className="logo__image"
        width={160}
        height={40}
        layout="fixed"
      />
    </a>
  </Link>
)

export default Logo
