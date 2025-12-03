# WEBPIX Backend API

Backend authentication and user management system for WEBPIX.

## Features

- ✅ Email/Password authentication
- ✅ Google OAuth integration
- ✅ JWT-based session management
- ✅ Duplicate account prevention (name+surname & email)
- ✅ User profile management
- ✅ Xpixel tracking and statistics
- ✅ Global statistics dashboard
- ✅ Rate limiting and security headers

## Tech Stack

- Node.js + Express
- MySQL database
- Passport.js (Google OAuth)
- JWT authentication
- bcrypt password hashing

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

Edit `.env` with your configuration:
- Database credentials (MySQL from Hostinger)
- JWT secret key
- Google OAuth credentials (from Google Cloud Console)
- Frontend URL

### 3. Set Up Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URI: `http://localhost:5000/api/auth/google/callback`
6. Copy Client ID and Client Secret to `.env`

### 4. Initialize Database

```bash
npm run init-db
```

This creates all necessary tables:
- `users` - User accounts and profiles
- `xpixels` - User-owned Xpixels with coordinates
- `statistics` - Global platform statistics

### 5. Start Server

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

### Authentication

- `POST /api/auth/signup` - Create new account
- `POST /api/auth/login` - Login with email/password
- `GET /api/auth/me` - Get current user
- `GET /api/auth/google` - Initiate Google OAuth
- `GET /api/auth/google/callback` - Google OAuth callback

### User Management

All endpoints require JWT token in Authorization header: `Bearer <token>`

- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update profile (wallet, address, phone)
- `GET /api/user/stats` - Get user Xpixels and statistics
- `GET /api/user/stats/global` - Get global platform statistics

## Database Schema

### users
- id, email, password_hash, name, surname
- wallet_address, living_address, phone_number
- auth_provider, google_id, is_verified
- created_at, updated_at

### xpixels
- id, user_id, coordinate_x, coordinate_y
- token_share, purchase_date

### statistics
- total_xpixels_bought, total_xpixels_available
- fill_percentage, last_updated

## Security Features

- Password hashing with bcrypt
- JWT token expiration
- Rate limiting (100 requests/15 min)
- Helmet.js security headers
- Input validation with express-validator
- CORS protection
- Unique constraint on email and name+surname

## Deployment to Hostinger

1. Upload backend folder via FTP or Git
2. Set up MySQL database in Hostinger cPanel
3. Update `.env` with production database credentials
4. Run `npm run init-db` on server
5. Start server with `npm start` or use PM2

## Error Codes

- `401` - Unauthorized (invalid/missing token)
- `403` - Forbidden (token expired)
- `409` - Conflict (duplicate account)
- `500` - Internal server error
