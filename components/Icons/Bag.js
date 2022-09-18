import * as React from 'react'

function SvgBag(props) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M34 10H2v20h32V10zM24 6H12v4h12V6z" />
      <path d="M16 21h-6l-8-8M34 13l-8 8h-6M20 24h-4v-4c0-1.1.9-2 2-2s2 .9 2 2v4z" />
    </svg>
  )
}

export default SvgBag
