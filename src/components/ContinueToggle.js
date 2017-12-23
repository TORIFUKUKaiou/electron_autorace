import React from 'react';
import Toggle from 'material-ui/Toggle'

const styles = {
  block: {
    maxWidth: 250,
  }
}

const ContinueToggle = ({toggled, onToggle}) => (
  <div style={styles.block}>
    <Toggle
      label="連続再生"
      defaultToggled={toggled}
      onToggle={onToggle}
    />
  </div>
)

export default ContinueToggle