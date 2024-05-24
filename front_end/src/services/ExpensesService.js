const baseURL = 'http://localhost:8080/api/expenses'

const ExpensesService =  {
  getExpenses() {
    return fetch(baseURL)
      .then(res => res.json());
  },

  addExpense(expense) {
    console.log(expense)
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(expense),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  },

  updateExpense(expense) {
    return fetch(baseURL + expense.id, {
      method: 'PUT',
      body: JSON.stringify(expense),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  },

  deleteExpense(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    });
  }
};

export default ExpensesService;