import * as React from 'react'

function SvgGraphics(props) {
  return (
    <svg
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M1 11.435h60m-3.913-5.218h-2.609m-2.608 0h-2.61m-2.608 0h-2.608M6.217 42.74l5.218-5.217 5.217 5.217L28.392 31l6.521 6.522 19.565-19.566m0 0h-7.826m7.826 0v7.827m0 7.826v22.174m-6.522-19.566v19.566m-6.521-16.957v16.957m-6.522-10.435v10.435M28.391 40.13v15.653m-6.521-11.74v11.74m-6.522-7.827v7.827m-6.522-9.13v9.13M1 1h60v60H1V1z"
        stroke="#0069FF"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
    </svg>
  )
}

export default SvgGraphics
