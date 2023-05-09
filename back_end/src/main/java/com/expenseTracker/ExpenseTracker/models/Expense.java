package com.expenseTracker.ExpenseTracker.models;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "expenses")
public class Expense {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;


    @Column(name = "amount")
    private double amount;
    @Column(name = "category_type")
    @Enumerated(value = EnumType.STRING)
    private CategoryType category;

    @ManyToOne
    @JoinColumn(name = "account_id", nullable = true)
    @JsonIgnoreProperties({"expenses"})
    private Account account;

    public Expense() {
    }

    public Expense(String title, double amount, CategoryType category, Account account){
        this.title = title;
        this.amount = amount;
        this.category = category;
        this.account = account;
    }


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public CategoryType getCategory() {
        return category;
    }

    public void setCategory(CategoryType category) {
        this.category = category;
    }

    public String getCategoryValue(CategoryType category){
        return this.category.getValue();
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }
}
