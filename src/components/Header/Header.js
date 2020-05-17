/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import Picker from '../Picker/Picker';

export default function Header(props) {
  const {
    onChangeSortingSize,
    onChangeSortingSpeed,
    onStartSorting,
    onRebuildArray,
    onChangeAlgorithm,
  } = props;

  return (
    <div className={styles.root}>
      <div className={classnames(styles.column, styles.algorithmContainer)}>
        <div className={styles.box}>
          <select
            defaultValue="null"
            onChange={onChangeAlgorithm}
            className={styles.algorithmPicker}
          >
            <option value="null" disabled>
              Choose algorithm
            </option>
            <option value="insertion">Insertion Sort</option>
            <option value="selection">Selection Sort</option>
            <option value="heap">Heap Sort</option>
            <option value="quick">Quick Sort</option>
            <option value="bubble">Bubble Sort</option>
          </select>
        </div>
      </div>

      <div className={classnames(styles.column, styles.slidersContainer)}>
        <Picker
          min={5}
          max={300}
          onChangeValue={onChangeSortingSize}
          label="Array Size"
          sufix="items"
        />
        <Picker
          onChangeValue={onChangeSortingSpeed}
          min={5}
          max={300}
          label="Speed Transition "
          sufix="ms"
        />
      </div>

      <div className={classnames(styles.column, styles.actionsContainer)}>
        <button onClick={onRebuildArray} type="button">
          <span>REBUILD Array</span>
        </button>
        <button onClick={() => onStartSorting()} type="button">
          <span>RUN Sorting</span>
        </button>
      </div>
    </div>
  );
}

Header.defaultProps = {
  onChangeSortingSize: () => {},
  onChangeSortingSpeed: () => {},
  onChangeAlgorithm: () => {},
  onRebuildArray: () => {},
  onStartSorting: () => {},
};

Header.propTypes = {
  onChangeSortingSize: PropTypes.func,
  onChangeSortingSpeed: PropTypes.func,
  onRebuildArray: PropTypes.func,
  onChangeAlgorithm: PropTypes.func,
  onStartSorting: () => {},
};
