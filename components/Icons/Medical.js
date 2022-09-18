import * as React from 'react'

function SvgMedical(props) {
  return (
    <svg
      viewBox="0 0 49 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M16.5 39v8m16-8v8m-21 0h26m10-13h-46m0-33h46v38h-46V1z"
        stroke="#0069FF"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <mask id="Medical_svg__a" fill="#fff">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.944 8h-8.888v5.556H14.5v8.888h5.556V28h8.888v-5.556H34.5v-8.888h-5.556V8z"
        />
      </mask>
      <path
        d="M20.056 8V6h-2v2h2zm8.888 0h2V6h-2v2zm-8.888 5.556v2h2v-2h-2zm-5.556 0v-2h-2v2h2zm0 8.888h-2v2h2v-2zm5.556 0h2v-2h-2v2zm0 5.556h-2v2h2v-2zm8.888 0v2h2v-2h-2zm0-5.556v-2h-2v2h2zm5.556 0v2h2v-2h-2zm0-8.888h2v-2h-2v2zm-5.556 0h-2v2h2v-2zM20.056 10h8.888V6h-8.888v4zm2 3.556V8h-4v5.556h4zm-7.556 2h5.556v-4H14.5v4zm2 6.888v-8.888h-4v8.888h4zm3.556-2H14.5v4h5.556v-4zm2 7.556v-5.556h-4V28h4zm6.888-2h-8.888v4h8.888v-4zm-2-3.556V28h4v-5.556h-4zm7.556-2h-5.556v4H34.5v-4zm-2-6.888v8.888h4v-8.888h-4zm-3.556 2H34.5v-4h-5.556v4zm-2-7.556v5.556h4V8h-4z"
        fill="#0069FF"
        mask="url(#Medical_svg__a)"
      />
    </svg>
  )
}

export default SvgMedical
