# Quick Start Guide

## 🚀 Launch the Dashboard

```bash
npm install && npm run dev
```

The dashboard will be available at **http://localhost:8080**

## 📊 Features to Try

### 1. Dashboard (Homepage)
- View 4 key metrics cards
- Click any card to navigate to its detailed page
- See hiring pipeline, leave requests, and activity feed

### 2. Employees (`/employees`)
- **Search**: Type name or role in search box
- **Filter**: Click department buttons (All, Engineering, Design, etc.)
- **View**: All employee details in responsive table

### 3. Attendance (`/attendance`)
- **Chart**: Weekly attendance rate with color-coded bars
- **Stats**: Present/Leave/Absent counts
- **Table**: Daily attendance records with times

### 4. Leave (`/leave`)
- **Requests**: Approve/Decline pending leaves
- **Balances**: View leave usage for 4 types
- **Filter**: By status (Pending, Approved, Declined)

### 5. Payroll (`/payroll`)
- **Cycle**: Select month from dropdown
- **Progress**: Visual indicator of payroll processing
- **Breakdown**: See salary components (Base, Bonus, etc.)
- **Records**: Employee payroll details table

### 6. Hiring (`/hiring`)
- **Pipeline**: Applied → Screening → Interview → Offer stages
- **Positions**: 3 open positions with details
- **Candidates**: Move candidates between stages
- **Ratings**: View candidate ratings (1-5 stars)

## 🎨 Design Features

- **Glassmorphism**: Frosted glass cards with blur effects
- **Animations**: Smooth transitions and hover effects
- **Responsive**: Works on mobile, tablet, desktop
- **Dark Theme**: Premium dark background with vibrant accents
- **Interactive**: All buttons and forms are functional

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (Full sidebar toggle)
- **Tablet**: 768px - 1024px (2-column layouts)
- **Desktop**: > 1024px (Full 3-4 column layouts)

## 🔧 Tech Stack

- React 18 with hooks
- Vite (build tool)
- React Router (navigation)
- Tailwind CSS (styling)
- Glassmorphism design system

## 📁 Key Files

- `src/App.jsx` - Router setup
- `src/pages/` - All 6 main pages
- `src/components/` - Reusable components
- `src/index.css` - Glassmorphism styles

## 🎯 Mock Data

All pages come pre-loaded with realistic mock data:
- 8+ employees
- Real attendance records
- Leave requests with statuses
- Payroll details
- Candidate profiles
- Open positions

No backend needed - everything works standalone!

## 🌟 Interactive Elements

✅ Search and filter employees
✅ Approve/decline leave requests
✅ Move candidates through hiring stages
✅ Month selection for payroll
✅ Department filtering
✅ Status tracking
✅ Real-time updates

## 🚀 Build for Production

```bash
npm run build
npm run preview
```

## 📞 Customization

- Colors: Edit color palette in `src/index.css`
- Data: Modify mock data in each page's `useState`
- Layout: Adjust grid/flex in component JSX
- Animations: Customize timing in `index.css`

## 🎉 Enjoy!

The dashboard is production-ready and fully functional. All sub-pages work perfectly with mock data.

Happy exploring! 🚀