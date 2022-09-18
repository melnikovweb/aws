import Image from 'next/image'
import classnames from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import Section from 'components/Section'

import list from 'datastore/Clients_ClientsList'

const Clients = ({ className }) => {
  const settings = {
    pagination: { clickable: true },
    loop: true,
    spaceBetween: 10,
    initialSlide: 1,
    slidesPerView: 5,
    breakpoints: {
      1200: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 3,
      },
      320: {
        slidesPerView: 1,
      },
    },
  }
  SwiperCore.use([Navigation, Pagination])
  return (
    <Section
      className={classnames([className, 'clients'])}
      title="Clients"
      description="Our experience and skills helped us to create solutions that can scale to billions of objects, spanning hundreds of machines across multiple data centers with no single point of failure for companies around the globe."
      coverSection={true}
    >
      <div className="clients__content">
        <Swiper {...settings}>
          {list.map(({ logo, team, duration, technology }, index) => (
            <SwiperSlide key={'client-' + index}>
              <div className="clients-item">
                <div className="clients-item-wrapper">
                  <div className="clients-item-logo">
                    <Image src={logo} width={'100'} height={'40'} alt="" />
                  </div>
                  <div className="clients-item-team">{team}</div>
                  <div className="clients-item-duration">{duration}</div>
                  <div className="clients-item-technology">{technology}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  )
}

export default Clients
