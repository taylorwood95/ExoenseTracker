package com.expenseTracker.ExpenseTracker.controllers;

import com.expenseTracker.ExpenseTracker.models.Account;
import com.expenseTracker.ExpenseTracker.models.Expense;
import com.expenseTracker.ExpenseTracker.models.User;
import com.expenseTracker.ExpenseTracker.repositories.AccountRepository;
import com.expenseTracker.ExpenseTracker.repositories.ExpenseRepository;
import com.expenseTracker.ExpenseTracker.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AccountController {

    @Autowired
    AccountRepository accountRepository;

    @GetMapping(value = "/accounts")
    public ResponseEntity<List<Account>> getAllAccounts() {
        return new ResponseEntity<>(accountRepository.findAll(), HttpStatus.ACCEPTED);
    }

    @GetMapping(value = "/accounts/{id}")
    public ResponseEntity getAccount(@PathVariable Long id) {
        return new ResponseEntity<>(accountRepository.findById(id), HttpStatus.ACCEPTED);
    }

    @PostMapping(value = "/accounts")
    public ResponseEntity<String> createAccount(@RequestBody Account account) {
        accountRepository.save(account);
        return new ResponseEntity<>("Created ok", HttpStatus.ACCEPTED);
    }

    @DeleteMapping(value = "/accounts/{id}")
    public ResponseEntity<Expense> deleteAccount(@PathVariable Long id) {
        Account found = accountRepository.getOne(id);
        accountRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.ACCEPTED);
    }

    @PatchMapping(value = "/accounts/{id}")
    public ResponseEntity<Account> updateAccount(@RequestBody Account account) {
        accountRepository.save(account);
        return new ResponseEntity<>(account, HttpStatus.ACCEPTED);
    }
}
