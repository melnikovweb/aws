import React from 'react'
import classnames from 'classnames'
import CloseIcon from 'components/Icons/Close'

const ButtonClose = ({ className, handleClose = () => null }) => (
  <CloseIcon
    className={classnames([className, 'button-close'])}
    onClick={handleClose}
  />
)

export default ButtonClose
