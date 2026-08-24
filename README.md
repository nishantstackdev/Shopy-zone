# Shopy Zone - Full-Stack E-Commerce Platform

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-v20-green?style=for-the-badge&logo=node.js)
![Express.js](https://img.shields.io/badge/Express.js-5.2-blue?style=for-the-badge&logo=express)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=next.js)
![MongoDB](https://img.shields.io/badge/MongoDB-9.3-13AA52?style=for-the-badge&logo=mongodb)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2.11-764ABC?style=for-the-badge&logo=redux)
![Razorpay](https://img.shields.io/badge/Razorpay-Payment-00838F?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

**A modern, full-stack e-commerce platform with advanced product management, secure payment processing, and comprehensive admin controls.**

[Live Preview](#) • [API Documentation](#api-endpoints) • [Setup Guide](#local-setup--installation)

</div>

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Architecture & Folder Structure](#architecture--folder-structure)
- [Tech Stack](#tech-stack)
- [Local Setup & Installation](#local-setup--installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Troubleshooting](#troubleshooting)

---

## 🎯 Project Overview

**Shopy Zone** is a production-ready e-commerce platform designed for modern online retail with real-time inventory management, secure payment processing via Razorpay, and a comprehensive admin dashboard. The platform features role-based access control, multi-step user authentication with OTP verification, and a responsive, SEO-optimized frontend built with Next.js.

### Business Vision

- **High-Performance Shopping Experience**: Fast, responsive interface with server-side rendering
- **Advanced Admin Capabilities**: Complete product, category, brand, and color management
- **Secure Transactions**: Razorpay payment gateway integration with order tracking
- **Scalable Architecture**: Microservices-ready backend with modular controllers and routers
- **Mobile-First Design**: Fully responsive UI optimized for all device sizes

---

## 📸 Visual Proofs & Media

### Screenshots & Demo

- **Homepage Demo**: https://youtu.be/dIC163vMmd8
- **Product Browsing**: https://youtu.be/fSNAsZ2rcHo
- **Admin Dashboard**: https://youtu.be/3DrEVfgJI6o
- **Checkout Flow**: https://youtu.be/l-o2hn0XXic
- **Payment Processing**: https://youtu.be/8J0wj8DKer4

---

## ✨ Features

### 👥 User Interface & Client Flow

| Feature              | Description                                                                            |
| -------------------- | -------------------------------------------------------------------------------------- |
| **Homepage**         | Dynamic hero section, category carousel, best deals, new arrivals, recommendations     |
| **Product Browsing** | Filter by category, brand, color; Search functionality; Pagination                     |
| **Product Details**  | Rich media (images, thumbnails), pricing, stock status, customer reviews               |
| **Shopping Cart**    | Add/remove items, quantity management, local storage persistence, cart sync to backend |
| **Checkout Process** | Multi-step checkout, address management, payment gateway integration                   |
| **Order Tracking**   | View order history, real-time status updates, order details                            |
| **User Profile**     | View profile info, manage addresses, view purchase history                             |

### 🔐 Authentication & Authorization

| Feature               | Details                                                        |
| --------------------- | -------------------------------------------------------------- |
| **User Registration** | Email-based registration with password validation              |
| **Login System**      | Secure login with JWT tokens stored in HTTP-only cookies       |
| **OTP Verification**  | Email-based OTP verification for new accounts                  |
| **Password Reset**    | Request OTP to reset forgotten passwords                       |
| **Role-Based Access** | Three roles: User, Admin, SuperAdmin with granular permissions |
| **Protected Routes**  | Frontend and backend route protection via middleware           |

### 🛠️ Admin Controls

| Feature                 | Capabilities                                                                   |
| ----------------------- | ------------------------------------------------------------------------------ |
| **Dashboard**           | Revenue metrics, order stats, recent orders, user activity                     |
| **Product Management**  | Create, read, update, delete products; Multiple image uploads; Pricing control |
| **Category Management** | CRUD operations for product categories; Category images                        |
| **Brand Management**    | Manage brands with logos; Brand association with products                      |
| **Color Management**    | Add/edit product variants; Color inventory management                          |
| **Order Management**    | View all customer orders, update order status (Pending/Shipped/Delivered)      |
| **Analytics**           | Sales overview, revenue trends, order volume metrics                           |

### 🔧 Core API Features

| Feature              | Details                                                             |
| -------------------- | ------------------------------------------------------------------- |
| **User Management**  | Registration, login, verification, address management, OTP handling |
| **Product Catalog**  | Full CRUD, filtering, search, image management                      |
| **Inventory**        | Stock tracking, status management, availability checking            |
| **Shopping Cart**    | Server-side cart synchronization, persistent storage                |
| **Order Processing** | Order creation, Razorpay payment verification, status tracking      |
| **File Uploads**     | Product images, category images, brand logos with organized storage |
| **Security**         | CORS protection, Helmet security headers, JWT authentication        |

---

## 📁 Architecture & Folder Structure

```
Ecomm-store/
│
├── Ecomm-store backend/                 # Express.js Backend Server
│   ├── server.js                        # Main server entry point
│   ├── package.json                     # Backend dependencies
│   │
│   ├── controllers/                     # Business logic handlers
│   │   ├── Usercontroller.js            # User auth, profile, address management
│   │   ├── Productcontroller.js         # Product CRUD operations
│   │   ├── Categorycontroller.js        # Category management
│   │   ├── Brandcontroller.js           # Brand management
│   │   ├── Colorcontroller.js           # Color/variant management
│   │   ├── Cartcontroller.js            # Shopping cart logic
│   │   └── Ordercontroller.js           # Order creation, payment verification
│   │
│   ├── routers/                         # API route definitions (Express routers)
│   │   ├── Userrouter.js                # User endpoints (/user/*)
│   │   ├── Productrouter.js             # Product endpoints (/product/*)
│   │   ├── Categoryrouter.js            # Category endpoints (/category/*)
│   │   ├── Brandrouter.js               # Brand endpoints (/brand/*)
│   │   ├── Colorrouter.js               # Color endpoints (/color/*)
│   │   ├── Cartrouter.js                # Cart endpoints (/cart/*)
│   │   └── Orderrouter.js               # Order endpoints (/order/*)
│   │
│   ├── models/                          # Mongoose data schemas
│   │   ├── Usermodel.js                 # User schema (name, email, role, addresses)
│   │   ├── Productmodel.js              # Product schema (prices, category, inventory)
│   │   ├── Categorymodel.js             # Category schema with images
│   │   ├── Brandmodel.js                # Brand schema with logos
│   │   ├── Colormodel.js                # Color variant schema
│   │   ├── Cartmodel.js                 # Cart schema (user > items)
│   │   └── Ordermodel.js                # Order schema (details, payment, status)
│   │
│   ├── middleware/                      # Express middleware functions
│   │   └── auth.js                      # JWT verification, role-based authorization
│   │
│   ├── utils/                           # Utility functions
│   │   ├── generateToken.js             # JWT token generation (30d expiry)
│   │   ├── SendOtp.js                   # Nodemailer OTP email sending
│   │   └── helper.js                    # Shared helper functions
│   │
│   ├── public/                          # Static files & uploads
│   │   └── images/
│   │       ├── brand/                   # Uploaded brand logos
│   │       ├── category/                # Uploaded category images
│   │       └── product/                 # Uploaded product images
│   │
│   └── scripts/                         # Utility scripts
│       └── smoke-test.js                # API health check script
│
├── Ecomm-store frontend/                # Next.js Frontend Application
│   ├── next.config.mjs                  # Next.js configuration
│   ├── package.json                     # Frontend dependencies
│   ├── tailwind.config.js               # Tailwind CSS customization
│   │
│   ├── src/
│   │   ├── middleware.js                # Next.js middleware (auth checks)
│   │   │
│   │   ├── app/                         # Next.js 15 App Router (file-based routing)
│   │   │   ├── globals.css              # Global styles
│   │   │   ├── layout.jsx               # Root layout component
│   │   │   ├── loading.jsx              # Loading skeleton/state
│   │   │   ├── not-found.jsx            # 404 error page
│   │   │   │
│   │   │   ├── (user-auth)/             # Auth route group
│   │   │   │   ├── layout.js            # Auth layout (no navbar)
│   │   │   │   ├── login/page.jsx       # Login page
│   │   │   │   ├── register/page.jsx    # Registration page
│   │   │   │   └── verify-otp/page.jsx  # OTP verification page
│   │   │   │
│   │   │   ├── (admin-group)/           # Admin route group
│   │   │   │   ├── layout.js            # Admin layout with sidebar
│   │   │   │   └── admin/
│   │   │   │       ├── page.jsx         # Admin dashboard (stats, charts)
│   │   │   │       ├── brand/           # Brand management pages
│   │   │   │       ├── category/        # Category management pages
│   │   │   │       ├── color/           # Color management pages
│   │   │   │       └── product/         # Product management pages
│   │   │   │
│   │   │   └── (website-group)/         # Customer website routes
│   │   │       ├── layout.js            # Website layout (navbar, footer)
│   │   │       ├── page.jsx             # Homepage with sections
│   │   │       ├── products/            # Product listing pages
│   │   │       │   ├── page.jsx         # All products view
│   │   │       │   └── [category_slug]/ # Category-filtered products
│   │   │       ├── product-detail/
│   │   │       │   └── [slug]/          # Individual product detail page
│   │   │       ├── cart/page.jsx        # Shopping cart page
│   │   │       ├── checkout/page.jsx    # Checkout & order creation
│   │   │       ├── thank-you/page.jsx   # Order confirmation page
│   │   │       └── profile/page.jsx     # User profile & orders
│   │   │
│   │   ├── api/                         # API route handlers (Next.js API routes)
│   │   │   ├── Brand.js                 # Brand API wrapper
│   │   │   ├── Category.js              # Category API wrapper
│   │   │   ├── Color.js                 # Color API wrapper
│   │   │   └── Product.js               # Product API wrapper
│   │   │
│   │   ├── components/                  # Reusable React components
│   │   │   ├── admin/                   # Admin dashboard components
│   │   │   │   ├── Header.jsx           # Admin header/top nav
│   │   │   │   ├── Sidebar.jsx          # Admin sidebar navigation
│   │   │   │   ├── ProductTableClient.jsx # Products table (client-side)
│   │   │   │   ├── EditProduct.jsx      # Edit product modal
│   │   │   │   ├── EditBrand.jsx        # Edit brand modal
│   │   │   │   ├── EditCategory.jsx     # Edit category modal
│   │   │   │   ├── EditColor.jsx        # Edit color modal
│   │   │   │   ├── ViewModel.jsx        # View modal component
│   │   │   │   ├── DeleteBtn.jsx        # Reusable delete button
│   │   │   │   └── StatusBtn.jsx        # Status toggle button
│   │   │   │
│   │   │   ├── website/                 # Customer-facing components
│   │   │   │   ├── global/              # Navbar, footer, layouts
│   │   │   │   ├── home/                # Homepage sections
│   │   │   │   │   ├── FirstSection/    # Hero section
│   │   │   │   │   ├── Section_2/       # Category carousel
│   │   │   │   │   ├── Section_3/       # Best deals section
│   │   │   │   │   ├── Section_4/       # New arrivals
│   │   │   │   │   ├── Section_5/       # Recommended products
│   │   │   │   │   ├── SideBanners/     # Promotional banners
│   │   │   │   │   └── Brandsrow/       # Featured brands
│   │   │   │   ├── store/               # Products listing components
│   │   │   │   ├── slider/              # Image/product sliders
│   │   │   │   ├── cart/                # Cart page components
│   │   │   │   ├── checkout/            # Checkout flow components
│   │   │   │   ├── profile/             # User profile components
│   │   │   │   └── AOSinit.jsx          # AOS (Animate On Scroll) setup
│   │   │   │
│   │   │   └── CategoryCircle.jsx       # Category circle button component
│   │   │
│   │   ├── redux/                       # Redux state management
│   │   │   ├── store.js                 # Redux store configuration
│   │   │   ├── ReduxProvidor.jsx        # Redux provider wrapper
│   │   │   └── features/
│   │   │       └── cartSlice.js         # Cart state slice (add, remove, update)
│   │   │
│   │   ├── services/                    # API service functions
│   │   │   └── auth.js                  # Authentication service (getMe, logout)
│   │   │
│   │   └── helper/                      # Utility & helper functions
│   │       └── helper.js                # Axios instance, slug creation, toast
│   │
│   └── public/                          # Static assets
│       └── images/
│           ├── home/                    # Homepage images
│           └── store/                   # Product catalog images
│
└── README.md                            # This file

```

### Key Architectural Highlights

- **Backend**: RESTful API with Express.js, organized by MVC pattern (Models, Views/Controllers, Routes)
- **Frontend**: Next.js 15 with App Router, Server Components, and Client-side Interactivity
- **State Management**: Redux Toolkit for global cart state, local storage for cart persistence
- **Authentication**: JWT tokens in HTTP-only cookies, role-based middleware protection
- **Database**: MongoDB/Mongoose with normalized schema design
- **File Management**: Express-fileupload for product/category/brand image uploads
- **Styling**: Tailwind CSS with responsive design, PrimeReact components for admin UI

---

## 🛠️ Tech Stack

### Frontend

| Category             | Technology                            | Version         |
| -------------------- | ------------------------------------- | --------------- |
| **Framework**        | Next.js                               | 15.5.15         |
| **Library**          | React                                 | 19.2.4          |
| **Styling**          | Tailwind CSS                          | 4.0             |
| **State Management** | Redux Toolkit                         | 2.11.2          |
| **HTTP Client**      | Axios                                 | 1.13.6          |
| **UI Components**    | PrimeReact, Lucide React              | 10.9.7, 0.577.0 |
| **Icons**            | React Icons                           | 5.6.0           |
| **Animations**       | Swiper, AOS                           | 12.1.3, 2.3.4   |
| **Payment**          | React Razorpay                        | 3.0.1           |
| **Notifications**    | React Toastify                        | 11.0.5          |
| **Alerts**           | SweetAlert2                           | 11.26.24        |
| **Rich Editor**      | Quill                                 | 2.0.3           |
| **Utilities**        | js-cookie (JWT storage), React Select | 3.0.8, 5.10.2   |

### Backend

| Category            | Technology                  | Version      |
| ------------------- | --------------------------- | ------------ |
| **Runtime**         | Node.js                     | v20+         |
| **Framework**       | Express.js                  | 5.2.1        |
| **Database**        | MongoDB (with Mongoose ODM) | 9.3.3        |
| **Authentication**  | JSON Web Tokens (JWT)       | 9.0.3        |
| **Email Service**   | Nodemailer                  | 8.0.6        |
| **Payment Gateway** | Razorpay                    | 2.9.6        |
| **File Upload**     | Express FileUpload          | 1.5.2        |
| **Security**        | Helmet, CORS                | 8.3.0, 2.8.6 |
| **Encryption**      | Cryptr                      | 6.4.0        |
| **Environment**     | dotenv                      | 17.3.1       |
| **Cookie Parsing**  | Cookie-Parser               | 1.4.7        |

### Infrastructure & Tools

| Tool        | Purpose                                 |
| ----------- | --------------------------------------- |
| **Git**     | Version control & repository management |
| **NPM**     | Package dependency management           |
| **ESLint**  | Code quality & linting (frontend)       |
| **PostCSS** | CSS preprocessing (Tailwind)            |

---

## 🚀 Local Setup & Installation

### Prerequisites

Ensure your development environment meets these requirements:

- **Node.js**: v20 or higher ([Download](https://nodejs.org/))
- **npm**: v10+ (comes with Node.js)
- **Git**: v2.0+ ([Download](https://git-scm.com/))
- **MongoDB**: Local instance or MongoDB Atlas cloud database ([Get Atlas](https://www.mongodb.com/cloud/atlas))
- **Razorpay Account**: For payment processing ([Sign Up](https://razorpay.com/))
- **Email Provider**: Gmail, SendGrid, or similar for OTP emails

### Step 1: Clone the Repository

```bash
# Clone the project repository
git clone https://github.com/your-username/Ecomm-store.git

# Navigate to the project directory
cd Ecomm-store

# Verify the folder structure
ls -la
# Expected output:
# Ecomm-store backend/
# Ecomm-store frontend/
# README.md
```

---

### Step 2: Backend Setup & Configuration

#### 2.1 Navigate to Backend Directory

```bash
cd "Ecomm-store backend"
```

#### 2.2 Install Backend Dependencies

```bash
npm install
```

This will install all dependencies listed in `package.json`:

- Express.js, Mongoose, JWT, Nodemailer, Razorpay, Helmet, CORS, and more

#### 2.3 Backend Environment Setup

Create a `.env` file in the `Ecomm-store backend/` directory:

```bash
# Create .env file
touch .env
```

Copy and paste the following template into your `.env` file. Replace placeholder values with your actual credentials:

```env
# ========== SERVER CONFIGURATION ==========
PORT=5000
NODE_ENV=development

# ========== DATABASE CONFIGURATION ==========
# MongoDB Connection String
# For Local MongoDB: mongodb://localhost:27017/ecomm-store
# For MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/ecomm-store
DATABASE_URL=mongodb://localhost:27017/ecomm-store

# ========== JWT CONFIGURATION ==========
# Secret key for JWT token signing (use a strong, random string)
# Example: Generate using: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
SECRET_KEY=your_super_secret_jwt_key_min_32_characters_long

# ========== CORS CONFIGURATION ==========
# Frontend URL for CORS origin
# For local development:
FRONTEND_URL=http://localhost:3000
# For production (Vercel):
# FRONTEND_URL=https://your-frontend-domain.vercel.app

# ========== EMAIL CONFIGURATION (Nodemailer) ==========
# Gmail Configuration (enable 2FA and use App Password)
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password

# Or SendGrid Configuration
SENDGRID_API_KEY=sg_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# ========== PAYMENT GATEWAY (Razorpay) ==========
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxx
RAZORPAY_KEY_SECRET=xxxxxxxxxxxxxxxxxxxxxxxx

# ========== OTP CONFIGURATION ==========
# OTP expiry time in minutes
OTP_EXPIRY=10

# ========== ADMIN CONFIGURATION ==========
# Default admin email (set during initial setup)
ADMIN_EMAIL=admin@ecommstore.com
ADMIN_PASSWORD=secure_admin_password
```

#### 2.4 Start the Backend Server

```bash
# Development mode (with nodemon auto-reload)
npm run dev

# OR Production mode
npm start
```

**Expected Output:**

```
Database Connected successfully
Server Started on port 5000
```

The backend API will be available at: `http://localhost:5000`

**Verify Backend is Running:**

```bash
curl http://localhost:5000/product
# Should return the list of products (or empty array if no products added)
```

---

### Step 3: Frontend Setup & Configuration

#### 3.1 Navigate to Frontend Directory

```bash
# From the Ecomm-store directory, open a NEW TERMINAL and navigate to frontend
cd "Ecomm-store frontend"
```

#### 3.2 Install Frontend Dependencies

```bash
npm install
```

This will install React, Next.js, Redux, Tailwind, Axios, and all other dependencies.

#### 3.3 Frontend Environment Setup

Create a `.env.local` file in the `Ecomm-store frontend/` directory:

```bash
# Create .env.local file
touch .env.local
```

Copy and paste the following template into your `.env.local` file:

```env
# ========== API CONFIGURATION ==========
# Backend API Base URL
# For local development:
NEXT_PUBLIC_BASE_URL=http://localhost:5000/api

# For production:
# NEXT_PUBLIC_BASE_URL=https://your-backend-api.com/api

# ========== RAZORPAY CONFIGURATION ==========
# Razorpay Test Key (from your Razorpay Dashboard)
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxx

# ========== ENVIRONMENT ==========
NEXT_PUBLIC_ENV=development
```

**Important Notes:**

- `NEXT_PUBLIC_` prefix makes variables available in the browser
- Keep sensitive API keys (like backend URL) accessible to frontend
- For production, update URLs to point to your live backend

#### 3.4 Start the Frontend Development Server

```bash
# Development mode
npm run dev

# The frontend will start on http://localhost:3000
```

**Expected Output:**

```
  ▲ Next.js 15.5.15
  - Local:        http://localhost:3000
  - Environments: .env.local

✔ Ready in 2.5s
```

Open your browser and navigate to: `http://localhost:3000`

#### 3.5 Frontend Local Development Info

- **Development Port**: `3000`
- **Hot Reload**: Enabled (changes auto-refresh)
- **Next.js Server Rendering**: Enabled (faster initial loads)

#### 3.6 Production Build

```bash
# Create optimized production build
npm run build

# Start production server
npm start

# Or preview the build locally
npm run dev  # Uses the built files
```

**Build Output Location**: `.next/` directory (optimized bundle)

---

## 🔐 Environment Variables Guide

### Backend Environment Variables

| Variable              | Purpose                         | Default/Sample                          | Required |
| --------------------- | ------------------------------- | --------------------------------------- | -------- |
| `PORT`                | Server port                     | `5000`                                  | ✅ Yes   |
| `NODE_ENV`            | Environment mode                | `development`                           | ✅ Yes   |
| `DATABASE_URL`        | MongoDB connection string       | `mongodb://localhost:27017/ecomm-store` | ✅ Yes   |
| `SECRET_KEY`          | JWT signing key                 | `your_secret_key_min_32_chars`          | ✅ Yes   |
| `FRONTEND_URL`        | CORS allowed frontend URL       | `http://localhost:3000`                 | ✅ Yes   |
| `EMAIL_USER`          | Sender email (Gmail/SendGrid)   | `your-email@gmail.com`                  | ✅ Yes   |
| `EMAIL_PASSWORD`      | Email app password              | `xxxx xxxx xxxx xxxx`                   | ✅ Yes   |
| `RAZORPAY_KEY_ID`     | Razorpay merchant key           | `rzp_test_xxxxx`                        | ✅ Yes   |
| `RAZORPAY_KEY_SECRET` | Razorpay merchant secret        | `xxxxxxx`                               | ✅ Yes   |
| `OTP_EXPIRY`          | OTP validity duration (minutes) | `10`                                    | ❌ No    |

### Frontend Environment Variables

| Variable                      | Purpose                          | Default/Sample              | Required |
| ----------------------------- | -------------------------------- | --------------------------- | -------- |
| `NEXT_PUBLIC_BASE_URL`        | Backend API base URL             | `http://localhost:5000/api` | ✅ Yes   |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | Razorpay public key for frontend | `rzp_test_xxxxx`            | ✅ Yes   |
| `NEXT_PUBLIC_ENV`             | Environment mode                 | `development`               | ❌ No    |

---

## 📡 API Endpoints

### Base URL

- **Development**: `http://localhost:5000`
- **Production**: `https://your-api-domain.com`

All endpoints are prefixed with `/api` in frontend requests. Backend serves directly on `/`.

### Authentication Endpoints

| Method | Endpoint            | Description                 | Auth Required | Request Body                                                        |
| ------ | ------------------- | --------------------------- | ------------- | ------------------------------------------------------------------- |
| `POST` | `/user/create`      | Register new user           | ❌ No         | `{ email, password, name, phone }`                                  |
| `POST` | `/user/login`       | User login                  | ❌ No         | `{ email, password }`                                               |
| `POST` | `/user/verify-otp`  | Verify OTP from email       | ❌ No         | `{ email, otp }`                                                    |
| `POST` | `/user/reset-otp`   | Request password reset OTP  | ❌ No         | `{ email }`                                                         |
| `GET`  | `/user/get`         | Get current user profile    | ✅ Yes (JWT)  | -                                                                   |
| `GET`  | `/user/logout`      | Clear user session          | ✅ Yes (JWT)  | -                                                                   |
| `POST` | `/user/add-address` | Add/update delivery address | ✅ Yes (JWT)  | `{ fullName, phone, pincode, addressLine, city, state, isDefault }` |

### Product Endpoints

| Method   | Endpoint                    | Description                              | Auth Required | Role Restricted  |
| -------- | --------------------------- | ---------------------------------------- | ------------- | ---------------- |
| `GET`    | `/product`                  | Get all products (paginated, filterable) | ❌ No         | -                |
| `GET`    | `/product/:id`              | Get single product details               | ❌ No         | -                |
| `POST`   | `/product/create`           | Create new product (with images)         | ✅ Yes        | Admin/SuperAdmin |
| `PATCH`  | `/product/update/:id`       | Update product details                   | ✅ Yes        | Admin/SuperAdmin |
| `PUT`    | `/product/edit/:id`         | Edit product (with image update)         | ✅ Yes        | Admin/SuperAdmin |
| `DELETE` | `/product/delete/:id`       | Delete product                           | ✅ Yes        | Admin/SuperAdmin |
| `POST`   | `/product/other-images/:id` | Add multiple product images              | ✅ Yes        | Admin/SuperAdmin |

### Category Endpoints

| Method   | Endpoint               | Description                  | Auth Required | Role Restricted  |
| -------- | ---------------------- | ---------------------------- | ------------- | ---------------- |
| `GET`    | `/category`            | Get all categories           | ❌ No         | -                |
| `GET`    | `/category/:id`        | Get category details         | ❌ No         | -                |
| `POST`   | `/category/create`     | Create category (with image) | ✅ Yes        | Admin/SuperAdmin |
| `PATCH`  | `/category/update/:id` | Update category              | ✅ Yes        | Admin/SuperAdmin |
| `PUT`    | `/category/update/:id` | Edit category (with image)   | ✅ Yes        | Admin/SuperAdmin |
| `DELETE` | `/category/delete/:id` | Delete category              | ✅ Yes        | Admin/SuperAdmin |

### Brand Endpoints

| Method   | Endpoint            | Description              | Auth Required | Role Restricted  |
| -------- | ------------------- | ------------------------ | ------------- | ---------------- |
| `GET`    | `/brand`            | Get all brands           | ❌ No         | -                |
| `GET`    | `/brand/:id`        | Get brand details        | ❌ No         | -                |
| `POST`   | `/brand/create`     | Create brand (with logo) | ✅ Yes        | Admin/SuperAdmin |
| `PATCH`  | `/brand/update/:id` | Update brand             | ✅ Yes        | Admin/SuperAdmin |
| `PUT`    | `/brand/update/:id` | Edit brand (with logo)   | ✅ Yes        | Admin/SuperAdmin |
| `DELETE` | `/brand/delete/:id` | Delete brand             | ✅ Yes        | Admin/SuperAdmin |

### Color Endpoints

| Method   | Endpoint            | Description          | Auth Required | Role Restricted  |
| -------- | ------------------- | -------------------- | ------------- | ---------------- |
| `GET`    | `/color`            | Get all colors       | ❌ No         | -                |
| `GET`    | `/color/:id`        | Get color details    | ❌ No         | -                |
| `POST`   | `/color/create`     | Create color variant | ✅ Yes        | Admin/SuperAdmin |
| `PATCH`  | `/color/update/:id` | Update color         | ✅ Yes        | Admin/SuperAdmin |
| `PUT`    | `/color/update/:id` | Edit color           | ✅ Yes        | Admin/SuperAdmin |
| `DELETE` | `/color/delete/:id` | Delete color         | ✅ Yes        | Admin/SuperAdmin |

### Cart Endpoints

| Method | Endpoint     | Description                         | Auth Required |
| ------ | ------------ | ----------------------------------- | ------------- |
| `POST` | `/cart/sync` | Sync local cart to server & persist | ✅ Yes (JWT)  |

### Order Endpoints

| Method | Endpoint        | Description                               | Auth Required | Role Restricted  |
| ------ | --------------- | ----------------------------------------- | ------------- | ---------------- |
| `POST` | `/order/create` | Create new order (with Razorpay order ID) | ✅ Yes        | User             |
| `POST` | `/order/verify` | Verify payment & complete order           | ✅ Yes        | User             |
| `GET`  | `/order`        | Get all orders (admin view)               | ✅ Yes        | Admin/SuperAdmin |
| `PUT`  | `/order/status` | Update order status                       | ✅ Yes        | Admin/SuperAdmin |

### Response Format

All API endpoints return JSON responses:

```json
{
  "success": true | false,
  "message": "Description of the response",
  "data": { /* response data */ }
}
```

**Example: GET /product**

```json
{
  "success": true,
  "message": "Products fetched successfully",
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "name": "Wireless Headphones",
      "slug": "wireless-headphones",
      "original_price": 2999,
      "discount_price": 15,
      "final_price": 2549,
      "category_id": "507f1f77bcf86cd799439012",
      "brand_Id": "507f1f77bcf86cd799439013",
      "thumbnail": "product_image.jpg",
      "stock": true
    }
  ]
}
```

---

## 🔧 Troubleshooting

### Common Local Setup Issues & Solutions

#### 1. **CORS Policy Errors**

**Problem**: Frontend cannot communicate with backend

```
Access to XMLHttpRequest at 'http://localhost:5000/...' from origin 'http://localhost:3000'
has been blocked by CORS policy
```

**Solution**:

```bash
# In Ecomm-store backend/.env, ensure FRONTEND_URL is correct:
FRONTEND_URL=http://localhost:3000

# Restart backend:
npm run dev
```

If error persists:

- Check browser console for exact error message
- Verify backend server is running on port 5000
- Clear browser cache: `Ctrl+Shift+Delete`

---

#### 2. **Port 5000 Already in Use**

**Problem**: Backend fails to start

```
Error: listen EADDRINUSE: address already in use :::5000
```

**Solution**:

```bash
# Find process using port 5000
netstat -ano | findstr :5000  # Windows
lsof -i :5000                 # macOS/Linux

# Kill the process
taskkill /PID <PID> /F        # Windows
kill -9 <PID>                 # macOS/Linux

# Or change port in .env
PORT=5001

# Restart backend
npm run dev
```

---

#### 3. **Port 3000 Already in Use**

**Problem**: Frontend fails to start

```
Port 3000 is already in use
```

**Solution**:

```bash
# Find process using port 3000
netstat -ano | findstr :3000  # Windows
lsof -i :3000                 # macOS/Linux

# Kill the process or use different port
npm run dev -- -p 3001
```

---

#### 4. **MongoDB Connection Failed**

**Problem**: Backend startup error

```
DB not connected: connection refused or ECONNREFUSED
```

**Solution**:

**For Local MongoDB:**

```bash
# Verify MongoDB is running
mongod --version

# Start MongoDB service
mongod                         # macOS/Linux
net start MongoDB             # Windows (if installed as service)

# Test connection
mongo                          # Should open MongoDB shell
```

**For MongoDB Atlas (Cloud):**

```bash
# Update DATABASE_URL in .env
DATABASE_URL=mongodb+srv://username:password@cluster-name.mongodb.net/ecomm-store

# Verify connection string:
# - Check username/password (no special characters need URL encoding)
# - Verify cluster name is correct
# - Ensure IP is whitelisted in Atlas: Network Access > Add IP
# - Use "Allow Access from Anywhere" temporarily for local testing (0.0.0.0/0)

# Test connection
npm run dev
```

---

#### 5. **Missing Environment Variables During Startup**

**Problem**: Backend crashes with "undefined" or "null" errors

```
TypeError: Cannot read property 'connect' of undefined
```

**Solution**:

```bash
# Verify .env file exists
ls -la .env  # Unix/Mac
dir .env     # Windows

# Verify all required variables are set
cat .env     # Unix/Mac
type .env    # Windows

# Create .env from template if missing:
# Copy the .env template from the setup guide above

# Restart backend
npm run dev
```

---

#### 6. **Frontend Cannot Find Backend API**

**Problem**: Network error in browser console

```
Failed to fetch from http://localhost:5000/api/product
```

**Solution**:

```bash
# 1. Verify backend is running
curl http://localhost:5000/product

# 2. Check frontend .env.local
cat src/../.env.local

# 3. Ensure NEXT_PUBLIC_BASE_URL is correct
NEXT_PUBLIC_BASE_URL=http://localhost:5000/api

# 4. Hot reload frontend
npm run dev

# 5. Hard refresh browser
Ctrl+Shift+R (Windows/Linux)
Cmd+Shift+R (macOS)
```

---

#### 7. **JWT Token/Authentication Issues**

**Problem**: 401 Unauthorized errors on protected routes

```
{
  "success": false,
  "message": "Token required"
}
```

**Solution**:

```bash
# 1. Clear browser cookies
# Open DevTools → Application → Cookies → Delete "jwt" cookie

# 2. Login again via /login page

# 3. Verify SECRET_KEY in .env is consistent
# Don't change SECRET_KEY after generating tokens — it invalidates them

# 4. Check token expiry (default 30 days in generateToken.js)

# 5. For development, temporarily increase expiry if needed:
# Edit utils/generateToken.js: { expiresIn: "365d" }
```

---

#### 8. **Email/OTP Not Sending**

**Problem**: Registration or password reset OTP not received

```
Nodemailer error in backend logs
```

**Solution**:

**For Gmail:**

```bash
# 1. Enable 2-Factor Authentication: myaccount.google.com/security

# 2. Create App Password:
# - Go to myaccount.google.com/apppasswords
# - Select "Mail" and "Windows Computer"
# - Copy the 16-character password (remove spaces)

# 3. Update .env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx  # 16-char password from step 2

# 4. Restart backend
npm run dev
```

**For SendGrid:**

```bash
# 1. Sign up: sendgrid.com

# 2. Create API Key: Settings > API Keys

# 3. Update .env
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# 4. Update SendOtp.js to use SendGrid instead of Nodemailer

# 5. Restart backend
npm run dev
```

---

#### 9. **Razorpay Payment Not Working**

**Problem**: Payment button not appearing or payment fails

```
Razorpay key undefined or payment modal doesn't open
```

**Solution**:

```bash
# 1. Get Razorpay Keys from: dashboard.razorpay.com
# Settings > API Keys > Copy Test Keys

# 2. Update backend .env
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxx
RAZORPAY_KEY_SECRET=xxxxxxxxxxxxxxxxxxxxxxx

# 3. Update frontend .env.local
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxx

# 4. Use Razorpay Test Card Details:
# Card Number: 4111 1111 1111 1111
# Expiry: Any future date
# CVV: 123

# 5. Restart both frontend and backend
```

---

#### 10. **Image Upload Issues**

**Problem**: Product/category images not uploading

```
Error: uploads folder not found
```

**Solution**:

```bash
# 1. Verify public/images directory exists
mkdir -p public/images/brand
mkdir -p public/images/category
mkdir -p public/images/product

# 2. Verify permissions (Unix/Mac)
chmod -R 755 public/images

# 3. Check fileupload middleware in routers
# Should include: fileupload({ createParentPath: true })

# 4. Verify static file serving in server.js
# Should include: server.use(express.static("public"))

# 5. Restart backend
npm run dev

# 6. Check uploaded files path
# Browser: http://localhost:5000/images/product/filename.jpg
```

---

#### 11. **Database Model Issues**

**Problem**: Mongoose validation errors when creating records

```
ValidationError: category_id: Cast to ObjectId failed
```

**Solution**:

```bash
# 1. Verify model schema structure
# Check models/Productmodel.js for field definitions

# 2. Ensure valid MongoDB ObjectId format
# Use: new mongoose.Types.ObjectId()

# 3. Verify referenced models exist
# If product refs category, ensure category is created first

# 4. Check controller logic
# Validate input before passing to Mongoose

# 5. Restart backend
npm run dev
```

---

#### 12. **Build or Deployment Errors**

**Problem**: `npm run build` fails on frontend

```
Build failed: Module not found or syntax error
```

**Solution**:

```bash
# 1. Clear Next.js cache
rm -rf .next
rm -rf node_modules/.cache

# 2. Check for TypeScript/ESLint errors
npm run lint

# 3. Verify all dependencies installed
npm install

# 4. Try building again
npm run build

# 5. For syntax errors, check the error message for line numbers
# Fix and retry
```

---

### Quick Diagnostic Checklist

Use this checklist to quickly diagnose issues:

- [ ] Backend running: `curl http://localhost:5000/product`
- [ ] Frontend running: Open `http://localhost:3000` in browser
- [ ] MongoDB connected: Check backend logs for "Database Connected"
- [ ] `.env` file exists in backend with all required variables
- [ ] `.env.local` file exists in frontend with BASE_URL
- [ ] No terminal errors in either frontend or backend
- [ ] Browser console has no CORS errors
- [ ] Ports 3000 and 5000 not in use by other processes
- [ ] Dependencies installed: `npm install` completed successfully
- [ ] Last restart after environment changes: Both frontend and backend restarted

---

## 📝 Development Best Practices

### Code Standards

1. **Backend**: Follow Express.js conventions (controllers, routers, models)
2. **Frontend**: Use React hooks, Next.js best practices, Tailwind utilities
3. **Database**: Use Mongoose validation and schema enforcement
4. **Security**: Never commit `.env` files, use environment variables for secrets

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/feature-name

# Make changes and commit
git add .
git commit -m "feat: description of changes"

# Push to repository
git push origin feature/feature-name

# Create Pull Request on GitHub
```

---

## 🤝 Contributing

Contributions are welcome! Please follow the development best practices and submit a Pull Request.

## 📄 License

This project is licensed under the MIT License. See LICENSE file for details.


---

<div align="center">

**Made with ❤️ by the Shopy Zone Team**

[Back to Top](#shopy-zone---full-stack-e-commerce-platform)

</div>
