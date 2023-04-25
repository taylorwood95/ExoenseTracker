package com.expenseTracker.ExpenseTracker.models;

public enum CategoryType {

    ENTERTAINMENT("Entertainment"),
    BILLS("Bills"),
    EATING_OUT("Eating Out"),
    TRANSPORT("Transport"),
    RENT("Rent"),
    MORTGAGE("Mortgage"),
    GROCERIES("Groceries"),
    SUBSCRIPTIONS("Subscriptions"),
    OTHER("Other");

    private String value;

    CategoryType(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
