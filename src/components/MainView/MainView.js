import React, { useState, useEffect } from 'react';

import Board from '../Board/Board';
import Header from '../Header/Header';
import styles from './MainView.module.scss';
import {
  SelectionSort,
  BubbleSort,
  InsertSort,
  QuickSort,
} from '../../utils/Algorithms';

export default function MainView() {
  const [sortingElements, setSortingElements] = useState(50);
  const [sortingSpeed, setSortingSpeed] = useState(20);
  const [currentAlgorith, setCurrentAlgorithm] = useState(null);
  const [boardData, setBoardData] = useState(
    Array.from({ length: sortingElements }, () =>
      Math.floor(Math.random() * sortingElements),
    ),
  );

  useEffect(() => {
    setBoardData(
      Array.from({ length: sortingElements }, () =>
        Math.floor(Math.random() * sortingElements),
      ),
    );
  }, [sortingElements]);

  const handleChangeAlgorithm = (event) => {
    setCurrentAlgorithm(event.target.value);
  };

  const handleStartSorting = () => {
    if (currentAlgorith === null) {
      alert('No algorithm selected.');
    } else {
      switch (currentAlgorith) {
        case 'selection':
          SelectionSort(boardData, setBoardData, sortingSpeed);
          break;
        case 'bubble':
          BubbleSort(boardData, setBoardData, sortingSpeed);
          break;
        case 'insertion':
          InsertSort(boardData, setBoardData, sortingSpeed);
          break;
        case 'quick':
          QuickSort(boardData, setBoardData, sortingSpeed);
          break;
        default:
          SelectionSort(boardData, setBoardData, sortingSpeed);
          break;
      }
    }
  };

  const handleRebuidArray = () => {
    setBoardData(
      Array.from({ length: sortingElements }, () =>
        Math.floor(Math.random() * sortingElements),
      ),
    );
  };

  const handleChangeArraySize = (size) => {
    setSortingElements(size);
  };

  return (
    <div className={styles.root}>
      <Header
        onChangeSortingSize={handleChangeArraySize}
        onChangeSortingSpeed={setSortingSpeed}
        onRebuildArray={handleRebuidArray}
        onChangeAlgorithm={handleChangeAlgorithm}
        onStartSorting={handleStartSorting}
        defaultSpeed={sortingSpeed}
        defaultSize={sortingElements}
      />
      <Board data={boardData} speed={sortingSpeed} />
    </div>
  );
}
