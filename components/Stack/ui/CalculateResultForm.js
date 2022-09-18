import { useReducer, useState } from 'react'
import classnames from 'classnames'
import CircularProgress from '@material-ui/core/CircularProgress'
import Tags from 'components/Tags'
import People from 'components/Icons/People'

const CalculateResultForm = props => {
  let data = { ...props.data }
  const currentTerm = props.term

  const team_total = Object.values(data).reduce((acc, expert) => {
    return acc + expert
  }, 0)

  data = Object.entries(data).filter(item => item[1] > 0)

  const initialState = {
    name: '',
    email: '',
    comment: '',
    team: data,
    techStack: currentTerm,
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

  const validate = () => {
    const errors = []

    Object.keys(state).map(key => {
      if (key === 'team' && state.team.length === 0) {
        errors.push(key)
      } else if (!state[key]) {
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
    formData.append('message', state.comment)
    formData.append('team', state.team.map(item => item.join(': ')).join('; '))
    formData.append('TechStack', state.techStack)

    setLoaing(true)

    fetch('/api/v1/contact/request', {
      method: 'POST',
      headers: headers,
      body: formData,
      credentials: 'include',
    })
      .finally(() => setLoaing(false))
      .finally(() => setState(initialState))
  }

  return (
    <>
      <p className="popup-content__message">
        Dear customer, please leave your E-mail so that we can contact you later
        and precize the price.
      </p>
      <form className="calculate-result-form" onSubmit={send}>
        <div className="estimation-form">
          <div className="form-box">
            <input
              type="name"
              className="field"
              name="name"
              placeholder="Your name"
              value={state.name}
              onChange={changeValue}
            />
          </div>
          <div className="form-box">
            <input
              type="email"
              className="field"
              name="email"
              placeholder="Your Phone or Corporate E-mail"
              value={state.email}
              onChange={changeValue}
            />
          </div>
          <div className="form-box">
            <textarea
              className="field"
              name="comment"
              placeholder="Leave Your Comments"
              value={state.comment}
              onChange={changeValue}
            ></textarea>
          </div>
          <div className="estimation-data">
            <div className="form-section">
              <div className="form-section-team">
                <div className="form-section-title">Your Team:</div>
                <div className="form-section-team-value">
                  <People width={30} height={22} />
                  {team_total}
                </div>
              </div>
              <ul className="form-section-team-list">
                {data.map((item, i) => (
                  <li
                    key={`team-expert-` + i}
                    className="form-section-team-list-item"
                  >
                    {item[0]}
                    <span>{item[1]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="form__footer">
            <button
              className={classnames({
                button: true,
                'button--big': true,
                loading,
              })}
              disabled={!validate() || loading}
            >
              {loading ? (
                <CircularProgress colorprimary="#fff" />
              ) : (
                'Send Request'
              )}
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
export default CalculateResultForm
