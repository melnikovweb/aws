import Image from 'next/image'
import Section from 'components/Section'

const PartnersAboutUs = ({ list }) => {
  return (
    <Section
      className="page-box__center-style container"
      title={'Partners about us'}
      coverSection={true}
    >
      <div className="page-referral__partners">
        {list.map(({ photo, name, position, review }, index) => (
          <div
            className="page-referral__partners-item"
            key={`partner-list-item-${index}`}
          >
            <div className="page-referral__partners-item-left">
              <div className="page-referral__partners-item-photo">
                {
                  <Image
                    src={photo}
                    alt={name}
                    width={'60'}
                    height={'60'}
                    layout={'fixed'}
                  />
                }
              </div>
              <div className="page-referral__partners-item-info">
                <div className="page-referral__partners-item-name">{name}</div>
                <div className="page-referral__partners-item-position">
                  {position}
                </div>
              </div>
            </div>
            <div className="page-referral__partners-item-review">{review}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}
export default PartnersAboutUs
