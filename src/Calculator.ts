/**
 * Calculator - клас для виконання базових математичних операцій
 */
export class Calculator {
  /**
   * Додавання двох чисел
   */
  add(a: number, b: number): number {
    return a + b;
  }

  /**
   * Віднімання двох чисел
   */
  subtract(a: number, b: number): number {
    return a - b;
  }

  /**
   * Множення двох чисел
   */
  multiply(a: number, b: number): number {
    return a * b;
  }

  /**
   * Ділення двох чисел
   * @throws {Error} якщо ділення на нуль
   */
  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Ділення на нуль неможливе');
    }
    return a / b;
  }

  /**
   * Піднесення до степеня
   */
  power(base: number, exponent: number): number {
    return Math.pow(base, exponent);
  }

  /**
   * Обчислення квадратного кореня
   * @throws {Error} якщо число від'ємне
   */
  sqrt(x: number): number {
    if (x < 0) {
      throw new Error('Не можна обчислити корінь від від\'ємного числа');
    }
    return Math.sqrt(x);
  }

  /**
   * Обчислення факторіалу
   * @throws {Error} якщо число від'ємне
   */
  factorial(n: number): number {
    if (n < 0) {
      throw new Error('Факторіал від\'ємного числа не визначений');
    }
    if (n === 0 || n === 1) {
      return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}
