import { useState } from "react";
import Form from "./components/Form";
import ExpensFilter from "./components/ExpensFilter";
import ListExpenses from "./expense-tracker/components/ListExpenses";


function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [Expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 21, category: "Utilities" },
    { id: 2, description: "bbb", amount: 15, category: "Utilities" },
    { id: 3, description: "ccc", amount: 1, category: "Entertainement" },
    { id: 4, description: "ddd", amount: 6, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? Expenses.filter((e) => e.category === selectedCategory)
    : Expenses;

  return (
    <div>
      <Form />
      <ExpensFilter onSelectCategory={(x) => setSelectedCategory(x)} />
      <ListExpenses
        expenses={visibleExpenses}
        onDelete={(x) => setExpenses(Expenses.filter((obj) => obj.id !== x))}
      />
    </div>
  );
}

export default App;
