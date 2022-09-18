import { useRef, useEffect, useReducer } from 'react'

const MouseMoveParallax = ({ className, children }) => {
  const el = useRef(null)

  const initialState = {
    posX: 0,
    posY: 0,
  }
  const reducer = (oldState, newState) => {
    return { ...oldState, ...newState }
  }
  const [state, setState] = useReducer(reducer, initialState)

  const mouseMoveHandler = ({
    clientX,
    clientY,
    view: { innerWidth, innerHeight },
  }) => {
    const { top, right, bottom, left } = el.current?.getBoundingClientRect()

    if (bottom < 0 || top > innerHeight || right < 0 || left > innerWidth) {
      return
    }

    setState({
      posX: (20 - (clientX / innerWidth) * 40).toFixed(2),
      posY: ((clientY / innerHeight) * 40 - 20).toFixed(2),
    })
  }

  useEffect(() => {
    document.addEventListener('mousemove', mouseMoveHandler)
    return () => document.removeEventListener('mousemove', mouseMoveHandler)
  }, [])

  return (
    <div
      className={className}
      ref={el}
      style={{
        transform:
          'perspective(1000px) rotateX(' +
          state.posY +
          'deg) rotateY(' +
          state.posX +
          'deg) scale3d(1, 1, 1)',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}

export default MouseMoveParallax
