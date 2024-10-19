import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table_histori}>
      <thead className={css.table_thead}>
        <tr>
          <th className={css.table_cell_top}>Type</th>
          <th className={css.table_cell_top}>Amount</th>
          <th className={css.table_cell_top}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id} className={css.table_row}>
            <td className={css.table_cell}>{item.type}</td>
            <td className={css.table_cell}>{item.amount}</td>
            <td className={css.table_cell}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
