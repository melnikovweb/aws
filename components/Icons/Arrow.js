import * as React from 'react'

function SvgArrow(props) {
  return (
    <svg
      viewBox="0 0 14 8"
      stroke="#0069FF"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M13 1L7 7 1 1" fill="none" />
    </svg>
  )
}

export default SvgArrow
