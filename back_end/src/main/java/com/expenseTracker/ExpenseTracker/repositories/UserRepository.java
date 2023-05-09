package com.expenseTracker.ExpenseTracker.repositories;

import com.expenseTracker.ExpenseTracker.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface UserRepository extends JpaRepository<User, Long> {
}
