import * as React from 'react'

function SvgIntegration(props) {
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
        d="M1 11.435h60m-3.913-5.218h-2.609m-2.608 0h-2.61m-2.608 0h-2.608m-6.522 0H6.217m13.044 35.218a2.616 2.616 0 00-2.609 2.608v9.13a2.616 2.616 0 002.609 2.61 2.616 2.616 0 002.609-2.61v-9.13a2.616 2.616 0 00-2.61-2.608zm0 0v-3.913m0 0c5.763 0 10.435-4.672 10.435-10.435 0-5.763-4.672-10.435-10.435-10.435-5.763 0-10.435 4.672-10.435 10.435 0 5.763 4.672 10.435 10.435 10.435zm36.522-9.13h-11.74m11.74 7.825h-20.87m20.87 7.827H40.13m15.653 7.826H28.39M1 1h60v60H1V1z"
        stroke="#0069FF"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
    </svg>
  )
}

export default SvgIntegration
