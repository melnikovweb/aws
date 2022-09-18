import * as React from 'react'

function SvgFeedback(props) {
  return (
    <svg
      viewBox="0 0 64 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M47.667 38.333a13.658 13.658 0 00-10-12.533l-1.734-.533-11.733 11.6-11.733-11.6-1.734.533C5 27.533 1 33 1 39.133v12.534h32M37 45h21.333M41 50.333h13.333M34.333 11c0 5.523-4.477 10-10 10-5.522 0-10-4.477-10-10s4.478-10 10-10c5.523 0 10 4.477 10 10zM33 38.333V57h19.467l7.2 4v-4h2.666V38.333H33z"
        stroke="#0069FF"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
    </svg>
  )
}

export default SvgFeedback
