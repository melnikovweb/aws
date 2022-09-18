import { useReducer } from 'react'
import classnames from 'classnames'

const ContactUsForm = ({ className }) => {
  const initialState = {
    name: '',
    email: '',
    body: '',
  }
  const reducer = (oldState, newState) => {
    return { ...oldState, ...newState }
  }
  const [state, setState] = useReducer(reducer, initialState)

  const changeValue = e => {
    const { value, name } = e.target

    setState({ [name]: value })
  }

  const validate = () => {
    const errors = []

    Object.keys(state).map(key => {
      if (!state[key]) {
        errors.push(key)
      }
    })

    return errors.length === 0
  }

  const send = e => {
    e.preventDefault()

    let headers = new Headers()
    let formData = new FormData()

    headers.append('Accept', 'application/json')
    headers.append('Charset', 'UTF-8')

    formData.append('email', state.email)
    formData.append('name', state.name)
    formData.append('message', state.body)

    setLoading(true)

    fetch('/api/v1/contact/request', {
      method: 'POST',
      headers: headers,
      body: formData,
      credentials: 'include',
    })
      .finally(() => setLoading(false))
      .finally(() => setState(initialState))
  }

  return (
    <form
      className={classnames(className, 'form contacts-form')}
      onSubmit={send}
    >
      <div className="contacts-form__content">
        <div className="form-box">
          <input
            type="name"
            className="field"
            name="name"
            id="name"
            value={state.name}
            placeholder="Your Name"
            onChange={changeValue}
          />
        </div>
        <div className="form-box">
          <input
            type="email"
            className="field"
            name="email"
            id="email"
            value={state.email}
            placeholder="Email"
            onChange={changeValue}
          />
        </div>
        <div className="form-box">
          <input
            type="body"
            className="field"
            name="body"
            id="body"
            value={state.body}
            placeholder="Your message"
            onChange={changeValue}
          />
        </div>
      </div>
      <div className="form-box">
        <button className="button" disabled={!validate()}>
          Send
        </button>
      </div>
    </form>
  )
}
export default ContactUsForm
