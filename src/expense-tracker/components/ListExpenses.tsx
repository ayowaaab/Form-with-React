
export interface Expense {
  id: number;
  amount: number;
  category: string;
  description: string;
}
interface Props {
  expenses: Expense[];
  onDelete: (x: number) => void;
}

function ListExpenses({ expenses, onDelete }: Props) {

  if (expenses.length === 0) return null;
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
          <th scope="col">Category</th>
          <th scope="col"></th>
        </tr>
      </thead>

      <tbody>
        {expenses.map((e) => (

          <tr key={e.id}>
            <td>{e.description}</td>
            <td>{"$" + e.amount.toFixed(2)}</td>
            <td>{e.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(e.id)}
                >
                Delete
              </button>
            </td>
          </tr>
        ))}
        <tr>
          <th scope="row">Total</th>
          <td colSpan={3}>{"$" + expenses.reduce((total, value) => total + value.amount,0).toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ListExpenses;
