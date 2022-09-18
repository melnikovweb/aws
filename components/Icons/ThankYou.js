import * as React from 'react'

function SvgThankYou(props) {
  return (
    <svg
      viewBox="0 0 64 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M39.4 39.4h8V9H21a4 4 0 110-8h23.2v8"
        stroke="#0069FF"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 5v30.4a4 4 0 004 4h5.6M37.8 44.04L33 49l-4.8-4.96m4.8-16.8V49 27.24z"
        stroke="#0069FF"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SvgThankYou
