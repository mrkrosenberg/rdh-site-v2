import React from 'react'

function SplashSVG() {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1366}
    height={768}
    viewBox="0 0 1024.5 576"
    {...props}
  >
    <defs>
      <clipPath id="a">
        <path d="M16.652 11.246h991.016v553.227H16.652Zm0 0" />
      </clipPath>
      <clipPath id="b">
        <path d="M63.879 11.246h896.234a47.226 47.226 0 0 1 47.227 47.227v459.054c0 26.082-21.145 47.227-47.227 47.227H63.88c-26.082 0-47.227-21.145-47.227-47.227V58.473c0-26.082 21.145-47.227 47.227-47.227Zm0 0" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)">
      <g clipPath="url(#b)">
        <path
          fill="none"
          stroke="#fff"
          strokeWidth={5.99704}
          d="M63.879 11.246h896.234a47.226 47.226 0 0 1 47.227 47.227v459.054c0 26.082-21.145 47.227-47.227 47.227H63.88c-26.082 0-47.227-21.145-47.227-47.227V58.473c0-26.082 21.145-47.227 47.227-47.227Zm0 0"
        />
      </g>
    </g>
  </svg>
  )
}

export default SplashSVG