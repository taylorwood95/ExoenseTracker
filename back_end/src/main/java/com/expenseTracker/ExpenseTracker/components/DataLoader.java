package com.expenseTracker.ExpenseTracker.components;


import com.expenseTracker.ExpenseTracker.models.CategoryType;
import com.expenseTracker.ExpenseTracker.models.Expense;
import com.expenseTracker.ExpenseTracker.repositories.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Profile("!test")
@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    ExpenseRepository expenseRepository;

    public DataLoader(){}



    @Override
    public void run(ApplicationArguments args) throws Exception {
        Expense expense1 = new Expense("Electricity", 120.0, CategoryType.BILLS);
        expenseRepository.save(expense1);

        Expense expense2 = new Expense("Netflix", 12.50, CategoryType.SUBSCRIPTIONS);
        expenseRepository.save(expense2);

        Expense expense3 = new Expense("Mortgage", 550, CategoryType.MORTGAGE);
        expenseRepository.save(expense3);

        Expense expense4 = new Expense("Gig", 30, CategoryType.ENTERTAINMENT);
        expenseRepository.save(expense4);

        Expense expense5 = new Expense("Eggs", 2.50, CategoryType.GROCERIES);
        expenseRepository.save(expense2);

        Expense expense6 = new Expense("Nandos", 36.20, CategoryType.EATING_OUT);
        expenseRepository.save(expense6);

        Expense expense7 = new Expense("Bus Fare", 1.50, CategoryType.TRANSPORT);
        expenseRepository.save(expense2);

    }


}
