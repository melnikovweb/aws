import * as React from 'react'

function SvgReloadAction(props) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 20 21"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <g
        clipPath="url(#ReloadAction_svg__a)"
        stroke="#0069FF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      >
        <path d="M17.107 9.437a7.188 7.188 0 01-12.215 5.976M2.833 11.15a7.19 7.19 0 0112.223-5.903" />
        <path d="M.625 8.143l2.208 3.006 2.792-2.38M19.375 12.518l-2.268-3.081-2.732 2.456" />
      </g>
      <defs>
        <clipPath id="ReloadAction_svg__a">
          <path transform="translate(0 .643)" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SvgReloadAction
