import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StatCard from '../components/StatCard'
import HiringPipeline from '../components/HiringPipeline'
import LeaveManagement from '../components/LeaveManagement'
import AttendanceChart from '../components/AttendanceChart'
import RecentActivity from '../components/RecentActivity'

function Dashboard() {
  const navigate = useNavigate()

  const stats = [
    {
      title: 'Total Employees',
      value: '248',
      change: '+12%',
      color: 'violet',
      icon: 'users',
      details: { active: 231, inactive: 17 },
      onClick: () => navigate('/employees')
    },
    {
      title: 'Attendance Rate',
      value: '94%',
      change: 'Today',
      color: 'emerald',
      icon: 'check',
      details: { present: 217, absent: 6, leave: 8 },
      onClick: () => navigate('/attendance')
    },
    {
      title: 'Leave Requests',
      value: '12',
      change: '5 Pending',
      color: 'amber',
      icon: 'calendar',
      details: { pending: 5, upcoming: 8 },
      onClick: () => navigate('/leave')
    },
    {
      title: 'Payroll Status',
      value: '$485K',
      change: 'Processing',
      color: 'cyan',
      icon: 'dollar',
      details: { progress: 78 },
      onClick: () => navigate('/payroll')
    }
  ]

  return (
    <div className="lg:ml-64 p-6 lg:p-8 animate-fade-in">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <HiringPipeline />
        </div>
        <div>
          <LeaveManagement />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AttendanceChart />
        <RecentActivity />
      </div>
    </div>
  )
}

export default Dashboard