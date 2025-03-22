# 🛍️ Vendors & Users API

AdConnector is a  backend API for vendors and users with authentication and authorization. Vendors can post, update, and delete adverts, while regular users can only view them.

## 🚀 Features
- **User Authentication & Authorization** (JWT-based)
- **Role-Based Access Control** (Vendor & Regular User)
- **CRUD Operations for Adverts** (Vendors Only)
- **Input Validation** (Using Express Validator)
- **Secure Routes** (Protected Endpoints)

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT & bcrypt
- **Validation:** Joi Validator
- **API Documentation:** Postman

## 📌 API Endpoints

### **Authentication**
| Method | Endpoint        | Description |
|--------|----------------|-------------|
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login` | Log in and get a token |

### **Adverts (Vendors Only)**
| Method | Endpoint        | Description |
|--------|----------------|-------------|
| POST   | `/api/adverts` | Create a new advert |
| PUT    | `/api/adverts/:id` | Update an advert |
| DELETE | `/api/adverts/:id` | Delete an advert |

### **Adverts (Users & Vendors)**
| Method | Endpoint        | Description |
|--------|----------------|-------------|
| GET    | `/api/adverts` | View all adverts |
| GET    | `/api/adverts/:id` | View a specific advert |

## 🏗️ Installation & Setup

1️⃣ Clone the repository:
```sh
git clone https://github.com/yourusername/vendors-users-api.git
cd vendors-users-api
