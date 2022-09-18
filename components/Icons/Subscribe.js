import * as React from 'react'

function SvgSubscribe(props) {
  return (
    <svg
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M19.5 38l3.7 3.7 7.3-7.4"
        stroke="#0069FF"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <path
        d="M25 48c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z"
        stroke="#0069FF"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <path
        d="M17 32H2V2h46v30H33"
        stroke="#0069FF"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <path
        d="M47.8 2.2L25 19.1 2.2 2.2M48 32L31.3 14.9M2 32l16.7-17.1"
        stroke="#0069FF"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
    </svg>
  )
}

export default SvgSubscribe
