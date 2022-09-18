import QuoteIcon from 'components/Icons/Quote'
import Image from 'next/image'

function ReviewItem(props) {
  const { cover, title, description, flag, country, body } = props.feedback

  return (
    <div className="review-box">
      <div className="review-box__pic review-media">
        <div className="review-media__image">
          <Image src={cover} alt="" layout="fixed" width={100} height={100} />
        </div>
      </div>
      <div className="review-box__content review">
        <h4 className="review__title">{title}</h4>
        <h6 className="review__description">{description}</h6>
        <div className="review__location">
          <div className="review__flag">
            <Image src={flag} alt="" layout="fill" />
          </div>
          <span>{country}</span>
        </div>
        <blockquote className="review__blockquote">{body}</blockquote>
        <QuoteIcon className="review__icon" />
      </div>
    </div>
  )
}

export default ReviewItem
