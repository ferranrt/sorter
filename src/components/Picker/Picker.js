import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Picker.module.scss';

export default function Picker(props) {
  const { label, min, max, value, onChangeValue, sufix } = props;
  const [displayValue, setDisplayValue] = useState(value);
  const handleValueChange = (event) => {
    setDisplayValue(event.target.value);
    onChangeValue(event.target.value);
  };
  return (
    <div className={styles.root}>
      <input
        onChange={handleValueChange}
        className={styles.slider}
        type="range"
        min={min}
        max={max}
      />
      <p className={styles.label}>
        {`${label}:`}
        <span>{displayValue}</span>
        {` ${sufix}`}
      </p>
    </div>
  );
}

Picker.defaultProps = {
  label: 'Empty Label',
  min: 1,
  max: 100,
  value: 50,
  sufix: '',
  onChangeValue: () => {},
};
Picker.propTypes = {
  label: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  onChangeValue: PropTypes.func,
  sufix: PropTypes.string,
};
