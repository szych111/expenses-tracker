import styles from "./Filter.module.css";

export const Filter = (props) => {
  const onYearSelection = (e) => {
    props.onChangeFilter(e.target.value);
  };

  return (
    <div className={styles.filterContainer}>
      <p>Filter by year</p>
      <select onChange={onYearSelection} default="">
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
};
