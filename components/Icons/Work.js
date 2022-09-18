import * as React from 'react'

function SvgWork(props) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M26.666 6.667h-5.333V4a2.658 2.658 0 00-2.666-2.667h-5.334A2.657 2.657 0 0010.666 4v2.667H5.333A2.646 2.646 0 002.68 9.333L2.666 24a2.658 2.658 0 002.667 2.667h21.334A2.66 2.66 0 0029.332 24V9.333a2.658 2.658 0 00-2.666-2.666zm-8 0h-5.333V4h5.333v2.667z" />
    </svg>
  )
}

export default SvgWork
