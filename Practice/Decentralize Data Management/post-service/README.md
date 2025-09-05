# Post Service

- Owns post data
- Uses MongoDB
- Exposes `POST /posts` to create a post
- Verifies user existence via User Service API

## Setup
1. Install dependencies: `npm install`
2. Ensure MongoDB is running and a database `postsdb` exists.
3. Start service: `node index.js`
