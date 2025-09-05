# 5. Adhere to the Single Responsibility Principle

### Principle Explained
Each microservice should strictly adhere to the Single Responsibility Principle (SRP), meaning it should focus on one specific business capability. This keeps services concise, easy to understand, maintain, and evolve, minimizing the risk of changes in one service from impacting others.

### Example Use Case
An e-commerce application's Notification Service should exclusively handle sending emails, SMS, or push notifications. It should not be burdened with unrelated operations like user authentication or payment processing.