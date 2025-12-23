import { StringUtils } from './StringUtils';

describe('StringUtils', () => {
  let stringUtils: StringUtils;

  beforeEach(() => {
    stringUtils = new StringUtils();
  });

  describe('reverse', () => {
    it('повинен перевертати рядок', () => {
      expect(stringUtils.reverse('hello')).toBe('olleh');
    });

    it('повинен обробляти порожній рядок', () => {
      expect(stringUtils.reverse('')).toBe('');
    });

    it('повинен обробляти рядок з одним символом', () => {
      expect(stringUtils.reverse('a')).toBe('a');
    });
  });

  describe('capitalize', () => {
    it('повинен робити перший символ великим', () => {
      expect(stringUtils.capitalize('hello')).toBe('Hello');
    });

    it('повинен обробляти порожній рядок', () => {
      expect(stringUtils.capitalize('')).toBe('');
    });

    it('повинен зберігати великий символ', () => {
      expect(stringUtils.capitalize('Hello')).toBe('Hello');
    });
  });

  describe('isPalindrome', () => {
    it('повинен розпізнавати паліндроми', () => {
      expect(stringUtils.isPalindrome('racecar')).toBe(true);
    });

    it('повинен розпізнавати паліндроми з пробілами', () => {
      expect(stringUtils.isPalindrome('A man a plan a canal Panama')).toBe(true);
    });

    it('повинен розпізнавати не-паліндроми', () => {
      expect(stringUtils.isPalindrome('hello')).toBe(false);
    });

    it('повинен обробляти порожній рядок як паліндром', () => {
      expect(stringUtils.isPalindrome('')).toBe(true);
    });
  });

  describe('countWords', () => {
    it('повинен правильно підраховувати слова', () => {
      expect(stringUtils.countWords('Hello world from TypeScript')).toBe(4);
    });

    it('повинен обробляти множинні пробіли', () => {
      expect(stringUtils.countWords('Hello    world')).toBe(2);
    });

    it('повинен обробляти порожній рядок', () => {
      expect(stringUtils.countWords('')).toBe(0);
    });

    it('повинен обробляти рядок лише з пробілами', () => {
      expect(stringUtils.countWords('   ')).toBe(0);
    });
  });

  describe('removeSpaces', () => {
    it('повинен видаляти всі пробіли', () => {
      expect(stringUtils.removeSpaces('hello world')).toBe('helloworld');
    });

    it('повинен видаляти табуляції та переноси рядків', () => {
      expect(stringUtils.removeSpaces('hello\tworld\n')).toBe('helloworld');
    });

    it('повинен обробляти рядок без пробілів', () => {
      expect(stringUtils.removeSpaces('helloworld')).toBe('helloworld');
    });
  });

  describe('truncate', () => {
    it('повинен обрізати довгий рядок', () => {
      expect(stringUtils.truncate('Hello world from TypeScript', 10)).toBe('Hello w...');
    });

    it('не повинен обрізати короткий рядок', () => {
      expect(stringUtils.truncate('Hello', 10)).toBe('Hello');
    });

    it('повинен використовувати кастомний суфікс', () => {
      expect(stringUtils.truncate('Hello world', 8, '---')).toBe('Hello---');
    });
  });
});
