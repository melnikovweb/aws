import * as React from 'react'

function SvgHaveIdea(props) {
  return (
    <svg
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M19.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15zM37 31c-.2-4.4-3.2-8.2-7.5-9.4l-1.3-.4-8.8 8.7-8.8-8.7-1.3.4C5 22.9 2 27 2 31.6V41h24"
        stroke="#0069FF"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <path
        d="M26 31v14h14.6l5.4 3v-3h2V31H26zM29 36h16M32 40h10"
        stroke="#0069FF"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
    </svg>
  )
}

export default SvgHaveIdea
