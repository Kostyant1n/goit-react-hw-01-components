import Statistics from "../Statistics/StatisticsListItem";
import data from '../../data/data.json';


const Statistic = () => {
    return (
      <Statistics
        title="Upload stats"
        stats={data} />
    )
}
export default Statistic;
