import classnames from 'classnames'

import UploadFile from 'components/UploadFile'

const EstimateSpecForm = ({ className }) => {
  return (
    <form className="form">
      <div className={classnames(className, 'estimate-form')}>
        <div className="estimate-form__content">
          <div className="form-box">
            <input
              type="email"
              className="field"
              name="email"
              id="email"
              placeholder="Your E-mail"
            />
          </div>
          <div className="form-box">
            <UploadFile id="upload-file" />
          </div>
        </div>
        <div className="form__footer">
          <button className="button button--big">Send</button>
        </div>
      </div>
    </form>
  )
}

export default EstimateSpecForm
