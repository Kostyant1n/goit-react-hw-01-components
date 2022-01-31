import './App.css';
import Profiles from './components/Profile/Profile';
import Statistic from './components/Statistics/Statistics';
import Friends from './components/FriendList/Friends';
import Transactions from './components/TransactionHistory/Transaction';

function App() {
  return (
    <>
      <Profiles />
      <Statistic />
      <Friends />
      <Transactions />
    </>
  );
}

export default App;
