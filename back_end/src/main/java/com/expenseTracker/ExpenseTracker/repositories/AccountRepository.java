package com.expenseTracker.ExpenseTracker.repositories;

import com.expenseTracker.ExpenseTracker.models.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Long> {
}
