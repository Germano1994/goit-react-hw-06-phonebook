import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={styles.label}>
    Filter contacts by name:
    <input
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
      className={styles.input}
    />
  </label>
);

export default Filter;
