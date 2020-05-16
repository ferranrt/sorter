import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Board.module.scss';

const generateKey = (pre) => {
  return `${pre}_${new Date().getTime()}`;
};

export default function Board(props) {
  const { speed, data } = props;

  return (
    <div className={styles.root}>
      {data.map((item, index) => {
        return (
          <p
            style={{ height: `${(100 / data.length) * item}%` }}
            key={generateKey(index)}
          />
        );
      })}
    </div>
  );
}

Board.defaultProps = {
  speed: 20,
  data: [],
};

Board.propTypes = {
  speed: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array,
};
