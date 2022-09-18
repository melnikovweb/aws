import * as React from 'react'

function SvgHome(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.5 7.5L10 1.667 17.5 7.5v9.167a1.667 1.667 0 01-1.667 1.666H4.167A1.667 1.667 0 012.5 16.667V7.5z"
        stroke="#6A7184"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 18.333V10h5v8.333"
        stroke="#6A7184"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SvgHome
