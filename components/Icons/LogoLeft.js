import * as React from 'react'

function SvgLogoLeft(props) {
  return (
    <svg
      viewBox="0 0 85 117"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M71.38 116.86L4.55 67.26a10.718 10.718 0 01-4.33-8.6c0-3.39 1.61-6.58 4.33-8.6L71.38.46l12.77 17.2-55.24 41 55.24 41-12.77 17.2z" />
      <defs>
        <linearGradient
          id="LogoLeft_svg__logoLeftGradient"
          x1={0.222}
          y1={58.658}
          x2={84.146}
          y2={58.658}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.239} stopColor="#0069FF" />
          <stop offset={1} stopColor="#00329D" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default SvgLogoLeft
