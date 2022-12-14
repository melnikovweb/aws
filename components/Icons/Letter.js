import * as React from 'react'

function SvgLetter(props) {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M28 5H4a4 4 0 00-4 4v13a4 4 0 004 4h24a4 4 0 004-4V9a4 4 0 00-4-4zM2 10.25l6.999 5.25L2 20.75v-10.5zM30 22c0 1.104-.898 2-2 2H4c-1.103 0-2-.896-2-2l7.832-5.875 4.368 3.277a3 3 0 003.599 0l4.369-3.277L30 22zm0-1.25l-7-5.25 7-5.25v10.5zm-12.801-2.148a1.98 1.98 0 01-1.199.4 1.99 1.99 0 01-1.2-.4L10.665 15.5l-.833-.625L2 9.001V9c0-1.103.897-2 2-2h24c1.102 0 2 .897 2 2l-12.801 9.602z" />
    </svg>
  )
}

export default SvgLetter
