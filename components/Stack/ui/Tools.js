import classnames from 'classnames'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.less'
import 'swiper/components/navigation/navigation.less'
import 'swiper/components/pagination/pagination.less'
import SectionHeader from 'components/SectionHeader'
import ArrowQuoteIcon from 'components/Icons/ArrowQuote'

export const SliderArrow = ({ className, onClick }) => (
  <ArrowQuoteIcon className={className} onClick={onClick} />
)

const defaultSettings = {
  pagination: {
    clickable: true,
  },
  initialSlide: 0,
  slidesPerView: 5,
  slidesPerGroup: 5,
  speed: 500,
  breakpoints: {
    1200: {
      slidesPerView: 5,
      slidesPerGroup: 5,
    },
    768: {
      pagination: {
        clickable: true,
      },
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    320: {
      pagination: false,
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },
}

export const ToolsItem = ({ className, Icon, name }) => (
  <div className={classnames(className, 'page-stack-tool')}>
    {Icon ? (
      <Icon width="60" height="60" className="page-stack-tool__icon" />
    ) : null}
    {name ? <p className="page-stack-tool__name">{name}</p> : null}
  </div>
)

const Tools = ({
  className,
  title,
  description,
  list = [],
  settings = {},
  children,
}) => {
  const toolsSliderSettings = { ...defaultSettings, ...settings }
  SwiperCore.use([Navigation, Pagination])
  return (
    <section className={classnames(className, 'page-stack-tools container')}>
      <SectionHeader title={title} description={description} />
      <div className="page-stack-tools__slider">
        <Swiper navigation {...toolsSliderSettings}>
          {list.map(({ Icon, name }, index) => (
            <SwiperSlide key={'tools-item' + index}>
              <ToolsItem Icon={Icon} name={name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {children}
    </section>
  )
}

export default Tools
