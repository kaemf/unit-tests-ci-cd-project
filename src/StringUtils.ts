/**
 * StringUtils - клас для роботи з рядками
 */
export class StringUtils {
  /**
   * Перевертає рядок
   */
  reverse(str: string): string {
    return str.split('').reverse().join('');
  }

  /**
   * Робить перший символ великим
   */
  capitalize(str: string): string {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  /**
   * Перевіряє чи є рядок паліндромом
   */
  isPalindrome(str: string): boolean {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === this.reverse(cleaned);
  }

  /**
   * Підраховує кількість слів у рядку
   */
  countWords(str: string): number {
    return str.trim().split(/\s+/).filter(word => word.length > 0).length;
  }

  /**
   * Видаляє всі пробіли з рядка
   */
  removeSpaces(str: string): string {
    return str.replace(/\s/g, '');
  }

  /**
   * Truncate рядок до вказаної довжини
   */
  truncate(str: string, maxLength: number, suffix = '...'): string {
    if (str.length <= maxLength) {
      return str;
    }
    return str.substring(0, maxLength - suffix.length) + suffix;
  }
}
