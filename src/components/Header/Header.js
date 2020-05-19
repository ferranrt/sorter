import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import styles from './Header.module.scss';
import Slider from '../MySlider/MySlider';

export default function Header(props) {
  const {
    onChangeSortingSize,
    onChangeSortingSpeed,
    onStartSorting,
    onRebuildArray,
    onChangeAlgorithm,
    defaultSpeed,
    defaultSize,
  } = props;

  return (
    <div className={styles.root}>
      <div className={classnames(styles.column, styles.algorithmContainer)}>
        <div className={styles.box}>
          <Select fullWidth defaultValue="null" onChange={onChangeAlgorithm}>
            <MenuItem value="null" disabled>
              Choose a sorting algorithm
            </MenuItem>
            <MenuItem value="insertion">Insertion Sort</MenuItem>
            <MenuItem value="selection">Selection Sort</MenuItem>
            <MenuItem value="quick">Quick Sort</MenuItem>
            <MenuItem value="bubble">Bubble Sort</MenuItem>
            <MenuItem value="combo">Combo Sort</MenuItem>
          </Select>
        </div>
      </div>

      <div className={classnames(styles.column, styles.slidersContainer)}>
        <Slider
          min={5}
          max={200}
          def={defaultSize}
          onChangeValue={onChangeSortingSize}
          label="Array Size"
          sufix="items"
        />
        <Slider
          onChangeValue={onChangeSortingSpeed}
          min={5}
          max={50}
          def={defaultSpeed}
          label="Speed Transition "
          sufix="ms"
        />
      </div>

      <div className={classnames(styles.column, styles.actionsContainer)}>
        <Button
          onClick={onRebuildArray}
          variant="contained"
          color="primary"
          startIcon={<Icon>build</Icon>}
        >
          REBUILD
        </Button>
        <Button
          onClick={onStartSorting}
          variant="contained"
          color="secondary"
          startIcon={<Icon>sort</Icon>}
          className={styles.run}
        >
          RUN SORTING
        </Button>
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
  defaultSpeed: 25,
  defaultSize: 50,
};

Header.propTypes = {
  onChangeSortingSize: PropTypes.func,
  onChangeSortingSpeed: PropTypes.func,
  onRebuildArray: PropTypes.func,
  onChangeAlgorithm: PropTypes.func,
  onStartSorting: PropTypes.func,
  defaultSpeed: PropTypes.number,
  defaultSize: PropTypes.number,
};
