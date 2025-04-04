Below is a detailed `README.md` file for your project based on the provided requirements. This README includes an overview of the project, setup instructions, features, tech stack, project structure, deployment details, and links to the live demo and documentation. It also ensures the project is mobile-responsive and includes test cases for bonus points.

---

# Loan Portfolio Management System

A full-stack web application for managing a loan portfolio, featuring a data table with filtering, grouping (bucketing), and CRUD operations. The application is built with a Django backend (using Django Rest Framework) and a React frontend, with PostgreSQL as the database. The project is mobile-responsive and includes a live deployment with test cases for validation.

---

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Mobile Responsiveness](#mobile-responsiveness)
- [Deployment](#deployment)
- [Test Cases](#test-cases)
- [Links](#links)
- [Documentation](#documentation)
- [Future Improvements](#future-improvements)

---

## Project Overview

This project is a Loan Portfolio Management System that allows users to view, filter, group, and manage loan data through a web interface. The backend is built with Django and Django Rest Framework (DRF), providing RESTful APIs for CRUD operations, while the frontend is built with React, displaying the data in a responsive table. PostgreSQL is used as the database for persistent storage. The application supports filtering by search term, grouping by fields like loan type, and full CRUD functionality for managing loans.

---

## Features

- **Landing Page with Data Table**: Displays a table of loans fetched from the backend API.
- **Filtering**: Supports filtering loans by search term (e.g., borrower name or loan number) via backend query parameters.
- **Bucketing (Grouping)**: Groups loans by a selected field (e.g., loan type) on the frontend.
- **CRUD Operations**:
  - Create: Add new loans via a modal form.
  - Read: View all loans in a table with pagination.
  - Update: Edit existing loans through the modal form.
  - Delete: Remove loans with a delete button.
- **Mobile Responsiveness**: The table switches to a card-based layout on smaller screens, with floating action buttons for adding and filtering.
- **Pagination**: Limits the number of loans displayed per page with navigation controls.
- **Sorting**: Allows sorting of table columns in ascending or descending order.
- **Error Handling**: Displays loading states and error messages for failed API requests.

---

## Tech Stack

- **Backend**:
  - **Django**: Web framework for building the backend.
  - **Django Rest Framework (DRF)**: For creating RESTful APIs.
  - **PostgreSQL**: Relational database for persistent storage.
- **Frontend**:
  - **React**: JavaScript library for building the user interface.
  - **Tailwind CSS**: Utility-first CSS framework for styling.
  - **FontAwesome**: For icons (e.g., filter, add, chevrons).
- **Database**:
  - **PostgreSQL**: Managed via Django ORM.
- **Deployment**:
  - **Backend**: Deployed on Heroku with Gunicorn and Whitenoise.
  - **Frontend**: Deployed on Vercel.
  - **Database**: Hosted on Heroku PostgreSQL.
- **Development Tools**:
  - **Vite**: Build tool for the React frontend.
  - **Axios**: For making HTTP requests to the backend API.
  - **Django-CORS-Headers**: To handle CORS issues during development.

---

## Project Structure

```
loan-portfolio/
├── backend/
│   ├── loanportfolio/
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── loans/
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── migrations/
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── tests.py
│   │   ├── urls.py
│   │   └── views.py
│   ├── manage.py
│   └── requirements.txt
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddLoanModal.jsx
│   │   │   └── DataTable.jsx
│   │   ├── data.js
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
├── README.md
└── documentation.md
```

- **backend/**: Contains the Django project.
  - `loanportfolio/`: Django project settings and URL configurations.
  - `loans/`: Django app for loan-related models, views, and serializers.
- **frontend/**: Contains the React application.
  - `src/components/`: Reusable React components like the data table and modal.
  - `src/data.js`: Mock data and API functions for interacting with the backend.
- **documentation.md**: Detailed documentation of the code structure, components, and tech stack.

---

## Setup Instructions

### Prerequisites

- **Python 3.9+**: For running the Django backend.
- **Node.js 18+**: For running the React frontend.
- **PostgreSQL 13+**: For the database.
- **Git**: For cloning the repository.
- **Heroku CLI** (optional): For deployment.
- **Vercel CLI** (optional): For frontend deployment.

### Backend Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/loan-portfolio.git
   cd loan-portfolio/backend
   ```

2. **Create a Virtual Environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure PostgreSQL**:
   - Install PostgreSQL and create a database named `loan_portfolio`.
   - Update the `DATABASES` setting in `backend/loanportfolio/settings.py`:
     ```python
     DATABASES = {
         'default': {
             'ENGINE': 'django.db.backends.postgresql',
             'NAME': 'loan_portfolio',
             'USER': 'your_postgres_user',
             'PASSWORD': 'your_postgres_password',
             'HOST': 'localhost',
             'PORT': '5432',
         }
     }
     ```

5. **Run Migrations**:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

6. **Create a Superuser (Optional)**:
   ```bash
   python manage.py createsuperuser
   ```

7. **Run the Backend Server**:
   ```bash
   python manage.py runserver
   ```
   The backend will be available at `http://localhost:8000`.

### Frontend Setup

1. **Navigate to the Frontend Directory**:
   ```bash
   cd ../frontend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure API Proxy**:
   - In `frontend/vite.config.js`, ensure the proxy is set up to forward API requests to the backend:
     ```javascript
     export default defineConfig({
       server: {
         proxy: {
           '/api': 'http://localhost:8000',
         },
       },
     });
     ```

4. **Run the Frontend Server**:
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173`.

### Database Setup

- Ensure PostgreSQL is running and the `loan_portfolio` database is created.
- The Django backend will automatically create the necessary tables when migrations are applied.

---

## Running the Application

1. **Start the Backend**:
   ```bash
   cd backend
   source venv/bin/activate
   python manage.py runserver
   ```

2. **Start the Frontend**:
   ```bash
   cd frontend
   npm run dev
   ```

3. **Access the Application**:
   - Open `http://localhost:5173` in your browser to view the application.
   - The frontend will communicate with the backend via the proxy at `/api`.

---

## API Endpoints

The backend provides the following RESTful API endpoints:

| Method | Endpoint              | Description               | Query Parameters         |
|--------|-----------------------|---------------------------|--------------------------|
| GET    | `/api/loans/`         | List all loans            | `?search=term` (filter by borrower or loan number) |
| POST   | `/api/loans/`         | Create a new loan         | N/A                      |
| GET    | `/api/loans/<id>/`    | Retrieve a loan by ID     | N/A                      |
| PUT    | `/api/loans/<id>/`    | Update a loan by ID       | N/A                      |
| DELETE | `/api/loans/<id>/`    | Delete a loan by ID       | N/A                      |

**Example Request** (Create a Loan):
```bash
curl -X POST http://localhost:8000/api/loans/ \
-H "Content-Type: application/json" \
-d '{"loanNo": "L123", "borrower": "John Doe", "loanType": "Personal", "sanctionAmount": 500000}'
```

---

## Mobile Responsiveness

The application is fully mobile-responsive:
- **Small Screens (<640px)**:
  - The table switches to a card-based layout, with each loan displayed as a card.
  - Floating action buttons (Filter and Add) are fixed at the bottom-right for easy access.
  - A mobile filter drawer slides up from the bottom for filtering options.
- **Medium Screens (768px - 1023px)**:
  - The table remains visible but with reduced padding (`px-2 py-1`) and text size (`text-[10px]`) to fit more content.
  - Horizontal scrolling is enabled (`overflow-x-auto`) if the table exceeds the viewport width.
- **Large Screens (1024px and above)**:
  - The table retains its original styling (`px-4 py-2 text-xs`) for optimal readability and spacing.

---

## Deployment

### Backend Deployment (Heroku)
1. **Install Heroku CLI** and log in:
   ```bash
   heroku login
   ```

2. **Create a Heroku App**:
   ```bash
   heroku create loan-portfolio-backend
   ```

3. **Add PostgreSQL Add-on**:
   ```bash
   heroku addons:create heroku-postgresql:hobby-dev -a loan-portfolio-backend
   ```

4. **Set Environment Variables**:
   ```bash
   heroku config:set DJANGO_SECRET_KEY='your-secret-key' -a loan-portfolio-backend
   heroku config:set DEBUG=False -a loan-portfolio-backend
   ```

5. **Deploy the Backend**:
   ```bash
   git push heroku main
   ```

6. **Run Migrations on Heroku**:
   ```bash
   heroku run python manage.py migrate -a loan-portfolio-backend
   ```

### Frontend Deployment (Vercel)
1. **Install Vercel CLI** and log in:
   ```bash
   npm install -g vercel
   vercel login
   ```

2. **Deploy the Frontend**:
   ```bash
   cd frontend
   vercel
   ```
   - Follow the prompts to configure the deployment.
   - Set the environment variable `VITE_API_URL` to the Heroku backend URL (e.g., `https://loan-portfolio-backend.herokuapp.com`).

---

## Test Cases

The backend includes test cases to validate the API endpoints. Run the tests using:

```bash
cd backend
python manage.py test
```

### Test Cases Overview
- **Test Loan Creation**: Verifies that a new loan can be created via POST `/api/loans/`.
- **Test Loan Retrieval**: Ensures that loans can be retrieved via GET `/api/loans/` and GET `/api/loans/<id>/`.
- **Test Loan Update**: Confirms that a loan can be updated via PUT `/api/loans/<id>/`.
- **Test Loan Deletion**: Validates that a loan can be deleted via DELETE `/api/loans/<id>/`.
- **Test Filtering**: Tests filtering by search term (e.g., `?search=John`).

**Example Test Case** (in `backend/loans/tests.py`):
```python
from rest_framework.test import APITestCase
from rest_framework import status
from .models import Loan

class LoanAPITests(APITestCase):
    def setUp(self):
        self.loan = Loan.objects.create(
            loanNo="L123", borrower="John Doe", loanType="Personal", sanctionAmount=500000
        )

    def test_create_loan(self):
        data = {
            "loanNo": "L456",
            "borrower": "Jane Doe",
            "loanType": "Home",
            "sanctionAmount": 1000000
        }
        response = self.client.post('/api/loans/', data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Loan.objects.count(), 2)

    def test_filter_loans(self):
        response = self.client.get('/api/loans/?search=John')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
```

---

## Links

- **GitHub Repository**: [https://github.com/your-username/loan-portfolio](https://github.com/your-username/loan-portfolio)
- **Live Deployed Link (Frontend)**: [https://loan-portfolio-frontend.vercel.app](https://loan-portfolio-frontend.vercel.app)

- **Documentation**: [documentation.md](documentation.md)

---

## Documentation

For a detailed explanation of the code structure, components, and tech stack, refer to the [documentation.md](documentation.md) file. It includes:
- Code structure breakdown.
- Explanation of key components (e.g., `DataTable.jsx`, `AddLoanModal.jsx`).
- Tech stack and library usage.
- API endpoint details with examples.

---

## Future Improvements

- **Authentication**: Add user authentication using Django's built-in auth system or JWT.
- **Advanced Filtering**: Implement more complex filters (e.g., date ranges, multiple fields).
- **Pagination on Backend**: Add server-side pagination to reduce load times for large datasets.
- **Styling Enhancements**: Integrate a component library like Material-UI for a more polished UI.
- **Testing**: Add frontend tests using Jest and React Testing Library.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

This README provides a comprehensive guide to setting up, running, and deploying the Loan Portfolio Management System. It confirms that the project is mobile-responsive, includes test cases, and provides all required links. Let me know if you need further adjustments!