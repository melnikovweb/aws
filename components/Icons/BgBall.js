import * as React from 'react'

function SvgBgBall(props) {
  return (
    <svg
      viewBox="0 0 99 99"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <g filter="url(#BgBall_svg__filter0_di)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M33.913 11.246L14.596 35.39c-5.828 7.285-4.638 18.012 2.648 23.841l24.143 19.316c7.285 5.828 18.014 4.638 23.842-2.647l19.317-24.144c5.828-7.285 4.636-18.016-2.648-23.844L57.755 8.596c-7.286-5.83-18.014-4.634-23.842 2.65zM52.6 48.418c-1.805 5.327-3.863 9.23-4.445 10.283 4.089.292 8.235-1.042 11.398-3.885-.343-.504-1.871-2.63-4.385-4.641a20.323 20.323 0 00-2.568-1.757zm-18.29-1.425a15.35 15.35 0 005.339 8.373 15.274 15.274 0 005.392 2.784c.703-1.27 2.894-5.441 4.683-11.064l-.018-.006c-8.426-2.981-14.513-.484-15.396-.087zm3.16-13.562l-.242.295a15.303 15.303 0 00-3.34 10.386c1.183-.434 8.6-2.932 16.167-.064l.496.201c.23-.873.435-1.765.617-2.656-6.608-2.688-11.89-6.713-13.383-7.907l-.315-.255zm14.222 5.31a98.853 98.853 0 001.08-10.376c-4.58-1.07-9.498-.002-13.231 3.031l.116.093c1.11.888 5.771 4.475 12.035 7.252zm12.721 1.922a15.35 15.35 0 00-5.54-9.325 15.332 15.332 0 00-2.96-1.863 83.549 83.549 0 01-1.126 10.481c5.288 1.714 8.925.895 9.626.707zm-2.963 12.11a15.312 15.312 0 003.206-9.453c-.857.209-4.814.99-10.413-.644a48.654 48.654 0 01-.713 2.776l-.085.295a28.96 28.96 0 012.87 2.035c2.736 2.189 4.686 4.447 5.135 4.99zM35.03 31.938c6.274-7.842 17.772-9.111 25.624-2.829 7.852 6.283 9.134 17.776 2.86 25.618-6.276 7.843-17.767 9.112-25.62 2.83-7.852-6.283-9.14-17.775-2.864-25.619z"
        />
      </g>
      <defs>
        <filter
          id="BgBall_svg__filter0_di"
          x={0.898}
          y={0.898}
          width={97.347}
          height={97.347}
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

export default SvgBgBall
