# React Coding Questions Dashboard

A React-based dashboard for browsing coding questions with detailed problem views.

## Features

- **Dashboard**: List of all coding question titles with clickable links
- **Problem Detail**: Full description, test cases, inputs, and expected outputs
- **Custom Hook**: `useQuestions` for API data fetching with loading states
- **Routing**: React Router DOM for navigation between dashboard and problem pages

## Getting Started

### Prerequisites
- Node.js installed on your system

### Installation & Setup

1. Install dependencies (if not already installed):
```bash
npm install
```

2. Start the JSON Server (Mock API):
```bash
npm run server
```
This will serve the API at `http://localhost:5000/questions`

3. In a new terminal, start the React application:
```bash
npm start
```
This will open the application at `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── Dashboard.js          # Main dashboard with question list
│   └── ProblemDetail.js      # Individual problem view
├── hooks/
│   └── useQuestions.js       # Custom hook for API fetching
├── App.js                    # Main app with routing setup
└── index.js                  # React entry point
```

## API Endpoints

- `GET http://localhost:5000/questions` - Fetch all questions

## Usage

1. **Dashboard (`/`)**: Browse all available coding questions
2. **Problem Detail (`/problem/:id`)**: Click any question title to view:
   - Full problem description
   - Test case inputs
   - Expected outputs
   - Back navigation to dashboard

The application uses the custom `useQuestions` hook to fetch data from the JSON Server API, ensuring clean separation of concerns and proper loading state management.
