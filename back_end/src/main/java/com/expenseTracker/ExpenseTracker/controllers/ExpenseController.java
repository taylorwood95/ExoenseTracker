package com.expenseTracker.ExpenseTracker.controllers;

import com.expenseTracker.ExpenseTracker.ExpenseTrackerApplication;
import com.expenseTracker.ExpenseTracker.models.Expense;
import com.expenseTracker.ExpenseTracker.repositories.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.function.HandlerFilterFunction;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class ExpenseController {

    @Autowired
    ExpenseRepository expenseRepository;

    @GetMapping(value = "/expenses")
    public ResponseEntity<List<Expense>> getAllExpenses() {
        return new ResponseEntity<>(expenseRepository.findAll(), HttpStatus.ACCEPTED);
    }

    @GetMapping(value = "/expenses/{id}")
    public ResponseEntity getExpense(@PathVariable Long id) {
        return new ResponseEntity<>(expenseRepository.findById(id), HttpStatus.ACCEPTED);
    }

    @PostMapping(value = "/expenses")
    public ResponseEntity<Expense> createExpense(@RequestBody Expense expense) {
        expenseRepository.save(expense);
        return new ResponseEntity<>(expense, HttpStatus.ACCEPTED);
    }

    @DeleteMapping(value = "/expenses/{id}")
    public ResponseEntity<Expense> deleteExpense(@PathVariable Long id) {
        Expense found = expenseRepository.getOne(id);
        expenseRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.ACCEPTED);
    }

    @PatchMapping(value = "/expenses/{id}")
    public ResponseEntity<Expense> updateExpense(@RequestBody Expense expense) {
        expenseRepository.save(expense);
        return new ResponseEntity<>(expense, HttpStatus.ACCEPTED);
    }

}
