package com.expenseTracker.ExpenseTracker;

import com.expenseTracker.ExpenseTracker.models.Account;
import com.expenseTracker.ExpenseTracker.models.CategoryType;
import com.expenseTracker.ExpenseTracker.models.Expense;

import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import static org.junit.jupiter.api.Assertions.assertEquals;


@ActiveProfiles("test")
@SpringBootTest
class ExpenseTrackerApplicationTests {

	CategoryType categoryType;
	Expense expense;

	Account account;



	@Test
	void contextLoads() {
	}


//	@Test
//	public void canGetExpenseTitle() {
//		Account account1 = new Account("Everyday", 500);
//		Expense expense1 = new Expense("Food", 12.0, CategoryType.EATING_OUT);
//		assertEquals("Food", expense1.getTitle());

	}

//	@Test
//	public void canGetExpenseAmount() {
//		Expense expense2 = new Expense("Drink", 10.0, CategoryType.EATING_OUT);
//		assertEquals(10.0, expense2.getAmount(), 0.0);
//	}
//
//	@Test
//	public void canGetCategoryType() {
//		Expense expense3 = new Expense("Electricity", 120.50, categoryType.BILLS);
//		assertEquals("Bills", expense3.getCategory().getValue());
//	}


