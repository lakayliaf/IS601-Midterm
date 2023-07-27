import { BankAccount, ValueError } from './bank-account';

describe('Bank Account', () => {
  test('newly opened account has zero balance', () => {
    const account = new BankAccount();
    account.open();
    expect(account.balance).toEqual(0);
  });

  test('can deposit money', () => {
    // Implement Me
  });

  test('can deposit money sequentially', () => {
    // Implement Me
  });

  test('can withdraw money', () => {
    // Implement Me
  });

  test('can withdraw money sequentially', () => {
    // Implement Me
  });

  test('checking balance of closed account throws error', () => {
    // Implement Me
  });

  test('deposit into closed account throws error', () => {
    // Implement Me
  });

  test('withdraw from closed account throws error', () => {
    // Implement Me
  });

  test('close already closed account throws error', () => {
    // Implement Me
  });

  test('open already opened account throws error', () => {
    // Implement Me
  });

  test('reopened account does not retain balance', () => {
    // Implement Me
  });

  test('cannot withdraw more than deposited', () => {
    // Implement Me
  });

  test('cannot withdraw negative amount', () => {
    // Implement Me
  });

  test('cannot deposit negative amount', () => {
    // Implement Me
  });

  test('changing balance directly throws error', () => {
    // Implement Me
  });
});