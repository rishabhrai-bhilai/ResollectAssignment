---
# Loan Portfolio Management System (Frontend)

A frontend web application for managing a loan portfolio, featuring a data table with filtering, grouping (bucketing), and CRUD operations. The application is built with React and uses a `data.js` file to mimic data that would typically come from a backend API. The project is mobile-responsive and deployed on Netlify.

---

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
- [Mobile Responsiveness](#mobile-responsiveness)
- [Deployment](#deployment)
- [Links](#links)
- [Documentation](#documentation)
- [Future Improvements](#future-improvements)

---

## Project Overview

This project is a Loan Portfolio Management System (Frontend) that allows users to view, filter, group, and manage loan data through a web interface. The frontend is built with React, and instead of making API calls to a backend, it uses a `data.js` file to mimic the data and perform CRUD operations locally. The application supports filtering by search term, grouping by fields like loan type, and full CRUD functionality for managing loans.

---

## Features

- **Landing Page with Data Table**: Displays a table of loans fetched from the `data.js` file.
- **Filtering**: Supports filtering loans by search term (e.g., borrower name or loan number) on the frontend.
- **Bucketing (Grouping)**: Groups loans by a selected field (e.g., loan type) on the frontend.
- **CRUD Operations** (via `data.js`):
  - Create: Add new loans via a modal form.
  - Read: View all loans in a table with pagination.
  - Update: Edit existing loans through the modal form.
  - Delete: Remove loans with a delete button.
- **Mobile Responsiveness**: The table switches to a card-based layout on smaller screens, with floating action buttons for adding and filtering.
- **Pagination**: Limits the number of loans displayed per page with navigation controls.
- **Sorting**: Allows sorting of table columns in ascending or descending order.
- **Error Handling**: Displays loading states and error messages for failed operations.

---

## Tech Stack

- **Frontend**:
  - **React**: JavaScript library for building the user interface.
  - **Tailwind CSS**: Utility-first CSS framework for styling.
  - **FontAwesome**: For icons (e.g., filter, add, chevrons).
- **Deployment**:
  - **Netlify**: Hosting platform for the frontend.
- **Development Tools**:
  - **Vite**: Build tool for the React frontend.

---

## Project Structure

```
loan-portfolio/
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

- **frontend/**: Contains the React application.
  - `src/components/`: Reusable React components like the data table and modal.
  - `src/data.js`: File that mimics backend data and provides functions for CRUD operations.
- **documentation.md**: Detailed documentation of the code structure, components, and tech stack.

---

## Setup Instructions

### Prerequisites

- **Node.js 18+**: For running the React frontend.
- **Git**: For cloning the repository.

### Frontend Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/loan-portfolio.git
   cd loan-portfolio/frontend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Frontend Server**:
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173`.

---

## Running the Application

1. **Start the Frontend**:
   ```bash
   cd frontend
   npm run dev
   ```

2. **Access the Application**:
   - Open `http://localhost:5173` in your browser to view the application.
   - The frontend uses the `data.js` file to mimic data and perform CRUD operations locally.

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

### Frontend Deployment (Netlify)

1. **Install Netlify CLI** and log in:
   ```bash
   npm install -g netlify-cli
   netlify login
   ```

2. **Deploy the Frontend**:
   ```bash
   cd frontend
   netlify deploy
   ```
   - Follow the prompts to configure the deployment.
   - For production deployment:
     ```bash
     netlify deploy --prod
     ```

---

## Links

- **GitHub Repository**: [https://github.com/rishabh](https://github.com/rishabhrai-bhilai/ResollectAssignment)
- **Live Deployed Link (Frontend)**: [https://resollect](https://resollectdashboard.netlify.app/)
- **Documentation**: [documentation.md](documentation.md)

---

## Documentation

For a detailed explanation of the code structure, components, and tech stack, refer to the [documentation.md](documentation.md) file. It includes:
- Code structure breakdown.
- Explanation of key components (e.g., `DataTable.jsx`, `AddLoanModal.jsx`).
- Tech stack and library usage.
- Details on how `data.js` is used to mimic backend data and perform CRUD operations.

---

## Future Improvements

- **Backend Integration**: Replace the `data.js` file with a real backend API using Django and Django Rest Framework.
- **Testing**: Add unit and integration tests for the frontend using Jest and React Testing Library.
- **Authentication**: Implement user authentication to secure CRUD operations.
- **Advanced Filtering**: Add more complex filters (e.g., date ranges, multiple fields).
- **Pagination on Backend**: If a backend is added, implement server-side pagination to handle large datasets.
- **Styling Enhancements**: Integrate a component library like Material-UI for a more polished UI.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
