import React from 'react'
import Link from 'next/link'
import classnames from 'classnames'

const ContactUs = ({ className, children, cta }) => (
  <section className={classnames([className, 'contact-us-box'])}>
    <div className="contact-us-box__content">
      <div className="container">{children}</div>
    </div>
    <div className="contact-us-box__footer">
      <Link href={'/contact' + cta}>
        <a className="button button--big">Contact Us</a>
      </Link>
    </div>
  </section>
)

export default ContactUs
