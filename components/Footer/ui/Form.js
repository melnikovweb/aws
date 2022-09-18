import { useState, useRef } from 'react'
import classnames from 'classnames'
import CircularProgress from '@material-ui/core/CircularProgress'
import SendArrow from 'components/Icons/SendArrow'
import { useRouter } from 'next/router'

const Form = ({ className, sendHandler = () => {} }) => {
  const [state, setState] = useState('')
  const [loading, setLoaing] = useState(false)
  const fieldType = useRef('')
  const router = useRouter()

  const changeValue = e => {
    setState(e.target.value)
  }

  const validate = () => {
    const regExEmail = /.+@.+\..+/i
    const regExPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/

    if (regExEmail.test(state)) {
      fieldType.current = 'email'
      return true
    }

    if (regExPhone.test(state)) {
      fieldType.current = 'msisdn'
      return true
    }

    return false
  }

  const validateInput = value => {
    return !value ? true : validate()
  }

  const send = e => {
    e.preventDefault()

    let headers = new Headers()
    let formData = new FormData()

    headers.append('Accept', 'application/json')
    headers.append('Charset', 'UTF-8')
    formData.append(fieldType.current, state)
    formData.append('name', 'Footer name')
    formData.append('cta', 'footer_form')
    formData.append('page', router.pathname)

    setLoaing(true)

    fetch('/api/v1/contact/request', {
      method: 'POST',
      headers: headers,
      body: formData,
      credentials: 'include',
    })
      .finally(() => setLoaing(false))
      .finally(() => setState(''))
      .finally(() => (fieldType.current = ''))
      .finally(() => sendHandler())
  }

  return (
    <form className="form" onSubmit={send}>
      <div className={classnames(className, 'footer-form')}>
        <div className="footer-form__content">
          <input
            type="text"
            className={classnames('field', { invalid: !validateInput(state) })}
            name="email"
            id="email"
            placeholder="Phone or E-mail"
            value={state}
            onChange={changeValue}
          />
        </div>
        <button
          className={classnames({
            button: true,
            loading,
          })}
          disabled={!validate() || loading}
        >
          {loading ? (
            <CircularProgress
              style={{ width: '20px', height: '20px', color: '#fff' }}
            />
          ) : (
            <SendArrow />
          )}
        </button>
      </div>
    </form>
  )
}

export default Form
