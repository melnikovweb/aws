import * as React from 'react'

function SvgSendArrow(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.092 10.192H4.536m15.556 0L1 19.385l3.536-9.193m15.556 0L1 1l3.536 9.192"
        stroke="#F9F9F9"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SvgSendArrow
