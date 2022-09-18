import * as React from 'react'

function SvgGraphic(props) {
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
        d="M20.565 51.87V61m20.87-9.13V61m-27.392 0h33.913M61 44.044H1M37.522 21.87a2.609 2.609 0 105.217 0 2.609 2.609 0 00-5.217 0zm0 0h-11.74m0 0a2.609 2.609 0 11-5.217 0 2.609 2.609 0 015.218 0zm16.174-1.826l8.087-8.088M11.956 33.087l9.392-9.391M1 1h60v50.87H1V1zm53.478 9.13a2.609 2.609 0 11-5.217 0 2.609 2.609 0 015.217 0zM12.74 34.913a2.609 2.609 0 11-5.217 0 2.609 2.609 0 015.217 0z"
        stroke="#0069FF"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
    </svg>
  )
}

export default SvgGraphic
