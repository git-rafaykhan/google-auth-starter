# 🛡️ Google Auth Starter (Express + MongoDB + TypeScript)

A fully working backend starter kit for **Google OAuth2.0 login** with:

- ✅ Express.js
- ✅ TypeScript
- ✅ MongoDB + Mongoose
- ✅ JWT Authentication
- ✅ Google OAuth Login Flow
- ✅ Secure Token Storage
- ✅ Ready for Deployment

> 📦 Made with ❤️ by Rafay

---

## 🚀 Installation

```bash
# Create your project
mkdir my-backend && cd my-backend
npm init -y

# Install this starter as a template
npm i google-auth-starter

# Generate the template
npx google-auth-starter
```

---

## 📂 Folder Structure

```
/my-backend
  └── src/
      ├── controllers/
      ├── models/
      ├── routes/
      ├── utils/
      └── index.ts
  ├── .env
  ├── tsconfig.json
  ├── package.json
  └── ...
```

---

## 🔐 Environment Variables

Rename `.env.example` to `.env` and fill in your secrets:

```env
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret
GOOGLE_CALLBACK_URL=http://localhost:3000/api/auth/google/callback
MONGO_URI=mongodb+srv://...
JWT_SECRET=your-jwt-secret
PORT=3000
```

---

## 🧠 OAuth Flow Summary

1. Visit `/api/auth/google`
2. You’ll be redirected to Google Login
3. On success, callback hits `/api/auth/google/callback`
4. Google user is saved to MongoDB
5. JWT is created and returned

---

## 🧪 Dev Scripts

```bash
# Start dev server
npm run dev

# Build the project
npm run build

# Start production server
npm start
```

---

## 🧰 Technologies Used

- Node.js / Express
- TypeScript
- Google OAuth2 API
- MongoDB (Mongoose)
- JWT

---

## 📣 Credits

Built with ❤️ by **Rafay**  
Feel free to contribute or raise an issue.
