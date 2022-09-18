import * as React from 'react'

function SvgMouse(props) {
  return (
    <svg
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M9.64 1H2.684v9.565h10V4.043M9.64 1l3.044 3.043M9.64 1v3.043h3.044m-1.74 6.522v2.174H.51v-10h2.174m1.304 1.304h3.479M3.988 6.217h7.392M3.988 8.391h7.392m6.521 6.957v1.304m0-3.478v-1.087c0-1.087-.87-1.957-1.956-1.957-1.087 0-1.957.87-1.957 1.957v3.478c0 2.261-1.87 4.13-4.13 4.13-2.261 0-4.13-1.869-4.13-4.13V12.74M17.9 21a2.616 2.616 0 01-2.608-2.609v-2.174A2.616 2.616 0 0117.9 13.61a2.616 2.616 0 012.609 2.608v2.174A2.616 2.616 0 0117.901 21z"
        stroke="#0069FF"
        strokeMiterlimit={10}
      />
    </svg>
  )
}

export default SvgMouse
