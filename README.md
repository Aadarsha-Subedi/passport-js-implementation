# PassportJS OAuth2.0 Authentication Implementation

This mini-project demonstrates a complete implementation of OAuth2.0 authentication using PassportJS, featuring both backend and frontend components. The application supports authentication through multiple providers (Google and GitHub) and implements protected routes with session management.

## Features

-   Multiple OAuth2.0 Authentication Providers
    -   Google OAuth2.0
    -   GitHub OAuth2.0
-   Protected Routes
-   Session Management
-   Logout Functionality
-   Responsive Frontend
-   Fast Development with Vite
-   Type Safety with TypeScript

## Tech Stack

### Backend

-   Node.js
-   Express.js
-   PassportJS
-   express-session
-   CORS
-   dotenv

### Frontend

-   React
-   TypeScript
-   Vite
-   Zustand (State Management)
-   React Router DOM

## Project Structure

```
project/
├── passportjs-backend/        # Backend implementation
│   ├── routes/
│   │   └── auth.js           # Authentication routes
│   ├── passport.js           # Passport strategies configuration
│   ├── server.js             # Express server setup
│   └── .env.example          # Environment variables template
│
└── passportjs-frontend/      # Frontend implementation
    ├── src/
    │   ├── components/       # Reusable components
    │   ├── pages/           # Page components
    │   ├── store/           # Zustand state management
    │   ├── styles/          # CSS styles
    │   └── utils/           # Utility functions
    └── vite.config.ts       # Vite configuration
```

## Implementation Details

### Backend Implementation

1. **Passport Configuration (`passport.js`)**

    - Configures Google and GitHub OAuth2.0 strategies
    - Implements user serialization and deserialization
    - Extracts essential user information (id, name, email, avatar)

2. **Server Setup (`server.js`)**

    - Express server configuration
    - CORS setup with credentials
    - Session management
    - Protected route implementation

3. **Authentication Routes (`routes/auth.js`)**
    - Google OAuth2.0 routes
    - GitHub OAuth2.0 routes
    - Logout functionality

### Frontend Implementation

1. **State Management**

    - Zustand store for authentication state
    - Loading state management
    - User information storage

2. **Route Protection**

    - Protected routes for authenticated users
    - Public routes for non-authenticated users
    - Loading states during authentication

3. **Components**
    - Container layout
    - Loading indicator
    - Protected route wrapper
    - Public route wrapper

## Environment Variables

Create a `.env` file in the backend directory using the following template:

```env
BACKEND_PORT=YOUR_BACKEND_PORT
FRONTEND_URL=YOUR_FRONTEND_URL
GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET
GITHUB_CLIENT_ID=YOUR_GITHUB_CLIENT_ID
GITHUB_CLIENT_SECRET=YOUR_GITHUB_CLIENT_SECRET
```

## Setup Instructions

1. Clone the repository
2. Install dependencies for both frontend and backend:

    ```bash
    # Backend setup
    cd passportjs-backend
    npm install

    # Frontend setup
    cd ../passportjs-frontend
    npm install
    ```

3. Configure environment variables:

    - Copy `.env.example` to `.env` in the backend directory
    - Fill in your OAuth2.0 credentials from Google and GitHub
    - Set appropriate port numbers and URLs
    - Update the backend URL in `passportjs-frontend/src/utils/url.ts` to match your backend port

4. Start the development servers:

    ```bash
    # Backend
    cd passportjs-backend
    npm run dev

    # Frontend
    cd ../passportjs-frontend
    npm run dev
    ```

## OAuth2.0 Setup

### Google OAuth2.0

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Configure the OAuth consent screen
5. Create credentials (OAuth client ID)
6. Add authorized redirect URIs:
    - `http://localhost:YOUR_BACKEND_PORT/auth/google/callback`

### GitHub OAuth2.0

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Create a new OAuth App
3. Configure the application settings
4. Add the callback URL:
    - `http://localhost:YOUR_BACKEND_PORT/auth/github/callback`

## Security Considerations

-   Uses session-based authentication
-   Implements CORS with credentials
-   Protected routes on both frontend and backend
-   Secure handling of OAuth tokens
-   Environment variables for sensitive data

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
