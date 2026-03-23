# Shady Meadows B&B - UI Automation

A robust and scalable UI testing framework built with Playwright, TypeScript, and the Page Object Model (POM) pattern. This project is designed for automated testing of https://automationintesting.online/

## 🚀 Features

- **Page Object Model (POM)**: Enhanced maintainability and readability by separating page logic from test scripts.
- **TypeScript**: Static typing for better developer experience and code quality.
- **Allure Reporting**: Comprehensive and visual test reports.
- **Environment Configuration**: Secure management of credentials and environment-specific variables using `dotenv`.
- **Cross-Browser Testing**: Pre-configured for Chromium, Firefox, and WebKit.
- **Github-Actions**: Execute and Generete Report

## 🛠️ Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (comes with Node.js)

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd UI_Test
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## ⚙️ Configuration

Create a `.env` file in the root directory and add your credentials:

```env
USER_NAME=your-email@example.com
PASSWORD=your-password
ROLE= your-role
```

## 🧪 Running Tests

### Run all tests

```bash
npm test
```

### Run tests in UI mode

```bash
npm run test:ui
```

### Show HTML report

```bash
npm run show:report
```

### Sanity test

```bash
npm run test:sanity
```

## ✨ Code Quality & Formatting

This project uses **ESLint** and **Prettier** to ensure code quality and consistent formatting. **Husky** is configured to run these checks automatically before every commit.

### Scripts

- **Lint Check**: `npm run lint`
- **Lint Fix**: `npm run lint:fix`
- **Format Code**: `npm run format`

### Pre-commit Hooks

Husky and lint-staged are set up to automatically lint and format your code when you run `git commit`. This ensures that only clean code reaches the repository.

## 📂 Project Structure

- `tests/`: Test scripts (e.g., `login.spec.ts`).
- `Pages/`: Page Object classes.
- `config/`: Environment and global configurations.
- `fixtures/`: Test data and custom fixtures.

## 📊 Reporting

This project uses \*_Playwright-Report_ for detailed test execution visualization.

### Default Playwright Report

Playwright also generates a standard HTML report:

```bash
npm run show:report
```

---

### Pipeline execution

This project execute a pipeline after execute a follows git commands -

```bash
  git checkout dev
  # add some modification
  git add .
  # commit something
  git commit -m "message"
  # Send for GitHub repo
  git push -u dev
```

OR:

You can access this project in Github and execute [github-action](https://github.com/Dev-context/SDET_Technical_Challenge-_Shady_Meadows_B-B/actions)

[Playwriht-report](https://dev-context.github.io/SDET_Technical_Challenge-_Shady_Meadows_B-B/playwright/index.html)

### Documentation main link

- [Back to Main Project Page](../README.md#-key-features)

_Built with ❤️ for Automation Excellence.: []_
