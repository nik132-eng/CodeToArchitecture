# 2. Decentralize Data Management

### Principle Explained
Unlike monolithic applications that often share a single database, microservices architecture advocates for each service to manage its own database or data store. This decentralization minimizes inter-service dependencies and ensures data consistency within a service's bounded context.

### Example Use Case
Consider a healthcare system: separate services for patient data, appointment scheduling, and billing. Each would use its own database. This separation means updates to the billing logic, for example, do not impact patient data management, enhancing resilience and performance across the system.

**Mentor's Deep Dive:** This is a crucial, yet often violated, principle. Each microservice must own its private database, and no other service should directly access it. If `Order Service` needs user details, it must query the `User Service`'s API, not directly access `User Service`'s database. This prevents tight coupling and allows independent schema evolution and technology choices (e.g., PostgreSQL for users, MongoDB for orders, ClickHouse for analytics).

When you need to combine data from multiple services (e.g., 'all orders for a user'), you cannot use traditional cross-database joins. Instead, you use patterns like:
- **API Composition**: Making multiple API calls (e.g., to `User Service` then `Order Service`) and combining the results in your client or an API Gateway. This is simpler but can be slower and less resilient if a service is down.
- **CQRS (Command Query Responsibility Segregation) + Materialized View**: This advanced pattern separates 'write' operations (Commands) from 'read' operations (Queries). When a write occurs (e.g., `UserCreated`, `OrderPlaced` events), a dedicated 'Dashboard Service' (a projector/listener) listens to these events and builds a pre-joined, denormalized, read-optimized table (a 'Materialized View'). Clients then query this view directly for fast, complex queries. Data in the materialized view is *eventually consistent* but provides high read performance and resilience.

### Diagram: Decentralized Data with CQRS/Materialized View
```mermaid
graph TD
    subgraph Write Side (Commands)
        A[User Service] --> B(User DB - PostgreSQL)
        C[Order Service] --> D(Order DB - MongoDB)
    end
    subgraph Event Flow
        A -- publishes UserCreated Event --> E(Event Bus)
        C -- publishes OrderCreated Event --> E
    end
    subgraph Read Side (Queries - CQRS/Materialized View)
        E -- consumed by --> F[Dashboard Service (Projector)]
        F -- builds/updates --> G(Materialized View DB - PostgreSQL)
    end
    H[Client/Frontend] --> G -- queries for feed --> H
```