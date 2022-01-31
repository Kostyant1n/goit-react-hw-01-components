import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transactions from "../../data/transactions.json";



const Transactions = () => {
  return (   
      <ul  className="items-list">            
              <TransactionHistory                  
                items={transactions}        
              />    
      </ul>  
  );
};

export default Transactions;
