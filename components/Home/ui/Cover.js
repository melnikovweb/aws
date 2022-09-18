import Link from 'next/link'
import classnames from 'classnames'

import ScrollParallax from 'lib/ScrollParallax'
import MouseMoveParallax from 'lib/MouseMoveParallax'

import LogoLeftIcon from 'components/Icons/LogoLeft'
import LogoRightIcon from 'components/Icons/LogoRight'

const Cover = ({ className }) => (
  <section className={classnames([className, 'home-cover', 'container'])}>
    <div className="home-cover__logo">
      <MouseMoveParallax className="logo-box">
        <ScrollParallax>
          <LogoLeftIcon className="logo-box__left" width="85" height="117" />
        </ScrollParallax>
        <ScrollParallax direction="right">
          <LogoRightIcon className="logo-box__right" width="85" height="117" />
        </ScrollParallax>
      </MouseMoveParallax>
    </div>
    <div className="home-cover__content home-cover-content">
      <ScrollParallax direction="bottom" speed=".2">
        <h1 className="home-cover-content__title">
          Custom Software Development Company
        </h1>
      </ScrollParallax>
      <ScrollParallax direction="bottom" speed=".3">
        <h3 className="home-cover-content__description">
          We create mobile apps & websites
        </h3>
      </ScrollParallax>
    </div>
    <div className="home-cover__footer">
      <Link href="/services">
        <a className="button button--big">Our services</a>
      </Link>
    </div>
  </section>
)

export default Cover
