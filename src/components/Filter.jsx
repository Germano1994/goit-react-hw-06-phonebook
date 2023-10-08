import styles from './Filter.module.css';
import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from './redux/contactsSlice';


const Filter = ({ value }) => {
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <label className={styles.label}>
      Filter contacts by name:
      <input
        type="text"
        name="filter"
        value={value}
        onChange={handleFilterChange}
        className={styles.input}
      />
    </label>
  );
};

export default Filter;
