import * as React from 'react'

function SvgQualityControl(props) {
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
        d="M1.5 9h46m-3-4h-2m-2 0h-2m-2 0h-2m-29 0h25m-12 23l4 4 8-8M1.5 1h46v46h-46V1zm23 41C8.7 36 10.6 20.2 10.6 20.2 20.8 17.5 24.5 14 24.5 14s3.7 3.5 13.9 6.2c0 0 1.9 15.8-13.9 21.8z"
        stroke="#0069FF"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
    </svg>
  )
}

export default SvgQualityControl
