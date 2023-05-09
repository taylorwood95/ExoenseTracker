package com.expenseTracker.ExpenseTracker.repositories;

import com.expenseTracker.ExpenseTracker.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
