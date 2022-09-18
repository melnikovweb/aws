import * as React from 'react'

function SvgScale(props) {
  return (
    <svg
      viewBox="0 0 37 36"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M9.5 2.25H4.35l5.941 5.959-1.582 1.582L2.75 3.85V9H.5V0h9v2.25zM27.5 0h9v9h-2.25V3.85L28.291 9.79l-1.582-1.582L32.65 2.25H27.5V0zM8.709 26.209l1.582 1.582L4.35 33.75H9.5V36h-9v-9h2.25v5.15l5.959-5.941zM34.25 32.15V27h2.25v9h-9v-2.25h5.15l-5.941-5.959 1.582-1.582 5.959 5.941zm-22.5-7.4v-13.5h13.5v13.5h-13.5zM14 13.5v9h9v-9h-9z" />
    </svg>
  )
}

export default SvgScale
