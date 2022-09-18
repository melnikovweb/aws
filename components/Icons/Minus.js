import * as React from 'react'

function SvgMinus(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="Minus_svg__page-stack-counter__button Minus_svg__page-stack-counter__button--disabled"
      {...props}
    >
      <path d="M13 9.143v2H7v-2h6z" fill="#0069FF" />
      <circle cx={10} cy={10.143} r={9.5} stroke="#0069FF" />
    </svg>
  )
}

export default SvgMinus
