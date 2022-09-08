import React from 'react'
import './styles.css'

const Icon = (props) => {
  const { name, color, size } = props
  const converPX = size / 16

  const styles = {
    display: 'block',
    position: 'relative',
    width: `${converPX}rem`,
    height: `${converPX}rem`,
    color: color,
    fontSize: `${converPX}rem`
  }

  return <i aria-hidden='true' className={`icon icon-${name}`} style={styles} />
}

export default Icon
