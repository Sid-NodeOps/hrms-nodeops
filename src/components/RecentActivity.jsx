import React from 'react'

function RecentActivity() {
  const activities = [
    {
      id: 1,
      name: 'Lisa Anderson',
      action: 'joined as',
      role: 'UX Designer',
      time: '2 hours ago',
      icon: 'add',
      color: 'emerald',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'James Martinez',
      action: 'requested',
      role: 'vacation leave',
      time: '4 hours ago',
      icon: 'calendar',
      color: 'amber',
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Rachel Kim',
      action: 'completed',
      role: 'onboarding training',
      time: 'Yesterday',
      icon: 'check',
      color: 'cyan',
      img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=50&h=50&fit=crop&crop=face'
    },
    {
      id: 4,
      name: 'David Park',
      action: 'got promoted to',
      role: 'Senior Developer',
      time: '2 days ago',
      icon: 'star',
      color: 'violet',
      img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=50&h=50&fit=crop&crop=face'
    },
    {
      id: 5,
      name: 'Payroll',
      action: 'processed for',
      role: 'January 2026',
      time: '3 days ago',
      icon: 'dollar',
      color: 'rose',
      img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face'
    }
  ]

  const getIcon = (type) => {
    const icons = {
      add: <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>,
      calendar: <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
      check: <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      star: <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
      dollar: <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    }
    return icons[type] || null
  }

  const colorMap = {
    emerald: 'bg-emerald-500',
    amber: 'bg-amber-500',
    cyan: 'bg-cyan-500',
    violet: 'bg-violet-500',
    rose: 'bg-rose-500'
  }

  return (
    <div className="glass-card p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-white">Recent Activity</h2>
        <button className="text-sm text-violet-400 hover:text-violet-300 transition-colors">View All</button>
      </div>
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
            <div className="relative">
              <img
                src={activity.img}
                alt={activity.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className={`absolute -bottom-1 -right-1 w-5 h-5 ${colorMap[activity.color]} rounded-full flex items-center justify-center`}>
                {getIcon(activity.icon)}
              </span>
            </div>
            <div className="flex-1">
              <p className="text-sm text-white">
                <span className="font-medium">{activity.name}</span> {activity.action} <span className="text-violet-400">{activity.role}</span>
              </p>
              <p className="text-xs text-white/50 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentActivity