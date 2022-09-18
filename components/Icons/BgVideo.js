import * as React from 'react'

function SvgBgVideo(props) {
  return (
    <svg
      viewBox="0 0 139 121"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <g filter="url(#BgVideo_svg__filter0_di)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M88.02 49.362l-20.525 23.72c-.784.98-4.543 1.698-5.03.54L51.39 47.3c-.49-1.165 2.675-3.368 3.939-3.21l30.487 3.062c1.29.147 3.018 1.193 2.203 2.21zM115.5 19.595C110.253 7.12 95.876 1.257 83.395 6.508L25.6 30.821C13.113 36.075 7.257 50.45 12.505 62.924L23.82 89.819c5.253 12.488 19.623 18.353 32.111 13.099l57.794-24.313c12.482-5.25 18.344-19.627 13.09-32.115l-11.314-26.895z"
        />
      </g>
      <defs>
        <filter
          id="BgVideo_svg__filter0_di"
          x={0.581}
          y={0.583}
          width={138.16}
          height={120.261}
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

export default SvgBgVideo
