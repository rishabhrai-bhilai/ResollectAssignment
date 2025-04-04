
---

# Loan Portfolio Management System (Frontend)

A frontend web application for managing a loan portfolio, featuring a data table with filtering, grouping (bucketing), and CRUD operations. The application is built with React and uses a `data.js` file to mimic data that would typically come from a backend API. The project is mobile-responsive and deployed on Netlify.

---

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Implemented Functionalities](#implemented-functionalities)
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

## Implemented Functionalities

The following functionalities have been implemented in this project:

1. **Proper Pagination**:
   - Implemented pagination to display a limited number of loans per page (6 items per page).
   - Added "Previous" and "Next" buttons for navigation, with the current page and total pages displayed.

2. **Input Checking to Delete or Update an Item**:
   - Added a checkbox selection mechanism to ensure users explicitly select loans before deleting or updating them.
   - Update and delete buttons are only visible for selected loans, preventing accidental modifications.

3. **Dummy Sign In, Sign Out**:
   - Implemented a dummy sign-in and sign-out feature using local state management.
   - Displays a "Sign In" button that toggles to "Sign Out" upon clicking, simulating user authentication.

4. **Filtering Using Search Bar**:
   - Added a search bar to filter loans based on any field (e.g., borrower name, loan number).
   - Filtering is case-insensitive and updates the table dynamically as the user types.

5. **Bucketing Using Group By Button**:
   - Implemented a "Group By" dropdown that allows users to group loans by a selected field (e.g., loan type).
   - Loans are displayed in separate sections based on the selected grouping field.

6. **Adding New Items Using Add Item Button**:
   - Added an "Add Item" button that opens a modal form for creating new loans.
   - The new loan is added to the `data.js` file and reflected in the table.

7. **Using Same Modal for Updating/Adding Item**:
   - Utilized a single `AddLoanModal` component for both adding and updating loans.
   - The modal switches between "Add" and "Update" modes based on whether a loan is being edited.

8. **Completely Responsive Sidebar and Table Content**:
   - Designed a responsive sidebar that collapses on smaller screens and expands on larger screens.
   - The table content switches to a card-based layout on mobile devices, with reduced padding and text size on medium screens.

9. **Adding Dummy Sidebar Components**:
   - Added a dummy sidebar with placeholder components (e.g., navigation links like "Dashboard", "Portfolio", "Settings").
   - The sidebar is styled to be responsive and includes icons for visual appeal.

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
│   │   │   ├── DataTable.jsx
│   │   │   └── Sidebar.jsx
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
  - `src/components/`: Reusable React components like the data table, modal, and sidebar.
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
  - The sidebar collapses into a hamburger menu.
  - Floating action buttons (Filter and Add) are fixed at the bottom-right for easy access.
  - A mobile filter drawer slides up from the bottom for filtering options.
- **Medium Screens (768px - 1023px)**:
  - The table remains visible but with reduced padding (`px-2 py-1`) and text size (`text-[10px]`) to fit more content.
  - The sidebar is visible but narrower.
  - Horizontal scrolling is enabled (`overflow-x-auto`) if the table exceeds the viewport width.
- **Large Screens (1024px and above)**:
  - The table retains its original styling (`px-4 py-2 text-xs`) for optimal readability and spacing.
  - The sidebar is fully expanded with all components visible.

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

- *GitHub Repository*: [https://github.com/rishabhrai-bhilai/](https://github.com/rishabhrai-bhilai/ResollectAssignment)
- *Live Deployed Link (Frontend)*: [https://resollect.com](https://resollectdashboard.netlify.app/)
- *Documentation*: [documentation.md](documentation.md)

---

## Documentation

For a detailed explanation of the code structure, components, and tech stack, refer to the [documentation.md](documentation.md) file. It includes:
- Code structure breakdown.
- Explanation of key components (e.g., `DataTable.jsx`, `AddLoanModal.jsx`, `Sidebar.jsx`).
- Tech stack and library usage.
- Details on how `data.js` is used to mimic backend data and perform CRUD operations.

---

## Future Improvements

- **Backend Integration**: Replace the `data.js` file with a real backend API using Django and Django Rest Framework.
- **Testing**: Add unit and integration tests for the frontend using Jest and React Testing Library to validate functionality.
- **Authentication**: Implement real user authentication to secure CRUD operations.
- **Advanced Filtering**: Add more complex filters (e.g., date ranges, multiple fields).
- **Styling Enhancements**: Integrate a component library like Material-UI for a more polished UI.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

