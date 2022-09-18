import * as React from 'react'

function SvgPrice(props) {
  return (
    <svg
      viewBox="0 0 60 52"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M2 16h40v4h2V0H0v30h14v-2H2V16zm0-2v-4h40v4H2zM42 2v6H2V2h40z" />
      <path d="M16 22v30h44V22H16zm42 28H18V24h40v26zM20 18H4v2h16v-2z" />
      <path d="M26 47v1h24v-1c0-2.8 2.2-5 5-5h1V32h-1c-2.8 0-5-2.2-5-5v-1H26v1c0 2.8-2.2 5-5 5h-1v10h1c2.8 0 5 2.2 5 5zm-4-13c3-.4 5.5-2.8 5.9-5.9H48c.4 3 2.8 5.5 5.9 5.9v6.1c-3 .4-5.5 2.8-5.9 5.9H27.9c-.4-3.1-2.8-5.5-5.9-5.9V34z" />
      <path d="M38 44c3.9 0 7-3.1 7-7s-3.1-7-7-7-7 3.1-7 7 3.1 7 7 7zm0-12c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z" />
    </svg>
  )
}

export default SvgPrice
