import classnames from 'classnames'

import Medical from 'components/Icons/Medical'
import Multimedia from 'components/Icons/Multimedia'
import E_Commerce from 'components/Icons/ECommerce'
import Fintech from 'components/Icons/Fintech'
import Internet from 'components/Icons/Internet'

import TabsSimple from 'components/TabsSimple'

import SwitchBlock from './SwitchBlock'

import areasItems from 'datastore/ManagedServices_AreasTabsList'

const CalculationForm = ({ className }) => {
  return (
    <form className="form">
      <div className={classnames(className, 'calculation-form')}>
        <div className="calculation-form-industry cover-section-box">
          <h2 className="page-box__sub-title">Select your industry</h2>
          <div className="questions">
            <label className="question">
              <input
                name="type-of-hire"
                type="radio"
                className="input-hidden"
              />
              <div className="question-content">
                <div className="question-content_item">
                  <Medical width={46} height={46} className="question-icon" />
                  Medical & Healthcare
                </div>
              </div>
            </label>
            <label className="question">
              <input
                name="type-of-hire"
                type="radio"
                className="input-hidden"
              />
              <div className="question-content">
                <div className="question-content_item">
                  <Multimedia
                    width={46}
                    height={46}
                    className="question-icon"
                  />
                  Multimedia & Entertainment
                </div>
              </div>
            </label>
            <label className="question">
              <input
                name="type-of-hire"
                type="radio"
                className="input-hidden"
              />
              <div className="question-content">
                <div className="question-content_item">
                  <E_Commerce
                    width={46}
                    height={46}
                    className="question-icon"
                  />
                  E-Commerce
                </div>
              </div>
            </label>
            <label className="question">
              <input
                name="type-of-hire"
                type="radio"
                className="input-hidden"
              />
              <div className="question-content">
                <div className="question-content_item">
                  <Internet width={46} height={46} className="question-icon" />
                  Internet of things
                </div>
              </div>
            </label>
            <label className="question">
              <input
                name="type-of-hire"
                type="radio"
                className="input-hidden"
              />
              <div className="question-content">
                <div className="question-content_item">
                  <Fintech width={46} height={46} className="question-icon" />
                  Fintech industry
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className="calculation-form-areas cover-section-box">
          <h2 className="page-box__sub-title">Choose area</h2>
          <TabsSimple className="questions" items={areasItems} />
        </div>
        <div className="calculation-form-resources cover-section-box">
          <h2 className="page-box__sub-title">Additional resources</h2>
          <div className="questions">
            <SwitchBlock
              id="checkboxSwitch-1"
              title="Requirements specification"
              no_label="i have"
              yes_label="i need"
            />
            <SwitchBlock
              id="checkboxSwitch-2"
              title="UI Designer"
              no_label="i have"
              yes_label="i need"
            />
          </div>
        </div>
        <div className="cover-section-footer buttons">
          <button className="button button--big button--empty">
            Clear calculation
          </button>
          <button className="button button--big">Estimate your project</button>
        </div>
      </div>
    </form>
  )
}

export default CalculationForm
