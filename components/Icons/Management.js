import * as React from 'react'

function SvgManagement(props) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M7 26h15M7 26v9m0-9l15 9m0-9v9m0-9L7 35m15 0H7m12 8h10M11 14H3v25h42V14h-8M26 26h15v9H26v-9zm8-13.7V9.7l-2.4-.4c-.2-.9-.6-1.7-1-2.5l1.4-2L30.1 3l-2 1.4c-.8-.5-1.6-.8-2.5-1L25.3 1h-2.6l-.4 2.4c-.9.2-1.7.6-2.5 1l-2-1.4L16 4.9l1.4 2c-.5.8-.8 1.6-1 2.5l-2.4.3v2.6l2.4.4c.2.9.6 1.7 1 2.5l-1.4 2 1.8 1.8 2-1.4c.8.5 1.6.8 2.5 1l.4 2.4h2.6l.4-2.4c.9-.2 1.7-.6 2.5-1l2 1.4 1.8-1.8-1.4-2c.5-.8.8-1.6 1-2.5l2.4-.4zM27 11a3 3 0 11-6 0 3 3 0 016 0zm16 36H5l-4-4v-4h46v4l-4 4z"
        stroke="#0069FF"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
    </svg>
  )
}

export default SvgManagement
