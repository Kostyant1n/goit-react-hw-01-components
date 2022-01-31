import PropTypes from "prop-types";

const TransactionHistory = (props) => {
  const { items } = props;
 
  return (
    <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

      {items.map(({ id, type, amount, currency}) => (      
  <tbody key={id}>
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
        </tbody>
          ))}
</table>
  );
};

TransactionHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default TransactionHistory;
