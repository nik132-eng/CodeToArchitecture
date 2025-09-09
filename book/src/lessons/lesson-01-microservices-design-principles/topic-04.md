# 05 - API First Approach

> 💡 *"Design the contract before writing the code."*

The **API First Approach** means:  
> ✅ Define your API's structure, endpoints, and data contracts **before** implementing any service logic.

It's the difference between:
- ❌ "Let me code first, I'll tell you the API later" → chaos
- ✅ "Here's the API spec — agree on it, then we build" → alignment

This principle ensures **clarity, consistency, and collaboration** across teams.

---

## 🧱 Why API First Matters

In microservices, multiple teams work in parallel:
- Backend builds services
- Frontend builds UI
- QA writes tests
- DevOps sets up gateways

If there's no agreement on the API, everyone builds against different assumptions.

### ❌ Without API First
```text
Frontend: "I assumed /users returns 'name'"
Backend: "I returned 'fullName'"
QA: "My tests failed"
DevOps: "The gateway config is wrong"
```

Wasted time. Re-work. Delayed launch.

### ✅ With API First
```text
Team agrees on OpenAPI spec
Frontend mocks API and starts early
Backend generates server stubs
QA writes tests from the spec
DevOps configures gateway in advance
```

✅ Everyone aligned. Zero surprises.

---

## 🔁 API First vs Code First

| API First | Code First |
|---------|------------|
| Design API spec first (e.g., OpenAPI) | Write code first |
| Get team alignment before coding | No contract — everyone guesses |
| Frontend can mock API and start early | Frontend waits for backend |
| Clear documentation from day one | Docs written later (if at all) |
| Fewer integration bugs | "It works on my machine" syndrome |

> 💡 Think of it like **architectural blueprints** before building a house.

---

## 🛠️ How to Do API First: Step by Step

### Step 1: Define the API Contract (Before Coding)

Use **OpenAPI 3.0** (formerly Swagger) to define:

```yaml
# openapi.yaml
openapi: 3.0.3
info:
  title: Post Service API
  version: 1.0.0
  description: Manages user posts and content

servers:
  - url: http://localhost:3002
    description: Local development

paths:
  /posts:
    get:
      summary: Get all posts
      responses:
        '200':
          description: List of posts
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Post'
    post:
      summary: Create a new post
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreatePostRequest'
      responses:
        '201':
          description: Post created
        '400':
          description: Invalid input
        '503':
          description: Service unavailable

components:
  schemas:
    Post:
      type: object
      properties:
        id:
          type: string
        userId:
          type: integer
        userName:
          type: string
        content:
          type: string
        createdAt:
          type: string
          format: date-time

    CreatePostRequest:
      type: object
      required: [userId, content, idempotencyKey]
      properties:
        userId:
          type: integer
        content:
          type: string
        idempotencyKey:
          type: string
```

> ✅ This is **machine-readable documentation** — not a Word doc.

---

### Step 2: Share & Get Agreement

Use tools to collaborate:
- **[Swagger Editor](https://editor.swagger.io)** – Edit and preview OpenAPI
- **[Postman](https://postman.com)** – Share collections and mocks
- **[Redoc](https://redocly.com)** – Generate beautiful docs
- **[Stoplight](https://stoplight.io)** – Full design platform

👉 Share the spec with:
- Frontend team
- QA
- Product manager
- DevOps

Get sign-off before coding.

---

### Step 3: Generate Mock Server

Use the spec to create a **mock API** so frontend can start working **before backend exists**.

#### Example: Use Postman Mock Server or `swagger-ui`

```json
// Mock response for GET /posts
[
  {
    "id": "60f7b1c12e3a4b001c8b4567",
    "userId": 1,
    "userName": "Alice",
    "content": "Hello from mock server!",
    "createdAt": "2025-04-05T10:00:00Z"
  }
]
```

Frontend builds against this → zero backend dependency.

---

### Step 4: Generate Server Stub

Use **OpenAPI Generator** to generate boilerplate code:

```bash
npx @openapitools/openapi-generator-cli generate \
  -i openapi.yaml \
  -g nodejs-express-server \
  -o ./generated-server
```

Now you get:
- Routes already defined
- Request validation
- TypeScript types (if using `typescript-node`)

You start coding from a strong foundation.

---

### Step 5: Validate Runtime Compliance

Use tools to ensure your running API matches the spec:

- **Express OpenAPI Validator**
- **Dredd** – Test API against spec
- **Spectral** – Lint your OpenAPI

Example: If API returns `userName` but spec says `name` → **fail the test**

---

## 📊 Diagram: API First Workflow

```mermaid
graph TD
  A[Product: "We need a Post API"] --> B[Design OpenAPI Spec]
  B --> C[Team Reviews: Frontend, QA, DevOps]
  C --> D[Agreement Reached]
  D --> E[Frontend: Use Mock Server]
  D --> F[Backend: Generate Server Stub]
  D --> G[QA: Write Tests from Spec]
  D --> H[DevOps: Configure Gateway]
  E --> I[Build UI Early]
  F --> J[Implement Logic]
  J --> K[Validate at Runtime]
  K --> L[Launch: Zero Integration Surprises]
```

✅ Everyone works in parallel.  
✅ No last-minute API changes.  
✅ Faster, safer delivery.

---

## 🧩 Real-World Benefits

| Benefit | Explanation |
|--------|-------------|
| ✅ **Team Autonomy** | Frontend & backend work independently |
| ✅ **Clear Contracts** | No ambiguity in request/response |
| ✅ **Easier Testing** | Mocks, stubs, automated validation |
| ✅ **Better Documentation** | Always up-to-date (source of truth) |
| ✅ **Safer Evolution** | Detect breaking changes before they break |
| ✅ **Discoverability** | New devs can explore APIs visually |

---

## 🚫 Anti-Patterns to Avoid

| Mistake | Better Approach |
|--------|-----------------|
| "We'll document later" | Design API first |
| "Just look at the code" | Use OpenAPI spec |
| "I'll tell you the endpoint" | Share a link to the spec |
| Manual curl testing | Use Postman collections |
| No versioning | Use `/v1/posts`, plan `/v2` |

---

## ✅ Versioning Your APIs

Never break existing clients.

| Version | When to Use |
|--------|-------------|
| `/v1/posts` | Stable, production clients |
| `/v2/posts` | New fields, breaking changes |
| Deprecate `/v1` | After migration period |

> 💡 Communicate deprecation early.

---

## 🧪 Example: Add Runtime Validation

Install validator:
```bash
npm install express-openapi-validator
```

Add to your app:
```js
const { OpenApiValidator } = require('express-openapi-validator');

app.use(
  OpenApiValidator.middleware({
    apiSpec: './openapi.yaml',
    validateRequests: true,
    validateResponses: true,
  })
);

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: err.message,
    errors: err.errors,
  });
});
```

Now:
- Invalid request → `400`
- Invalid response → `500` (catches bugs!)

---

## 🎯 Summary: API First Mindset

| Do | Don't |
|----|-------|
| ✅ Design API spec before coding | ❌ Code first, document later |
| ✅ Use OpenAPI (Swagger) | ❌ Rely on口头 descriptions |
| ✅ Generate mocks & stubs | ❌ Manually write boilerplate |
| ✅ Validate at runtime | ❌ Hope the API matches docs |
| ✅ Treat API as a Product | ❌ Treat API as an implementation detail |

---

## 📚 References & Further Reading

- [OpenAPI Specification](https://spec.openapis.org/oas/v3.1.0)
- [Swagger Editor](https://editor.swagger.io)
- [Postman Learning Center](https://learning.postman.com)
- [Redoc Documentation](https://redocly.com/docs)
- [OpenAPI Generator](https://openapi-generator.tech)

> 🧓 Mentor's Note:  
> The best APIs are not built — they are **designed**.  
> Every great microservice starts with a contract, not a class.  
> You're not just building software — you're designing systems.