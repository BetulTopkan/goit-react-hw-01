import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) { 
    return (
      <table className={css.transactionTable}>
            <thead className={css.headTable}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.type.charAt(0).toUpperCase()+ item.type.slice(1)}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}