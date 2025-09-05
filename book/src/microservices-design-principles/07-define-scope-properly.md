# 6. Define the Scope Properly

### Principle Explained
Precise definition of microservice boundaries is paramount. Ambiguous or overlapping responsibilities can lead to tight coupling and confusion during development and maintenance. Each microservice must have a clear purpose, avoiding 'scope creep' where its responsibilities expand beyond its initial design.

### Example Use Case
In a video streaming platform, distinct services for content management, user subscriptions, and recommendation engines should exist. Defining the scope ensures the recommendation engine focuses solely on user-behavior-based suggestions, leaving content creation and user authentication to their dedicated services.