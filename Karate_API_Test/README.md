# 📡 Shady Meadows B&B - API Automation (Karate DSL)

This module contains the automated API testing suite for the Shady Meadows B&B application, built using the **Karate DSL** framework. It validates business logic, data integrity, and contract compliance across multiple endpoints.

## 🛠️ Tech Stack

- **Framework**: Karate DSL (BDD Style)
- **Language**: Java / JavaScript (for data manipulation)
- **Build Tool**: Maven
- **Logging**: Logback
- **Reports**: Karate Native HTML Reports

---

## 📂 Project Structure Overview

The project follows a modular structure for scalability:

- **`feature/`**: Contains BDD `.feature` files and JUnit Runners organized by domain:
  - `bookings`: Booking creation and validation.
  - `brandings`: Management of hotel branding details.
  - `rooms`: CRUD operations for hotel rooms.
- **`helpers/`**: Reusable utility features (`getrooms.feature`) and Java interop logic (`DataGenerator.java`).
- **`json/`**: Centralized storage for JSON payloads:
  - `request/`: Templates for POST/PUT requests.
  - `response/`: Expected schemas and contract validation files.
- **`karate-config.js`**: Global configuration (Base URLs, environments, global variables).

---

## 🚀 Getting Started

### Prerequisites

- **JDK 17** or higher.
- **Maven** installed and configured.

### Running Tests via Terminal

### Run all features:

```bash
mvn test -Dtest=FeaturesTest
```

### Run a specific domain (e.g., Rooms):

```bash
mvn test -Dtest=RoomsRunner
```

### Run with a specific environment:

```bash
mvn test -Dtest=FeaturesTest -Dkarate.env=dev
```

## 📊 Reporting

Karate generates a detailed HTML report after every execution.

Location: target/karate-reports/karate-summary.html

Dashboard: This report is automatically collected and published by the SEDET - Manager workflow to GitHub Pages.

### Documentation main link

- [Back to Main Project Page](../README.md#-key-features)
