# University Course Management System

A modular JavaScript application demonstrating asynchronous callbacks, ES6 classes, property descriptors for immutability, and functional array manipulation.

## File Organization
- `models.js`: Defines the `Student` class. The student ID is strictly immutable through `Object.defineProperty` (`writable: false`, `configurable: false`).
- `database.js`: Simulates an asynchronous backend latency using `setTimeout` and executes a callback delivering the raw dataset records.
- `analytics.js`: Contains functional utilities for computing specific course averages, identifying top-performing students using `.reduce()`, and generic condition filtering.
- `main.js`: Main orchestration script that imports modules, hydrates raw objects into class instances, validates property immutability, and logs the analytics report.

## Challenges Faced & Solutions
1. **Property Descriptor Configuration**: Standard property assignment inside the constructor allowed external reassignment. Using `Object.defineProperty` with `writable: false` and `configurable: false` secured the ID property against modification while keeping `enumerable: true` so the field serializes and prints cleanly.
2. **Object Hydration**: The asynchronous callback returns plain JSON objects without prototype methods like `.getAverage()`. Transforming the raw payload through `rawData.map(...)` into `Student` class instances restored all OOP methods before executing analytical queries.
3. **Floating Point Rounding**: Standard JavaScript arithmetic produced floating-point inaccuracies; `.toFixed(2)` and `.toFixed(1)` were applied to align with the required output formatting.
4. **Sample Output Discrepancy (Top Student)**: The prompt sample output states "Top Student: Zeynep (Average: 82.5)". However, evaluating the mandatory raw dataset yields:
   - **Ali**: (90 + 85) / 2 = 87.5
   - **Zeynep**: (70 + 95) / 2 = 82.5
   - **Ahmet**: (60 + 55) / 2 = 57.5
   
   The `findTopStudent` implementation strictly preserves computational and data integrity, correctly identifying Ali as the student with the highest arithmetic average ($87.5 > 82.5$).