import * as React from 'react'

function SvgDailyMeeting(props) {
  return (
    <svg
      viewBox="0 0 49 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M34.5 5h7c3.3 0 6 2.8 6 6.3v8.4"
        stroke="#0069FF"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <path
        d="M38.5 1l-4 4 4 4M14.5 43h-7c-3.3 0-6-2.7-6-6v-8"
        stroke="#0069FF"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <path
        d="M10.5 47l4-4-4-4M47.5 29v15.647H31.182L25.147 48v-3.353h-2.235V29H47.5zM44.147 34.588H26.265M40.794 39.059H29.618M26.088 1v15.647H9.771L3.735 20v-3.353H1.5V1h24.588zM22.735 6.588H4.853M19.382 11.059H8.206"
        stroke="#0069FF"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
    </svg>
  )
}

export default SvgDailyMeeting
