import { useReducer } from 'react'
import classnames from 'classnames'
import Link from 'next/link'

const BecomeRefarral = ({ className, submitFormClickAction = () => {} }) => {
  const initialState = {
    name: '',
    phone: '',
    email: '',
    type: 0,
    relationship: '',
    confirm: false,
  }
  const reducer = (oldState, newState) => {
    return { ...oldState, ...newState }
  }

  const [state, setState] = useReducer(reducer, initialState)

  const changeValue = e => {
    const { value, name } = e.target
    setState({ [name]: value })
  }

  const changeValueCheckbox = e => {
    const { checked, name } = e.target
    setState({ [name]: checked })
  }
  const submitFormClick = e => {
    e.preventDefault()
    //submit form ...

    submitFormClickAction()
  }

  return (
    <form>
      <div className={classnames(className, 'become-referral-form')}>
        <div className={'become-referral-form-main'}>
          <div className="form-box">
            <input
              type="name"
              className="field"
              name="name"
              id="name"
              value={state.name}
              onChange={changeValue}
              placeholder={'Name'}
            />
          </div>
          <div className="form-box">
            <input
              type="phone"
              className="field"
              name="phone"
              id="phone"
              value={state.phone}
              onChange={changeValue}
              placeholder={'Phone'}
            />
          </div>
          <div className="form-box">
            <input
              type="email"
              className="field"
              name="email"
              id="email"
              value={state.email}
              onChange={changeValue}
              placeholder={'Email'}
            />
          </div>
          <div className="form-box">
            <select
              className="field field--select"
              name="type"
              id="type"
              value={state.type}
              onChange={changeValue}
            >
              <option disabled value={0}>
                {'Type'}
              </option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </div>
          <div className="form-box form-box-relationship">
            <input
              type="relationship"
              className="field"
              name="relationship"
              id="relationship"
              value={state.relationship}
              onChange={changeValue}
              placeholder={'Business relationship with referes'}
            />
          </div>
        </div>
        <div className={'become-referral-form-footer'}>
          <div className="form-box">
            <input
              className="styled-checkbox"
              id="styled-checkbox-confirm"
              type="checkbox"
              name="confirm"
              checked={state.confirm}
              onChange={changeValueCheckbox}
            />
            <label htmlFor="styled-checkbox-confirm">
              I confirm that my personal data will be processed
            </label>
          </div>
          <div className="form-box">
            <button className="button button--big" onClick={submitFormClick}>
              Apply
            </button>
          </div>
          <div className="form-box form-box-privacy">
            <Link href="/">
              <a className="become-referral-form-privacy link">
                Privacy Policy
              </a>
            </Link>
          </div>
        </div>
      </div>
    </form>
  )
}

export default BecomeRefarral
