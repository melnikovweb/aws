import * as React from 'react'

function SvgLinkedinRound(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <circle cx={12} cy={12} r={12} fill="#006087" />
      <path
        d="M8.838 17V8.904h-2.68V17h2.68zm-1.34-9.202c.935 0 1.516-.622 1.516-1.4C8.997 5.605 8.433 5 7.516 5S6 5.604 6 6.399c0 .777.581 1.399 1.48 1.399h.018zM10.321 17H13v-4.521c0-.242.017-.484.087-.657.194-.484.635-.984 1.375-.984.97 0 1.358.742 1.358 1.83V17H18.5v-4.642c0-2.487-1.322-3.644-3.085-3.644-1.445 0-2.08.811-2.433 1.364H13V8.903h-2.68c.036.76 0 8.097 0 8.097z"
        fill="#fff"
      />
    </svg>
  )
}

export default SvgLinkedinRound
