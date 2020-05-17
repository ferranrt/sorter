import React, { useState, useEffect } from 'react';
import styles from './MainView.module.scss';
import Header from '../Header/Header';
import Board from '../Board/Board';
import {
  SelectionSort,
  BubbleSort,
  InsertSort,
  QuickSort,
} from '../../utils/Algorithms';

export default function MainView() {
  const [sortingElements, setSortingElements] = useState(50);
  const [sortingSpeed, setSortingSpeed] = useState(50);
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
      // alert('No algorithm selected');
      QuickSort(
        boardData,
        0,
        boardData.length - 1,
        setBoardData,
        sortingSpeed,
        1,
      );
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
          QuickSort(
            boardData,
            0,
            boardData.length - 1,
            setBoardData,
            sortingSpeed,
            1,
          );
          break;
        default:
          SelectionSort(boardData, setBoardData, sortingSpeed);
          break;
      }
    }

    console.log('Must start sorting with: ', currentAlgorith);
    console.log('Sorting Speed: ', sortingSpeed);
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
      />
      <Board data={boardData} speed={sortingSpeed} />
    </div>
  );
}
