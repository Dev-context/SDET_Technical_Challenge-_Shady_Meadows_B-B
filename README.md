# Shady Meadows B&B - Full Stack Test Automation Ecosystem

A professional-grade SDET framework orchestrating **API Testing (Karate DSL)** and **UI Testing (Playwright)** within a unified CI/CD pipeline. This project demonstrates advanced automation patterns, including Page Object Model (POM), multi-layer test sequencing, and automated quality dashboards.

## 🚀 Key Features

- **Multi-Layer Orchestration**: A custom "Manager" workflow sequences API validation before UI execution to ensure environment stability.
- **Page Object Model (POM)**: Robust UI architecture using Playwright and TypeScript for enhanced maintainability.
- **Unified Reporting**: A consolidated HTML Dashboard hosting both Karate (API) and Playwright (UI) native reports on GitHub Pages.
- **Zero-Footprint CI/CD**: Optimized `.gitignore` and artifact management to keep the repository lightweight.

## 🛠️ Tech Stack

| Category        | Technology                      |
| :-------------- | :------------------------------ |
| **API Testing** | Karate DSL, Java, Maven         |
| **UI Testing**  | Playwright, TypeScript, Node.js |
| **CI/CD**       | GitHub Actions                  |
| **Hosting**     | GitHub Pages                    |

---

## 📂 Project Structure

```text
├── .github/workflows/     # CI/CD Orchestration (The "Manager")
├── Karate_API_Test/       # Karate API Automation (Backend validation)
└── UI_Test/               # Playwright UI Automation (Frontend E2E)
```

## 🐛 Bug Reports & Findings

### Feature: Authentication

Logout Persistence Issue: The login page displays a "Logout" button even when a user is not currently authenticated.

![alt text](/md/image.png)

Responsive Navigation: On mobile/responsive screens, clicking navigation bar elements results in no action (unresponsive UI).

![alt text](/md/image-3.pngimage-1.png)

### Feature: Room Management

Data Inconsistency: The system allows the creation of multiple rooms with the identical name, leading to data duplication.

![alt text](/md/image-3.png)

### Feature: API Validation

Generic Error Responses: API responses lack specificity regarding character length requirements, making it difficult for the end-user to correct input.

![alt text](/md/image-4.png)

Missing Key Context: Validation errors do not specify which mandatory key is missing or which field failed length validation.

![alt text](/md/image-5.png)

## Documentation Links

- [Go to API Automation README](./Karate_API_Test/README.md)
- [Go to UI Automation README](./UI_Test/README.md#-features)
