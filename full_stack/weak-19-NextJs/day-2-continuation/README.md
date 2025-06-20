# 🧠 Next.js Full-Stack Authentication Project

This is a full-stack Next.js project with custom API routes, Prisma ORM (with a custom generated client path), and secure user authentication using `bcrypt` password hashing.

---

## 📦 Tech Stack

- ⚛️ **Next.js App Router**
- 🔐 **bcrypt** for password salting and hashing
- 🌿 **Prisma ORM** (client generated to `generated/prisma`)
- 🛢️ PostgreSQL (or any other Prisma-supported database)
- 🧠 Express-like API route handlers inside `app/api`
- 💅 TailwindCSS for styling

---

## 📁 Project Structure (Highlights)


/app
└── /api
└── /v1
└── /signUp
└── route.ts // Sign up API logic here

/components
└── input.tsx // Custom input component

/prisma
└── schema.prisma // Prisma schema file

/generated/prisma
└── index.d.ts + client.js // Prisma client output (custom)



---

## 🔐 Authentication Flow (Sign Up)

1. **Frontend** collects `username`, `email`, and `password` using custom `ref`-based inputs.
2. On form submit, a POST request is sent to `/api/v1/signUp`.
3. In the backend (`route.ts`):
   - The password is validated.
   - It's hashed using `bcrypt.hash(password, 10)`.
   - The user is stored in the database using Prisma.

---

## 🔧 Prisma Client Initialization

To avoid creating multiple database connections during development, a singleton pattern using `globalThis.prisma` is used:

```ts
const prisma = globalThis.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;



🛠️ Commands

Install dependencies
<pre>```npm install```</pre>

Generate Prisma Client
<pre>```npx prisma generate```</pre>

Run Development Server
<pre>```npm run dev```</pre>

🔒 Password Hashing (bcrypt)
Passwords are hashed securely before saving to the DB:


<pre>```const hashedPassword = await bcrypt.hash(password, 10);```<pre>

Verification is done during login using:
<pre>```const isMatch = await bcrypt.compare(plainPassword, hashedPassword);```</pre>
✅ Todo (Future)
 Add Sign-In API

 Add JWT or session-based authentication

 Add protected routes and user dashboard

 Add form validation and error messages

 Add full TypeScript type safety