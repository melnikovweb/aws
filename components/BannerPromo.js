import classnames from 'classnames'
import PromoLogoIcon from 'components/Icons/PromoLogo'
import ArrowRightIcon from 'components/Icons/ArrowRight'

const BannerPromo = ({
  children,
  className,
  hasLogo = false,
  isWide = false,
  isMedium = false,
  isLarge = false,
  isTextMedium = false,
  isTextLarge = false,
  hasAction = false,
  hasActionIcon = true,
  handleAction = () => null,
  isActionDisabled = false,
  actionText = '',
  hasBgImg = false,
  fullBgImg = false,
}) => (
  <section
    className={classnames([
      className,
      'banner-promo',
      { 'banner-promo--medium': isMedium },
      { 'banner-promo--large': isLarge },
      { 'banner-promo--with-bg-image': hasBgImg },
      { 'banner-promo--with-full-bg-image': fullBgImg },
    ])}
  >
    <div
      className={classnames([
        'banner-promo__container',
        { 'banner-promo__container--wide': isWide },
        'container',
      ])}
    >
      {hasLogo ? <PromoLogoIcon className="banner-promo__logo" /> : null}
      {children ? (
        <p
          className={classnames([
            'banner-promo__text',
            { 'banner-promo__text--medium': isTextMedium },
            { 'banner-promo__text--large': isTextLarge },
          ])}
        >
          {children}
        </p>
      ) : null}
      {hasAction ? (
        <button
          className="banner-promo__action button button--big"
          onClick={handleAction}
          disabled={isActionDisabled}
        >
          {actionText}
          {hasActionIcon ? (
            <ArrowRightIcon className="banner-promo__action-icon" />
          ) : null}
        </button>
      ) : null}
    </div>
  </section>
)

export default BannerPromo
