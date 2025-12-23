import { Calculator } from './Calculator';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    it('повинен правильно додавати два позитивні числа', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    it('повинен правильно додавати від\'ємні числа', () => {
      expect(calculator.add(-5, -3)).toBe(-8);
    });

    it('повинен правильно додавати позитивне та від\'ємне число', () => {
      expect(calculator.add(10, -4)).toBe(6);
    });

    it('повинен правильно додавати нуль', () => {
      expect(calculator.add(5, 0)).toBe(5);
    });
  });

  describe('subtract', () => {
    it('повинен правильно віднімати числа', () => {
      expect(calculator.subtract(10, 3)).toBe(7);
    });

    it('повинен правильно віднімати від\'ємні числа', () => {
      expect(calculator.subtract(-5, -3)).toBe(-2);
    });

    it('повинен повертати від\'ємний результат', () => {
      expect(calculator.subtract(3, 10)).toBe(-7);
    });
  });

  describe('multiply', () => {
    it('повинен правильно множити числа', () => {
      expect(calculator.multiply(4, 5)).toBe(20);
    });

    it('повинен повертати нуль при множенні на нуль', () => {
      expect(calculator.multiply(100, 0)).toBe(0);
    });

    it('повинен правильно множити від\'ємні числа', () => {
      expect(calculator.multiply(-3, -4)).toBe(12);
    });

    it('повинен повертати від\'ємний результат', () => {
      expect(calculator.multiply(5, -3)).toBe(-15);
    });
  });

  describe('divide', () => {
    it('повинен правильно ділити числа', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    it('повинен правильно ділити з залишком', () => {
      expect(calculator.divide(7, 2)).toBe(3.5);
    });

    it('повинен кидати помилку при діленні на нуль', () => {
      expect(() => calculator.divide(10, 0)).toThrow('Ділення на нуль неможливе');
    });

    it('повинен правильно ділити від\'ємні числа', () => {
      expect(calculator.divide(-10, 2)).toBe(-5);
    });
  });

  describe('power', () => {
    it('повинен правильно піднімати до степеня', () => {
      expect(calculator.power(2, 3)).toBe(8);
    });

    it('повинен повертати 1 для нульового степеня', () => {
      expect(calculator.power(5, 0)).toBe(1);
    });

    it('повинен правильно обробляти від\'ємний степінь', () => {
      expect(calculator.power(2, -2)).toBe(0.25);
    });

    it('повинен правильно обробляти дробовий степінь', () => {
      expect(calculator.power(4, 0.5)).toBe(2);
    });
  });

  describe('sqrt', () => {
    it('повинен правильно обчислювати квадратний корінь', () => {
      expect(calculator.sqrt(9)).toBe(3);
    });

    it('повинен правильно обчислювати корінь з нуля', () => {
      expect(calculator.sqrt(0)).toBe(0);
    });

    it('повинен правильно обчислювати корінь з дробового числа', () => {
      expect(calculator.sqrt(0.25)).toBe(0.5);
    });

    it('повинен кидати помилку для від\'ємного числа', () => {
      expect(() => calculator.sqrt(-4)).toThrow('Не можна обчислити корінь від від\'ємного числа');
    });
  });

  describe('factorial', () => {
    it('повинен обчислювати факторіал нуля', () => {
      expect(calculator.factorial(0)).toBe(1);
    });

    it('повинен обчислювати факторіал одиниці', () => {
      expect(calculator.factorial(1)).toBe(1);
    });

    it('повинен правильно обчислювати факторіал', () => {
      expect(calculator.factorial(5)).toBe(120);
    });

    it('повинен обчислювати великі факторіали', () => {
      expect(calculator.factorial(10)).toBe(3628800);
    });

    it('повинен кидати помилку для від\'ємного числа', () => {
      expect(() => calculator.factorial(-1)).toThrow('Факторіал від\'ємного числа не визначений');
    });
  });
});
