import * as React from 'react'

function SvgPaperPlane(props) {
  return (
    <svg
      viewBox="0 0 30 30"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M15.494 25c-.463 0-1.6-.192-2.188-1.962L11.72 18.28l-4.759-1.585c-1.631-.545-1.926-1.537-1.958-2.082-.031-.544.15-1.565 1.708-2.291l14.92-6.964c1.352-.628 2.52-.405 3.08.475.293.46.519 1.272-.07 2.535l-6.963 14.92C16.983 24.777 16.008 25 15.493 25zm-7.07-10.582l5.37 1.788 1.79 5.368 6.263-13.422-13.423 6.266z" />
    </svg>
  )
}

export default SvgPaperPlane
