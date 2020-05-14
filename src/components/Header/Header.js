/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <div className={styles.root}>
      <div className={styles.column}>
        <label htmlFor="algorithm">Choose a car:</label>
        <select id="algorithm">
          <option value="insertion">Insertion Sort</option>
          <option value="selection">Selection Sort</option>
          <option value="merge">Merge Sort</option>
          <option value="heap">Heap Sort</option>
          <option value="quick">Quick Sort</option>
          <option value="bubble">Bubble Sort</option>
        </select>
      </div>
      <div className={styles.column}>
        <input type="range" min="1" max="100" className="slider" id="myRange" />
        <input type="range" min="1" max="100" className="slider" id="myRange" />
      </div>
      <div className={styles.column}>
        <button type="button">
          <span>Rebuild Array</span>
        </button>
        <button type="button">
          <span>RUN Sorting</span>
        </button>
      </div>
    </div>
  );
}
