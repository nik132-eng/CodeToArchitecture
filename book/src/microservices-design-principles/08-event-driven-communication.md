# 7. Use Event-Driven Communication When Necessary

### Principle Explained
To mitigate direct dependencies, microservices should ideally communicate asynchronously via event-driven architectures. Services publish events (e.g., 'Order Placed'), and other interested services subscribe to these events, triggering subsequent actions like inventory updates, payment processing, or notifications.

### Example Use Case
In a food delivery system, a new order placement triggers an event. The restaurant service listens to update its kitchen order list, while the delivery service simultaneously prepares to assign a courier, all without direct calls between them.

**Mentor's Deep Dive: Communication Mediums:** Microservices employ various communication strategies:
- **Synchronous Request-Response**: (e.g., REST over HTTP, gRPC) Ideal for immediate replies and simple, tightly coupled workflows. `HTTP` is the protocol (the 'road'), `REST` is an architectural style for organizing APIs over HTTP (the 'traffic rules').
- **Asynchronous Event-Driven**: (e.g., Apache Kafka, RabbitMQ, AWS SNS/SQS, Azure Event Hubs) Best for decoupling services, high scalability, and enhanced resilience. Services publish events and react to those they subscribe to.
- **Remote Procedure Call (RPC)-Style**: (e.g., gRPC, Apache Thrift) Offers high-performance, language-agnostic internal service communication, often using binary protocols.
- **Service Mesh**: (e.g., Istio, Linkerd) An infrastructure layer that manages service-to-service communication. It provides features like traffic management, load balancing, security (mTLS), retries, and observability via sidecar proxies, without requiring application-level code changes.

### Diagram: Common Communication Mediums
```mermaid
graph LR
    Client --> REST[REST API / HTTP]
    subgraph Internal Communications
        S1[Service 1] -- gRPC --> S2[Service 2]
        S2 -- publishes --> K(Kafka/RabbitMQ Event Bus)
        K --> S3[Service 3]
        K --> S4[Service 4]
    end
    subgraph Service Mesh (e.g., Istio)
        S1 -- mTLS/Traffic Mgmt --> Proxy1(Sidecar Proxy)
        Proxy1 -- secured communication --> Proxy2(Sidecar Proxy)
        Proxy2 --> S2
    end
```