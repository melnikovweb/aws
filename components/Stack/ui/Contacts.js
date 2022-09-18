import classnames from 'classnames'

import ContactForm from 'components/ContactUs/ui/Form'
import ContactBanner from 'components/ContactUs/ui/Banner'

import SectionHeader from 'components/SectionHeader'

const Contacts = ({ className }) => (
  <section className={classnames(className, 'page-stack-contacts')}>
    <div className="container">
      <SectionHeader
        className="page-stack-contacts__title"
        title={'LET’S KEEP IN TOUCH!'}
        alignCenter
        uppercaseTitle
      />
      <ContactBanner />
      <SectionHeader
        className="page-stack-contacts__title"
        title={'Drop us a line!'}
        alignCenter
      />
      <ContactForm />
    </div>
  </section>
)

export default Contacts
