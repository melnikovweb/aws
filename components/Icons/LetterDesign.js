import * as React from 'react'

function SvgLetterDesign(props) {
  return (
    <svg
      viewBox="0 0 38 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M37 1H1v24h36V1z"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <path
        d="M36.85 1.15L19 14.65 1.15 1.15M37 25L23.95 11.35M1 25l13.05-13.65"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
    </svg>
  )
}

export default SvgLetterDesign
