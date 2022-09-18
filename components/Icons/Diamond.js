import * as React from 'react'

function SvgDiamond(props) {
  return (
    <svg
      viewBox="0 0 64 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M14.667 7L9 18.333 31.667 41l22.666-22.667L48.667 7h-34zM9 18.333h45.333M39.26 18.333L31.667 41M24.073 18.333L31.667 41M39.26 18.333L37.333 7M24.073 18.333L26 7"
        stroke="#0069FF"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
    </svg>
  )
}

export default SvgDiamond
