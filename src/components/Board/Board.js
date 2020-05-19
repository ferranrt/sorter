import React from 'react';
import PropTypes from 'prop-types';
import styles from './Board.module.scss';

// eslint-disable-next-line no-unused-vars
const generateKey = (pre) => {
  return `${pre}_${new Date().getTime()}`;
};

export default function Board(props) {
  const { data } = props;

  return (
    <div className={styles.root}>
      {data.map((item, index) => {
        return (
          <p
            style={{ height: `${(100 / data.length) * item}%` }}
            // eslint-disable-next-line react/no-array-index-key
            key={`${index}-${item}`}
          />
        );
      })}
    </div>
  );
}

Board.defaultProps = {
  data: [],
};

Board.propTypes = {
  data: PropTypes.instanceOf(Array),
};
