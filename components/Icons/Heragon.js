import * as React from 'react'

function SvgHeragon(props) {
  return (
    <svg
      viewBox="0 0 68 72"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <g filter="url(#Heragon_svg__filter0_dd)">
        <path d="M29 13.887a10 10 0 0110 0l11.65 6.726a10 10 0 015 8.66v13.454a10 10 0 01-5 8.66L39 58.113a10 10 0 01-10 0l-11.65-6.726a10 10 0 01-5-8.66V29.274a10 10 0 015-8.66L29 13.886z" />
      </g>
      <path d="M31.32 51.402a1.201 1.201 0 001.348-.38l10.18-12.68c.3-.373.364-.891.163-1.33a1.214 1.214 0 00-1.1-.718H39.84c-1.3 0-2.355-1.036-2.355-2.314v-9.03a1.25 1.25 0 00-.804-1.178 1.194 1.194 0 00-1.348.38l-10.18 12.68c-.3.373-.364.892-.163 1.33.2.438.629.718 1.1.718h2.072c1.301 0 2.356 1.037 2.356 2.315v9.03c0 .528.32.998.803 1.177z" />
      <defs>
        <filter
          id="Heragon_svg__filter0_dd"
          x={0.349}
          y={0.547}
          width={67.301}
          height={70.906}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={4} dy={4} />
          <feGaussianBlur stdDeviation={4} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={-4} dy={-4} />
          <feGaussianBlur stdDeviation={4} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.14 0" />
          <feBlend in2="effect1_dropShadow" result="effect2_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}

export default SvgHeragon
