import React from 'react';
import styles from './MainView.module.scss';
import Header from '../Header/Header';

export default function MainView() {
  return (
    <div className={styles.root}>
      <Header />
    </div>
  );
}
