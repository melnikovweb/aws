import ReactModal from 'react-modal'
import cn from 'classnames'

import ButtonClose from 'components/ButtonClose'

const PopupLayout = ({
  children,
  closePopup,
  notice = false,
  isVisible = false,
  isWide = false,
  isExtraWide = false,
  bordered = false,
  ...props
}) => {
  return (
    <ReactModal
      isOpen={isVisible}
      onRequestClose={closePopup}
      ariaHideApp={false}
      overlayClassName={notice ? 'notification' : 'popup-wrap'}
      className={cn([
        'popup',
        { 'popup--wide': isWide },
        { 'popup--extra-wide': isExtraWide },
        { 'popup--bordered': bordered },
      ])}
      {...props}
    >
      {children}
      <ButtonClose className="popup__close" handleClose={closePopup} />
    </ReactModal>
  )
}

export default PopupLayout
