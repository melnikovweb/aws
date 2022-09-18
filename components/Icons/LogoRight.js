import * as React from 'react'

function SvgLogoRight(props) {
  return (
    <svg
      viewBox="0 0 85 117"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M13.46.59l66.83 49.6c2.72 2.02 4.33 5.21 4.33 8.6 0 3.39-1.61 6.58-4.33 8.6l-66.83 49.6L.69 99.79l55.24-41-55.24-41L13.46.59z" />
      <defs>
        <linearGradient
          id="LogoRight_svg__logoRightGradient"
          x1={0.693}
          y1={58.792}
          x2={84.616}
          y2={58.792}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.239} stopColor="#0069FF" />
          <stop offset={1} stopColor="#00329D" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default SvgLogoRight
