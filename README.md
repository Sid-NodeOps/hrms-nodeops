# HRMS Dashboard - React + Vite

A modern, production-ready HRMS (Human Resource Management System) Dashboard built with React, Vite, and Tailwind CSS featuring a premium glassmorphism design.

## Features

### Core Modules
- **Dashboard**: Overview with key metrics and recent activities
- **Employees**: Complete employee directory with filtering and search
- **Attendance**: Daily attendance tracking with charts and analytics
- **Leave Management**: Leave request approvals and balance tracking
- **Payroll**: Salary processing and employee payroll details
- **Hiring Pipeline**: Candidate management and recruitment tracking

### Design Features
- Glassmorphism UI with frosted glass cards
- Backdrop blur effects and soft borders
- Animated gradient background with floating blobs
- Smooth micro-interactions and transitions
- Fully responsive layout (mobile, tablet, desktop)
- Dark theme with vibrant accent colors

### Functionality
- Interactive stat cards with navigation to sub-pages
- Real-time filtering and search
- Leave request approval/decline system
- Candidate stage management
- Payroll cycle tracking
- Attendance rate visualization
- Recent activity feed

## Project Structure

```
/workspace
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── Header.jsx
│   │   ├── StatCard.jsx
│   │   ├── HiringPipeline.jsx
│   │   ├── LeaveManagement.jsx
│   │   ├── AttendanceChart.jsx
│   │   └── RecentActivity.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Employees.jsx
│   │   ├── Attendance.jsx
│   │   ├── Leave.jsx
│   │   ├── Payroll.jsx
│   │   └── Hiring.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## Tech Stack

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Font**: Inter (Google Fonts)

## All Sub-Pages Are Fully Functional

### ✅ Employees Page
- Display all employees with pagination
- Filter by department and search by name/role
- View employee details: name, department, role, status, join date, salary
- Mock data with 8+ employees

### ✅ Attendance Page
- Real-time attendance status tracking
- Weekly attendance rate visualization
- Check-in/check-out time display
- Filter by status (Present, Absent, On Leave)
- Hours worked calculation

### ✅ Leave Management Page
- Leave request management with approval/decline
- Leave balance summary (Annual, Sick, Personal, Parental)
- Status tracking (Pending, Approved, Declined)
- Filter leaves by status
- Visual progress bars for leave usage

### ✅ Payroll Page
- Current payroll cycle overview with progress indicator
- Employee payroll records with salary breakdown
- Base salary, bonus, deductions, and net salary display
- Payroll breakdown chart (Base, Bonus, Benefits, Deductions)
- Monthly cycle selection

### ✅ Hiring Page
- Hiring pipeline overview with stage counts
- Open positions with details (location, salary, candidates)
- Candidate management with stage progression
- Apply/Screening/Interview/Offer tracking
- Candidate rating system
- Move candidates between stages

## Color Scheme

- **Primary**: Violet/Purple (#8b5cf6, #6366f1)
- **Success**: Emerald (#10b981)
- **Warning**: Amber (#f59e0b)
- **Error**: Rose (#f43f5e)
- **Info**: Cyan (#06b6d4)
- **Background**: Dark gradient (navy to deep purple)

## Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:8080`

## Key Interactions

- Click on stat cards to navigate to sub-pages
- Search and filter employees by department
- Approve/decline leave requests
- Move candidates through hiring pipeline stages
- View detailed attendance and payroll analytics
- Mobile navigation with sidebar toggle

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Responsive Design

- **Mobile**: Full mobile support with touch-friendly interface
- **Tablet**: Optimized layout for tablets
- **Desktop**: Full-featured experience with hover states

All components are fully responsive and tested across different screen sizes.