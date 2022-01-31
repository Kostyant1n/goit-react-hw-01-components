import PropTypes from "prop-types";


const StatisticsListItem = (props) => {
  const { title, stats } = props;

  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>      
      <ul  className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
          </li>
             ))}
        </ul>   
    </section>
  )
};

StatisticsListItem.propTypes = {
    title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  }))
  }

export default StatisticsListItem;