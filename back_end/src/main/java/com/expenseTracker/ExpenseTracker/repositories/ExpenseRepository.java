package com.expenseTracker.ExpenseTracker.repositories;

import com.expenseTracker.ExpenseTracker.models.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository

public interface ExpenseRepository extends JpaRepository< Expense,  Long> {
}
