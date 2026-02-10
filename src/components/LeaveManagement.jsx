import React, { useState } from 'react'

function LeaveManagement() {
  const [leaves, setLeaves] = useState([
    {
      id: 1,
      name: 'Sarah Wilson',
      dept: 'Design Team',
      dates: 'Feb 12 - Feb 14, 2026',
      type: 'Vacation',
      status: 'Pending',
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Michael Chen',
      dept: 'Engineering',
      dates: 'Feb 15, 2026',
      type: 'Sick Leave',
      status: 'Pending',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Emily Davis',
      dept: 'Marketing',
      dates: 'Feb 18 - Feb 20, 2026',
      type: 'Personal',
      status: 'Approved',
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face'
    }
  ])

  const handleApprove = (id) => {
    setLeaves(leaves.map(leave => 
      leave.id === id ? { ...leave, status: 'Approved' } : leave
    ))
  }

  const handleDecline = (id) => {
    setLeaves(leaves.map(leave => 
      leave.id === id ? { ...leave, status: 'Declined' } : leave
    ))
  }

  const getStatusColor = (status) => {
    switch(status) {
      case 'Pending': return 'amber'
      case 'Approved': return 'emerald'
      case 'Declined': return 'rose'
      default: return 'slate'
    }
  }

  return (
    <div className="glass-card p-6 rounded-2xl h-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-white">Leave Requests</h2>
        <button className="text-sm text-violet-400 hover:text-violet-300 transition-colors">View All</button>
      </div>
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {leaves.map((leave) => (
          <div key={leave.id} className="p-4 glass-card-inner rounded-xl">
            <div className="flex items-start gap-3 mb-3">
              <img
                src={leave.img}
                alt={leave.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <h4 className="font-medium text-white text-sm">{leave.name}</h4>
                <p className="text-xs text-white/60">{leave.dept}</p>
              </div>
              <span className={`px-2 py-1 text-xs font-medium text-${getStatusColor(leave.status)}-400 bg-${getStatusColor(leave.status)}-500/10 rounded-full`}>
                {leave.status}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/60 mb-3">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{leave.dates}</span>
              <span className="text-white/40">•</span>
              <span>{leave.type}</span>
            </div>
            {leave.status === 'Pending' && (
              <div className="flex gap-2">
                <button
                  onClick={() => handleApprove(leave.id)}
                  className="flex-1 py-2 text-xs font-medium text-white bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 rounded-lg transition-all"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleDecline(leave.id)}
                  className="flex-1 py-2 text-xs font-medium text-white bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/30 rounded-lg transition-all"
                >
                  Decline
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default LeaveManagement