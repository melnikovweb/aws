import * as React from 'react'

function SvgClose(props) {
  return (
    <svg
      viewBox="0 0 18 18"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M17.601.412a1.36 1.36 0 00-1.925 0L9 7.075 2.324.398A1.361 1.361 0 00.399 2.323L7.075 9 .399 15.676a1.362 1.362 0 001.925 1.925L9 10.925l6.676 6.676a1.36 1.36 0 101.925-1.925L10.925 9l6.676-6.676a1.368 1.368 0 000-1.912z" />
    </svg>
  )
}

export default SvgClose
