import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from '../../data/transactions.json';
import styles from './TransactionHistory.module.scss';

const Transactions = () => {
  return (
    <ul className={styles.itemsList}>
      <TransactionHistory items={transactions} />
    </ul>
  );
};

export default Transactions;
