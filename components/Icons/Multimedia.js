import * as React from 'react'

function SvgMultimedia(props) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M36.5 27v11h5m0 0a3 3 0 106 0 3 3 0 00-6 0zm-29-11v11h-5m0 0a3 3 0 11-6 0 3 3 0 016 0zm22-11v14m0 0a3 3 0 100 6 3 3 0 000-6zm-10-14v14m0 0a3 3 0 100 6 3 3 0 000-6zm28-19h-46m7-3v6m20-13l-8-4.6v9.2l8-4.6zM1.5 1h46v26h-46V1z"
        stroke="#0069FF"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
    </svg>
  )
}

export default SvgMultimedia
