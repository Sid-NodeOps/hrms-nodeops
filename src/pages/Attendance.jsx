import React, { useState } from 'react'

function Attendance() {
  const [attendanceData] = useState([
    { id: 1, name: 'Alice Johnson', dept: 'Engineering', checkIn: '09:02', checkOut: '17:45', status: 'Present', hours: '8.7', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face' },
    { id: 2, name: 'Bob Smith', dept: 'Design', checkIn: '08:58', checkOut: '17:30', status: 'Present', hours: '8.5', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
    { id: 3, name: 'Carol Williams', dept: 'Marketing', checkIn: '-', checkOut: '-', status: 'On Leave', hours: '0', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' },
    { id: 4, name: 'David Brown', dept: 'Engineering', checkIn: '-', checkOut: '-', status: 'Absent', hours: '0', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face' },
    { id: 5, name: 'Emma Davis', dept: 'HR', checkIn: '09:15', checkOut: '17:50', status: 'Present', hours: '8.6', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face' },
    { id: 6, name: 'Frank Miller', dept: 'Sales', checkIn: '09:45', checkOut: '18:10', status: 'Present', hours: '8.4', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face' },
    { id: 7, name: 'Grace Lee', dept: 'Engineering', checkIn: '-', checkOut: '-', status: 'On Leave', hours: '0', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
    { id: 8, name: 'Henry Wilson', dept: 'Design', checkIn: '09:05', checkOut: '17:35', status: 'Present', hours: '8.5', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face' }
  ])

  const stats = [
    { label: 'Present', count: 6, color: 'emerald' },
    { label: 'On Leave', count: 2, color: 'amber' },
    { label: 'Absent', count: 1, color: 'rose' }
  ]

  const getStatusColor = (status) => {
    switch(status) {
      case 'Present': return 'emerald'
      case 'On Leave': return 'amber'
      case 'Absent': return 'rose'
      default: return 'slate'
    }
  }

  return (
    <div className="lg:ml-64 p-6 lg:p-8 animate-fade-in">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Attendance</h1>
        <p className="text-white/60">Track employee attendance and working hours</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="glass-card p-6 rounded-2xl">
            <div className={`text-3xl font-bold text-${stat.color}-400 mb-1`}>{stat.count}</div>
            <div className="text-white/60">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Attendance Rate Chart */}
      <div className="glass-card p-6 rounded-2xl mb-8">
        <h2 className="text-lg font-semibold text-white mb-6">Daily Attendance Rate</h2>
        <div className="flex items-end justify-between gap-2 h-48">
          {[
            { day: 'Mon', rate: 94 },
            { day: 'Tue', rate: 96 },
            { day: 'Wed', rate: 92 },
            { day: 'Thu', rate: 98 },
            { day: 'Fri', rate: 89 },
            { day: 'Sat', rate: 45 },
            { day: 'Sun', rate: 30 }
          ].map((item, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center gap-2">
              <div
                className={`w-full rounded-t-lg transition-all duration-500 ${
                  idx < 5
                    ? 'bg-gradient-to-t from-violet-500 to-purple-400'
                    : 'bg-gradient-to-t from-emerald-500 to-teal-400'
                }`}
                style={{ height: `${item.rate}%` }}
                title={`${item.rate}%`}
              ></div>
              <span className="text-xs text-white/60">{item.day}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Attendance Table */}
      <div className="glass-card p-6 rounded-2xl overflow-x-auto">
        <h2 className="text-lg font-semibold text-white mb-6">Today's Attendance</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Status</th>
              <th>Hours Worked</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map(record => (
              <tr key={record.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <img src={record.img} alt={record.name} className="w-10 h-10 rounded-full object-cover" />
                    <span className="text-white font-medium">{record.name}</span>
                  </div>
                </td>
                <td className="text-white/80">{record.dept}</td>
                <td className="text-white/80">{record.checkIn}</td>
                <td className="text-white/80">{record.checkOut}</td>
                <td>
                  <span className={`badge badge-${getStatusColor(record.status)}`}>
                    {record.status}
                  </span>
                </td>
                <td className="text-white font-medium">{record.hours}h</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Attendance