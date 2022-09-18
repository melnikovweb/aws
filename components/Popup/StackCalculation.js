import classnames from 'classnames'
import PopupLayout from 'layouts/PopupLayout'

import CalculateResultForm from 'components/Stack/ui/CalculateResultForm'

const StackCalculation = ({ className, data, term }) => {
  return (
    <div className={classnames([className, 'popup-content'])}>
      <CalculateResultForm data={data} term={term} />
    </div>
  )
}

export default ({ isShown, onClose, data, term }) => (
  <PopupLayout isVisible={isShown} closePopup={onClose}>
    <StackCalculation data={data} term={term} />
  </PopupLayout>
)
