import * as React from 'react'

function SvgLocation(props) {
  return (
    <svg
      viewBox="0 0 20 21"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <g
        clipPath="url(#Location_svg__clip0)"
        stroke="#0069FF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17.5 8.833c0 5.834-7.5 10.834-7.5 10.834s-7.5-5-7.5-10.834a7.5 7.5 0 0115 0z" />
        <path d="M10 11.333a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
      </g>
      <defs>
        <clipPath id="Location_svg__clip0">
          <path transform="translate(0 .5)" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SvgLocation
