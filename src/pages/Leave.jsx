import React, { useState } from 'react'

function Leave() {
  const [leaves, setLeaves] = useState([
    { id: 1, name: 'Sarah Wilson', dept: 'Design Team', dates: 'Feb 12 - Feb 14, 2026', type: 'Vacation', status: 'Pending', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face' },
    { id: 2, name: 'Michael Chen', dept: 'Engineering', dates: 'Feb 15, 2026', type: 'Sick Leave', status: 'Pending', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
    { id: 3, name: 'Emily Davis', dept: 'Marketing', dates: 'Feb 18 - Feb 20, 2026', type: 'Personal', status: 'Approved', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' },
    { id: 4, name: 'John Smith', dept: 'Sales', dates: 'Feb 22 - Feb 23, 2026', type: 'Vacation', status: 'Approved', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face' },
    { id: 5, name: 'Lisa Anderson', dept: 'HR', dates: 'Mar 1, 2026', type: 'Sick Leave', status: 'Pending', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face' },
    { id: 6, name: 'Robert Johnson', dept: 'Engineering', dates: 'Feb 25 - Feb 27, 2026', type: 'Personal', status: 'Declined', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face' }
  ])

  const [filterStatus, setFilterStatus] = useState('All')

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

  const statuses = ['All', 'Pending', 'Approved', 'Declined']
  const leaveTypes = ['Vacation', 'Sick Leave', 'Personal', 'Parental']

  const filteredLeaves = leaves.filter(leave => 
    filterStatus === 'All' || leave.status === filterStatus
  )

  const pendingCount = leaves.filter(l => l.status === 'Pending').length
  const approvedCount = leaves.filter(l => l.status === 'Approved').length
  const declinedCount = leaves.filter(l => l.status === 'Declined').length

  const getStatusColor = (status) => {
    switch(status) {
      case 'Pending': return 'amber'
      case 'Approved': return 'emerald'
      case 'Declined': return 'rose'
      default: return 'slate'
    }
  }

  return (
    <div className="lg:ml-64 p-6 lg:p-8 animate-fade-in">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Leave Management</h1>
        <p className="text-white/60">Manage and approve employee leave requests</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="glass-card p-6 rounded-2xl">
          <div className="text-3xl font-bold text-amber-400 mb-1">{pendingCount}</div>
          <div className="text-white/60">Pending Approvals</div>
        </div>
        <div className="glass-card p-6 rounded-2xl">
          <div className="text-3xl font-bold text-emerald-400 mb-1">{approvedCount}</div>
          <div className="text-white/60">Approved</div>
        </div>
        <div className="glass-card p-6 rounded-2xl">
          <div className="text-3xl font-bold text-rose-400 mb-1">{declinedCount}</div>
          <div className="text-white/60">Declined</div>
        </div>
      </div>

      {/* Leave Balance Summary */}
      <div className="glass-card p-6 rounded-2xl mb-8">
        <h2 className="text-lg font-semibold text-white mb-6">Leave Balance Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { type: 'Annual Leave', used: 450, total: 600, color: 'violet' },
            { type: 'Sick Leave', used: 120, total: 300, color: 'rose' },
            { type: 'Personal Leave', used: 80, total: 150, color: 'amber' },
            { type: 'Parental Leave', used: 45, total: 90, color: 'cyan' }
          ].map((balance, idx) => (
            <div key={idx} className="glass-card-inner p-4 rounded-xl">
              <div className="text-sm font-medium text-white mb-2">{balance.type}</div>
              <div className="text-2xl font-bold text-white mb-3">
                {balance.used}/{balance.total}
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r from-${balance.color}-400 to-${balance.color}-500 rounded-full`}
                  style={{ width: `${(balance.used / balance.total) * 100}%` }}
                ></div>
              </div>
              <div className="text-xs text-white/60 mt-2">
                {Math.round(((balance.total - balance.used) / balance.total) * 100)}% remaining
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="glass-card p-6 rounded-2xl mb-6">
        <div className="flex flex-wrap gap-2">
          {statuses.map(status => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filterStatus === status
                  ? 'bg-violet-500/30 text-violet-300 border border-violet-500/50'
                  : 'bg-white/10 text-white/60 border border-white/10 hover:bg-white/20'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Leave Requests Table */}
      <div className="glass-card p-6 rounded-2xl overflow-x-auto">
        <h2 className="text-lg font-semibold text-white mb-6">Leave Requests</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Dates</th>
              <th>Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeaves.map(leave => (
              <tr key={leave.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <img src={leave.img} alt={leave.name} className="w-10 h-10 rounded-full object-cover" />
                    <span className="text-white font-medium">{leave.name}</span>
                  </div>
                </td>
                <td className="text-white/80">{leave.dept}</td>
                <td className="text-white/80">{leave.dates}</td>
                <td className="text-white/80">{leave.type}</td>
                <td>
                  <span className={`badge badge-${getStatusColor(leave.status)}`}>
                    {leave.status}
                  </span>
                </td>
                <td>
                  {leave.status === 'Pending' ? (
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleApprove(leave.id)}
                        className="px-3 py-1 text-xs font-medium text-emerald-400 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 rounded-lg transition-all"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleDecline(leave.id)}
                        className="px-3 py-1 text-xs font-medium text-rose-400 bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/30 rounded-lg transition-all"
                      >
                        Decline
                      </button>
                    </div>
                  ) : (
                    <span className="text-white/60 text-xs">No action</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Leave