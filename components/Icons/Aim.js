import * as React from 'react'

function SvgAim(props) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M30 0v8.75M0 30h8.75M30 60v-8.75M60 30h-8.75m-9 12.5v-3.625c0-3.25-2.375-6-5.375-6.875L36 31.75l-6 6-6-6-.875.25c-3 .875-5.25 3.75-5.25 6.875V42.5m24.499-24.874c6.834 6.834 6.834 17.914 0 24.748s-17.915 6.834-24.749 0-6.834-17.914 0-24.748 17.915-6.834 24.749 0zm-7.499 6.124a4.875 4.875 0 11-9.75 0 4.875 4.875 0 019.75 0zM55 30c0 13.807-11.193 25-25 25S5 43.807 5 30 16.193 5 30 5s25 11.193 25 25z"
        stroke="#0069FF"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
    </svg>
  )
}

export default SvgAim
