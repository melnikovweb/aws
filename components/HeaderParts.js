import classnames from 'classnames'
import Image from 'next/image'

const HeaderParts = ({ className, leftImgUrl, rightImgUrl, children }) => {
  return (
    <div className={classnames(className, 'page__header-parts')}>
      <div
        className={classnames('page__header-parts-left', {
          'page__header-parts-left-image': leftImgUrl,
        })}
      >
        {leftImgUrl ? (
          <Image src={leftImgUrl} width={'928'} height={'866'} layout="fixed" />
        ) : null}
      </div>
      <div
        className={classnames('page__header-parts-right', {
          'page__header-parts-right-image': rightImgUrl,
        })}
      >
        {rightImgUrl ? (
          <Image
            src={rightImgUrl}
            width={'928'}
            height={'866'}
            layout="fixed"
          />
        ) : null}
      </div>
      <div className="page__header-parts-content">{children}</div>
    </div>
  )
}

export default HeaderParts
