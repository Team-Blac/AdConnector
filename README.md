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

2️⃣ Install dependencies:
```sh
npm install

3️⃣ Create a .env file and add:
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key

4️⃣ Run the server:
```sh
npm run dev

## 🔐 Authentication & Authorization
Users can view adverts.
Vendors can create, update, and delete their own adverts.
JWT Token Required for protected routes.

🤝 Contributing
Fork the repo
Create a feature branch (git checkout -b feature-name)
Commit changes (git commit -m "Added feature X")
Push to the branch (git push origin feature-name)
Open a pull request 🚀

📜 License
This project is licensed under the MIT License.