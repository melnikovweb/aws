import * as React from 'react'

function SvgShield(props) {
  return (
    <svg
      viewBox="0 0 48 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M14.096 25.357l6.571 6.571L33.81 18.785m-9.857 29.572C-2.004 38.499 1.117 12.542 1.117 12.542 17.875 8.107 23.953 2.357 23.953 2.357s6.079 5.75 22.836 10.185c0 0 3.121 25.957-22.836 35.815z"
        stroke="#0069FF"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
    </svg>
  )
}

export default SvgShield
