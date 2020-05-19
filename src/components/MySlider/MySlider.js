import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from '@material-ui/core/Slider';
import styles from './MySlider.module.scss';

export default function MySlider(props) {
  const { label, min, max, onChangeValue, def, sufix } = props;
  const [displayValue, setDisplayValue] = useState(def);
  const handleValueChange = (value) => {
    setDisplayValue(value);
    onChangeValue(value);
  };
  return (
    <div className={styles.root}>
      <p className={styles.label}>{`${label.toUpperCase()}`}</p>
      <Slider
        value={displayValue}
        className={styles.slider}
        min={min}
        max={max}
        onChange={(event, value) => {
          handleValueChange(value);
        }}
      />
      <p className={styles.label}>
        <span>{displayValue}</span>
        {` ${sufix}`}
      </p>
    </div>
  );
}

MySlider.defaultProps = {
  label: 'Empty Label',
  min: 1,
  max: 100,
  def: 50,
  sufix: '',
  onChangeValue: () => {},
};
MySlider.propTypes = {
  label: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  onChangeValue: PropTypes.func,
  sufix: PropTypes.string,
  def: PropTypes.number,
};
