import classnames from 'classnames'
import Image from 'next/image'
import QuoteIcon from 'components/Icons/Quote'
import SectionHeader from 'components/SectionHeader'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.less'
import 'swiper/components/navigation/navigation.less'
import 'swiper/components/pagination/pagination.less'
import 'swiper/components/scrollbar/scrollbar.less'

import list from 'datastore/Reviews_ReviewsLIst'

const Reviews = ({
  className,
  title,
  description,
  alignTitleCenter = false,
  uppercaseTitle = false,
}) => {
  const settings = {
    pagination: { clickable: true },
    loop: true,
    spaceBetween: 0,
    initialSlide: 1,
    slidesPerView: 3,
    centeredSlides: true,
    breakpoints: {
      320: {
        spaceBetween: 10,
        slidesPerView: 1,
      },
      768: {
        spaceBetween: 100,
        slidesPerView: 1,
      },
      992: {
        spaceBetween: 150,
        slidesPerView: 1,
      },
      1200: {
        spaceBetween: 0,
        slidesPerView: 3,
      },
    },
  }
  SwiperCore.use([Navigation, Pagination])
  return (
    <section className={classnames([className, 'reviews container-fluid'])}>
      {title || description ? (
        <SectionHeader
          title={title}
          description={description}
          alignCenter={alignTitleCenter}
          uppercaseTitle={uppercaseTitle}
          className="reviews__header"
        />
      ) : null}
      <div className="reviews__content">
        <Swiper {...settings}>
          {list.map(
            ({ cover, title, description, body, flag, country }, index) => (
              <SwiperSlide className="review-box" key={'review' + index}>
                <div className="review-box__pic review-media">
                  <Image
                    src={cover}
                    layout="fill"
                    className="review-media__image"
                    alt=""
                  />
                </div>
                <div className="review-box__content review">
                  <h4 className="review__title">{title}</h4>
                  <h6 className="review__description">{description}</h6>
                  <div className="review__location">
                    <div className="review__flag">
                      <Image
                        layout="responsive"
                        width={''}
                        height={''}
                        src={flag}
                        alt=""
                      />
                    </div>
                    <span>{country}</span>
                  </div>
                  <blockquote className="review__blockquote">{body}</blockquote>
                  <QuoteIcon className="review__icon" />
                </div>
              </SwiperSlide>
            ),
          )}
        </Swiper>
      </div>
    </section>
  )
}

export default Reviews
