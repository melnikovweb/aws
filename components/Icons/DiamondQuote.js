import * as React from 'react'

function SvgDiamondQuote(props) {
  return (
    <svg
      viewBox="0 0 61 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M46.1 33l7.9 8-7.9 8M15.9 33L8 41l7.9 8M16 11l-5 10 20 20 20-20-5-10H16zM11 21h40M37.7 21L31 41M24.3 21L31 41M37.7 21L36 11M24.3 21L26 11"
        stroke="#0069FF"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
    </svg>
  )
}

export default SvgDiamondQuote
