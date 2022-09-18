import * as React from 'react'

function SvgPrototype(props) {
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
        d="M12.148 36h-11V1h46v35h-11M1.148 9h46"
        stroke="#0069FF"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <path
        d="M44.148 5h-10"
        stroke="#0069FF"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeDasharray="2 2"
      />
      <path
        d="M29.148 5h-24M30.648 24h-13M12.148 31c0 2.2 1.8 4 4 4s4-1.8 4-4M20.148 31c0 2.2 1.8 4 4 4s4-1.8 4-4M28.148 31c0 2.2 1.8 4 4 4s4-1.8 4-4"
        stroke="#0069FF"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <path
        d="M36.148 29v18h-24V29l12-11 12 11zM24.148 12v3M15.648 15.5l2.1 2.1M32.649 15.5l-2.1 2.1"
        stroke="#0069FF"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
    </svg>
  )
}

export default SvgPrototype
