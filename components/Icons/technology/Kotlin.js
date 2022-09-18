import * as React from 'react'

function SvgKotlin(props) {
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
        d="M0 60l30.1-30.1L60 60H0z"
        fill="url(#Kotlin_svg__paint0_linear)"
      />
      <path d="M0 0h30.1L0 32.5V0z" fill="url(#Kotlin_svg__paint1_linear)" />
      <path
        d="M30.1 0L0 31.7V60l30.1-30.1L60 0H30.1z"
        fill="url(#Kotlin_svg__paint2_linear)"
      />
      <defs>
        <linearGradient
          id="Kotlin_svg__paint0_linear"
          x1={15.959}
          y1={74.014}
          x2={24.357}
          y2={40.646}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.097} stopColor="#0095D5" />
          <stop offset={0.301} stopColor="#238AD9" />
          <stop offset={0.621} stopColor="#557BDE" />
          <stop offset={0.864} stopColor="#7472E2" />
          <stop offset={1} stopColor="#806EE3" />
        </linearGradient>
        <linearGradient
          id="Kotlin_svg__paint1_linear"
          x1={4.209}
          y1={12.059}
          x2={21.831}
          y2={-3.056}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.118} stopColor="#0095D5" />
          <stop offset={0.418} stopColor="#3C83DC" />
          <stop offset={0.696} stopColor="#6D74E1" />
          <stop offset={0.833} stopColor="#806EE3" />
        </linearGradient>
        <linearGradient
          id="Kotlin_svg__paint2_linear"
          x1={-10.102}
          y1={55.164}
          x2={45.731}
          y2={-0.67}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.107} stopColor="#C757BC" />
          <stop offset={0.214} stopColor="#D0609A" />
          <stop offset={0.425} stopColor="#E1725C" />
          <stop offset={0.605} stopColor="#EE7E2F" />
          <stop offset={0.743} stopColor="#F58613" />
          <stop offset={0.823} stopColor="#F88909" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default SvgKotlin
