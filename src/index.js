import React from 'react'
import './styles.css'

const Icon = (props) => {
  const { name, color, size } = props
  const converPX = size / 16
  return (
    <i
      aria-hidden='true'
      className={`icon icon-${name}`}
      style={{ color: color, fontSize: `${converPX}rem` }}
    />
  )
}

export default Icon
