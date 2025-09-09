# 8. Secure Each Service Individually

### Principle Explained
Individual microservices must be secured with their own authentication and authorization mechanisms. Technologies like OAuth 2.0 or JWT tokens are commonly used to ensure that only authenticated and authorized requests are processed, with each service verifying the token before executing any action.

### Example Use Case
In a banking application, both the account service and the transaction service would independently require token validation. A user must possess the correct permissions, as dictated by their token, before any account or transaction data can be accessed or modified.