import './Expenses.css';
import React, {useState} from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import Expenseslist from './ExpensesList';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const saveYearChangeData = (enteredYearData) => {
    setFilteredYear(enteredYearData);
    // console.log(filteredYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onYearChangeData={saveYearChangeData}
        />
        <Expenseslist items={filteredExpenses} />
        {/* AN alternative to the ternary operator inside the return statement as such:
        {filteredExpenses.length === 0 ? (
          <p>No expenses found.</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}*/}
      </Card>
    </div>
  );
};

export default Expenses;
