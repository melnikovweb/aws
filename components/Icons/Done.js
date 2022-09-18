import * as React from 'react'

function SvgDone(props) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M32 0C14.355 0 0 14.354 0 32c0 17.645 14.354 32 32 32 17.645 0 32-14.355 32-32S49.645 0 32 0zm16.219 25.219L30.885 42.552a2.66 2.66 0 01-1.885.782 2.66 2.66 0 01-1.885-.782l-8.667-8.667a2.663 2.663 0 010-3.77 2.663 2.663 0 013.77 0L29 36.896l15.448-15.448a2.663 2.663 0 013.77 0 2.664 2.664 0 010 3.77z" />
    </svg>
  )
}

export default SvgDone
