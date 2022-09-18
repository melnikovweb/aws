import { useState } from 'react'
import classnames from 'classnames'

import ExpertIcon from 'components/Icons/Expert'

const Create_Expert = ({ id, className, title, expert_num = 1 }) => {
  let [state, setState] = useState({
    count: 0,
  })

  const icons = []

  for (let i = 0; i < expert_num; i++) {
    icons.push(
      <ExpertIcon
        className={classnames('create-expert-icon', {
          active: i < state.count,
        })}
        key={'expert-icon-' + i}
      />,
    )
  }

  const setInput = e => {
    setState({ count: e.target.value })
  }

  const changeCount = e => {
    e.preventDefault()
    switch (e.target.innerText) {
      case '+': {
        setState({ count: state.count + 1 })
        state.count === expert_num
          ? (e.target.disabled = true)
          : (e.target.disabled = false)
        break
      }
      case '-': {
        setState({ count: state.count - 1 })
        state.count === 0
          ? (e.target.disabled = true)
          : (e.target.disabled = false)
        break
      }
    }
  }

  return (
    <label className={classnames(className, 'create-expert-wrapper')}>
      <div className="create-expert">
        <div className="create-expert-box">
          <button
            onClick={changeCount}
            className="create-expert-btn_mini"
            disabled={state.count === 0 ? true : false}
          >
            -
          </button>
          <div className="create-expert-experts">
            <input
              id={id}
              type="number"
              min={0}
              max={expert_num}
              className="input-hidden"
              value={state.count}
              onChange={setInput}
            />
            {icons}
          </div>
          <button
            onClick={changeCount}
            className="create-expert-btn_mini"
            disabled={state.count === expert_num ? true : false}
          >
            +
          </button>
        </div>
        <span className="create-expert-title">{title}</span>
      </div>
    </label>
  )
}
export default Create_Expert
