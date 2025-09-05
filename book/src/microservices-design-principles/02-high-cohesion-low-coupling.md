# 1. Ensure High Cohesion and Low Coupling

### Principle Explained
Microservices should exhibit high cohesion, meaning each service is focused on a single, well-defined business capability. Concurrently, they must maintain low coupling, implying minimal dependencies between services.

- **High Cohesion**: A service should manage a single function or a closely related set of functions. For instance, a user authentication service should exclusively handle login, logout, and token management.
- **Low Coupling**: Services should interact through standardized interfaces (e.g., REST APIs, messaging systems) to avoid tight integration, which is crucial for independent scaling, deployment, and maintenance.

### Example Use Case
In an e-commerce platform, a 'Payment' service handles transactions, while an 'Order' service manages order lifecycle. High cohesion keeps the Payment service focused solely on payments. Low coupling allows the Order service to operate independently, communicating with Payment via APIs. If Payment service is temporarily down, the Order service can still manage other tasks, demonstrating resilience.

**Mentor's Note:** This principle is foundational. High cohesion ensures each service does 'one thing well'. Low coupling is achieved by communicating via well-defined contracts (APIs) or asynchronous events, rather than direct database access or shared code. For instance, when an order is placed, the `Order Service` might publish an event (`OrderPlaced`), and the `Inventory Service` and `Notification Service` react to this event independently, without direct calls to each other. This significantly reduces dependencies.