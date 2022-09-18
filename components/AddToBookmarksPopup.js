import PopupStar from 'components/Icons/PopupStar'
import { isMacOs } from 'react-device-detect'

const AddToBookmarksPopup = () => {
  return (
    <div className="popup-press">
      PRESS {isMacOs ? 'CMD' : 'CTR'} + D <br /> BE WISE
      <PopupStar className="popup-press__icon" />
    </div>
  )
}

export default AddToBookmarksPopup
