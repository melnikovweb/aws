import * as React from 'react'

function SvgChat(props) {
  return (
    <svg
      viewBox="0 0 52 52"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M11.714 40.085h1a1 1 0 00-.825-.984l-.175.984zm0 10.915h-1a1 1 0 001.6.8l-.6-.8zM26 40.286v-1a1 1 0 00-.6.2l.6.8zM2 14C2 7.373 7.373 2 14 2V0C6.268 0 0 6.268 0 14h2zm0 13.286V14H0v13.286h2zM11.889 39.1C6.269 38.104 2 33.192 2 27.286H0c0 6.893 4.98 12.62 11.54 13.784l.349-1.97zm-1.175.984V51h2V40.085h-2zm1.6 11.715L26.6 41.086l-1.2-1.6L11.114 50.2l1.2 1.6zM38 39.286H26v2h12v-2zm12-12c0 6.627-5.373 12-12 12v2c7.732 0 14-6.268 14-14h-2zM50 14v13.286h2V14h-2zM38 2c6.627 0 12 5.373 12 12h2c0-7.732-6.268-14-14-14v2zM14 2h24V0H14v2z" />
    </svg>
  )
}

export default SvgChat
