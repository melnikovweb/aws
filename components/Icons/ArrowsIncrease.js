import * as React from 'react'

function SvgArrowsIncrease(props) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M40 1l-7 7h4v39h6V8h4l-7-7zM17 19h4v28h6V19h4l-7-7-7 7zM1 29h4v18h6V29h4l-7-7-7 7z"
        stroke="#0069FF"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SvgArrowsIncrease
