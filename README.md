# Unit Tests CI/CD Project

## Опис проєкту
Цей проєкт створено в рамках виконання лабораторної роботи №4 з теми "Тестування в CI/CD".

## Структура проєкту
```
unit-tests-project/
├── src/
│   ├── Calculator.ts          # Клас для математичних операцій
│   ├── Calculator.test.ts     # Тести для Calculator
│   ├── StringUtils.ts         # Клас для роботи з рядками
│   ├── StringUtils.test.ts    # Тести для StringUtils
│   └── index.ts               # Головний файл експорту
├── .github/
│   └── workflows/
│       └── ci.yml             # GitHub Actions CI pipeline
├── package.json
├── tsconfig.json
├── jest.config.js
└── .eslintrc.json
```

## Встановлення залежностей
```bash
npm install
```

## Доступні команди

### Збірка проєкту
```bash
npm run build
```

### Запуск тестів
```bash
npm test
```

### Запуск тестів з покриттям
```bash
npm run test:coverage
```

### Запуск лінтера
```bash
npm run lint
```

### Виправлення помилок лінтера
```bash
npm run lint:fix
```

## CI/CD Pipeline

Pipeline автоматично запускається при:
- Push в гілки `main` або `develop`
- Створенні Pull Request в гілки `main` або `develop`

### Етапи pipeline:
1. **Checkout коду** - отримання коду з репозиторію
2. **Налаштування Node.js** - встановлення Node.js версії 18.x та 20.x
3. **Встановлення залежностей** - виконання `npm ci`
4. **Запуск лінтера** - перевірка якості коду за допомогою ESLint
5. **Збірка проєкту** - компіляція TypeScript в JavaScript
6. **Запуск тестів** - виконання unit-тестів з Jest
7. **Збереження результатів** - завантаження звіту про покриття коду

## Автор
Yaroslav - КНм-25-1, Zhytomyr Polytechnic State University

## Ліцензія
MIT
