import React, { useState, useEffect } from 'react';
import styles from './MainView.module.scss';
import Header from '../Header/Header';
import Board from '../Board/Board';
import { SelectionSort } from '../../utils/Algorithms';
export default function MainView() {
  const [sortingElements, setSortingElements] = useState(50);
  const [currentAlgorith, setCurrentAlgorithm] = useState(null);
  const [boardData, setBoardData] = useState(
    Array.from({ length: sortingElements }, () =>
      Math.floor(Math.random() * sortingElements),
    ),
  );

  const handleChangeAlgorithm = (event) => {
    setCurrentAlgorithm(event.target.value);
  };

  const handleStartSorting = () => {
    SelectionSort(boardData, setBoardData);
    console.log('Must start sorting with: ', currentAlgorith);
  };

  const handleRebuidArray = () => {
    setBoardData(
      Array.from({ length: sortingElements }, () =>
        Math.floor(Math.random() * sortingElements),
      ),
    );
  };
  useEffect(() => {
    setBoardData(
      Array.from({ length: sortingElements }, () =>
        Math.floor(Math.random() * sortingElements),
      ),
    );
  }, [sortingElements]);

  const handleChangeArraySize = (size) => {
    setSortingElements(size);
  };

  const [sortingSpeed, setSortingSpeed] = useState(50);
  return (
    <div className={styles.root}>
      <Header
        onChangeSortingSize={handleChangeArraySize}
        onChangeSortingSpeed={setSortingSpeed}
        onRebuildArray={handleRebuidArray}
        onChangeAlgorithm={handleChangeAlgorithm}
        onStartSorting={handleStartSorting}
      />
      <Board data={boardData} speed={sortingSpeed} />
    </div>
  );
}
