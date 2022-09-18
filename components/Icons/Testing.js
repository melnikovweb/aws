import * as React from 'react'

function SvgTesting(props) {
  return (
    <svg
      viewBox="0 0 49 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M1.5 9h46m-3-4h-2m-2 0h-2m-2 0h-2m-5 0h-24m5 35s-1-18 20-20m0 0l-4.7-3.7m4.7 3.7l-3.7 4.7m8.7-7.7l6 6m0-6l-6 6M1.5 1h46v46h-46V1zm32 36a3 3 0 11-6 0 3 3 0 016 0zm-20-19a3 3 0 11-6 0 3 3 0 016 0z"
        stroke="#0069FF"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
    </svg>
  )
}

export default SvgTesting
