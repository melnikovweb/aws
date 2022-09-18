import * as React from 'react'

function SvgBgMusic(props) {
  return (
    <svg
      viewBox="0 0 251 251"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <g filter="url(#BgMusic_svg__filter0_di)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M47.23 39.79l-33.083 90.774c-9.981 27.386 4.265 57.959 31.65 67.94l90.768 33.081c27.385 9.981 57.956-4.259 67.937-31.644l33.083-90.774c9.981-27.385-4.259-57.956-31.651-67.94L115.174 8.15C87.788-1.831 57.211 12.405 47.23 39.79zm128.988 86.169c.983.359 1.979.662 2.988.927l.007.002 7.226-19.827c-14.934-6.712-22.914-23.159-18.951-39.05l-17.061-6.219-30.488 83.107c-3.72 10.207-15.666 14.96-25.866 11.243-10.207-3.72-15.46-15-11.74-25.207 3.717-10.2 15-15.461 25.206-11.741.568.207 1.089.483 1.614.761.18.095.36.19.542.283l6.501-17.836a45.45 45.45 0 01-.589-.261c-.53-.236-1.057-.471-1.608-.672-19.99-7.286-42.106 3.015-49.392 23.006-7.285 19.99 3.018 42.1 23.008 49.385 19.984 7.284 42.098-3.011 49.383-23.002l17.85-48.976a33.836 33.836 0 0021.37 24.077z"
        />
      </g>
      <defs>
        <filter
          id="BgMusic_svg__filter0_di"
          x={0.958}
          y={0.959}
          width={249.816}
          height={249.814}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={6} />
          <feGaussianBlur stdDeviation={5} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.958333 0 0 0 0 0.958333 0 0 0 0.03 0" />
          <feBlend in2="shape" result="effect2_innerShadow" />
        </filter>
      </defs>
    </svg>
  )
}

export default SvgBgMusic
