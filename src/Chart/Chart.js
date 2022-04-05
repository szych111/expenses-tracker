import { ChartBar } from "./ChartBar";
import styles from "./Chart.module.css";

export const Chart = (props) => {
  const dataPointsArr = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPointsArr);

  return (
    <div className={styles.chart}>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
        />
      ))}
    </div>
  );
};
