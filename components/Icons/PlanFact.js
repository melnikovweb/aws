import * as React from 'react'

function SvgPlanFact(props) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M40.895 2H7v55.684h46V14.105M40.895 2L53 14.105M40.895 2v12.105H53M11.842 28.632l3.632 3.631L22.737 25m3.631 2.421h9.685m-9.685 4.842h21.79M11.842 43.158l3.632 3.631 7.263-7.263m3.631 2.421h9.685m-9.685 4.842h21.79"
        stroke="#0069FF"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
    </svg>
  )
}

export default SvgPlanFact
