import React from 'react';
import styles from './App.module.scss';
import MainView from '../MainView/MainView';

export default function App() {
  return (
    <div className={styles.App}>
      <MainView />
    </div>
  );
}
