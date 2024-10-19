import css from './TransactionHistory.module.css'

export default function TransactionHistory({ items }) {
  return (
    <table className= {css.table_histori}>
  <thead>
    <tr>
      <th className= {css.table_cell}>Type</th>
      <th className= {css.table_cell}>Amount</th>
      <th className= {css.table_cell}>Currency</th>
    </tr>
  </thead>

      <tbody>
        {items.map(item => {
          return (
            <tr key = {item.id} className= {css.table_row}>
              <td className= {css.table_cell}>{item.type }</td>
              <td className= {css.table_cell}>{item.amount}</td>
              <td className= {css.table_cell}>{item.currency}</td>
            </tr>
          )
        })}

  </tbody>
</table>
  )
}