import React from 'react'
import PropTypes from 'prop-types'
import styles from './auto-scaling-text.module.css'
// console.log(styles)
// commits!
function getScale(node) {
  debugger // to make breakpoint here
  // console.log(node);
  if (!node) {
    // console.log('in here')
    return 1
  }
  const parentNode = node.parentNode

  const availableWidth = parentNode.offsetWidth
  const actualWidth = node.offsetWidth
  const actualScale = availableWidth / actualWidth

  if (actualScale < 1) {
    return actualScale * 0.9
  }
  return 1
}

function AutoScalingText({children}) {
  const nodeRef = React.useRef()
  //At 🏁first nodeRef is 🦃 undefined becasue it's not attached to anything
  const scale = getScale(nodeRef.current)
  return (
    <div
      className={styles.autoScalingText}
      style={{transform: `scale(${scale},${scale})`}}
      ref={nodeRef}
      data-testid="total"
    >
      {children}
    </div>
  )
}
AutoScalingText.propTypes = {
  children: PropTypes.node,
}

export default AutoScalingText
