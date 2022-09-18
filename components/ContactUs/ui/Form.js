import { useReducer, useState, useEffect } from 'react'
import classnames from 'classnames'
import CircularProgress from '@material-ui/core/CircularProgress'

import { useRouter } from 'next/router'
import list from 'datastore/ContactUs_ReasonsList'

// TODO - update this component to new design
const Form = ({ company_cta, className, sendHandler = () => {} }) => {
  const [referer, setReferer] = useState('')
  const router = useRouter()

  const initialState = {
    name: '',
    email: '',
    body: '',
    cta: '',
    cta_page: '',
    referer: '',
    reasons: [],
  }
  const reducer = (oldState, newState) => {
    return { ...oldState, ...newState }
  }
  const [state, setState] = useReducer(reducer, initialState)
  const [loading, setLoaing] = useState(false)

  const changeValue = e => {
    const { value, name } = e.target

    setState({ [name]: value })
  }

  const changeReasons = e => {
    const { name } = e.currentTarget
    const reasons = [...state.reasons]
    const index = reasons.indexOf(name)

    if (index !== -1) {
      reasons.splice(index, 1)
    } else {
      reasons.push(name)
    }

    setState({ reasons })
  }

  const validate = () => {
    const errors = []

    Object.keys(state).map(key => {
      if ((key === 'email' || key === 'name') && !state[key]) {
        errors.push(key)
      }
    })

    return errors.length === 0
  }

  const send = e => {
    e.preventDefault()

    let headers = new Headers()
    let formData = new FormData()
    let cta_page = router.query.page
    let cta = router.query.cta
    if (company_cta) cta = company_cta
    if (!cta) cta = 'CTA missing'
    if (!cta_page) cta_page = 'CTA page missing'

    headers.append('Accept', 'application/json')
    headers.append('Charset', 'UTF-8')

    formData.append('email', state.email)
    formData.append('cta', cta)
    formData.append('cta_page', cta_page)
    formData.append('referer', referer)
    formData.append('name', state.name)
    formData.append('message', state.body)
    formData.append('reasons', state.reasons.join(', '))

    setLoaing(true)

    fetch('/api/v1/contact/request', {
      method: 'POST',
      headers: headers,
      body: formData,
      credentials: 'include',
    })
      .finally(() => setLoaing(false))
      .finally(() => setState(initialState))
      .finally(() => sendHandler())
  }

  useEffect(() => {
    let referer = localStorage.getItem('referer')
    if (referer) setReferer(referer)
  }, [])
  return (
    <form className="form" onSubmit={send}>
      <div className={classnames(className, 'contact-form')}>
        <div className="contact-form__content">
          <div className="contact-form__col">
            <div className="form-box">
              <h6 className="form-box__title">
                <label htmlFor="name">Your Name</label>
              </h6>
              <div className="form-box__conten">
                <input
                  type="name"
                  className="field"
                  name="name"
                  id="name"
                  value={state.name}
                  onChange={changeValue}
                />
              </div>
            </div>

            <div className="form-box">
              <h6 className="form-box__title">
                <label htmlFor="email">Email</label>
              </h6>
              <div className="form-box__content">
                <input
                  type="email"
                  className="field"
                  name="email"
                  id="email"
                  value={state.email}
                  onChange={changeValue}
                />
              </div>
            </div>

            <div className="form-box">
              <h6 className="form-box__title">
                <label htmlFor="body">Your message</label>
              </h6>
              <div className="form-box__content">
                <textarea
                  type="body"
                  className="field"
                  name="body"
                  id="body"
                  value={state.body}
                  onChange={changeValue}
                />
              </div>
            </div>
          </div>

          <div className="contact-form__col">
            <h6 className="form-box__title">Services needed</h6>
            <div className="form-box__content">
              <div className="reasons-list">
                {list.map(({ title, id }) => (
                  <div
                    className="reasons-list__item"
                    key={'services-needed-' + id}
                  >
                    <button
                      type="button"
                      name={id}
                      className={classnames({
                        'reasons-list__button': true,
                        button: true,
                        'button--big': true,
                        'button--empty': true,
                        'is-active': state.reasons.indexOf(id) !== -1,
                      })}
                      onClick={changeReasons}
                    >
                      {title}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form__footer">
          <button
            className={classnames({
              button: true,
              'button--big': true,
              loading,
            })}
            disabled={!validate() || loading}
          >
            {loading ? <CircularProgress colorprimary="#fff" /> : 'Send'}
          </button>
        </div>
      </div>
    </form>
  )
}

export default Form
