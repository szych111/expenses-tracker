import styles from "./Chart.module.css";

export const ChartBar = (props) => {
  let BarFillHeight = "0%";

  if (props.maxValue > 0) {
    BarFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className={styles.chartBar}>
      <div className={styles.chartBar__inner}>
        <div
          className={styles.chartBar__fill}
          style={{ height: BarFillHeight }}
        ></div>
      </div>
      <div className={styles.chartBar__label}>{props.label}</div>
    </div>
  );
};
