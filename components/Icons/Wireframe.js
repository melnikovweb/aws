import * as React from 'react'

function SvgWireframe(props) {
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
        d="M36.148 1h-24v14h24V1zM47.148 37h-10v10h10V37zM29.148 37h-10v10h10V37zM11.148 37h-10v10h10V37zM24.148 15v22"
        stroke="#0069FF"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <path
        d="M42.148 37V25.5h-36V37"
        stroke="#0069FF"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
    </svg>
  )
}

export default SvgWireframe
