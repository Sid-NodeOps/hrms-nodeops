import React from 'react'

function StatCard({ title, value, change, color, icon, onClick }) {
  const colorMap = {
    violet: { bg: 'from-violet-500/20 to-purple-500/20', border: 'border-violet-500/20', text: 'text-violet-400', gradient: 'from-violet-500 to-purple-400' },
    emerald: { bg: 'from-emerald-500/20 to-teal-500/20', border: 'border-emerald-500/20', text: 'text-emerald-400', gradient: 'from-emerald-500 to-teal-400' },
    amber: { bg: 'from-amber-500/20 to-orange-500/20', border: 'border-amber-500/20', text: 'text-amber-400', gradient: 'from-amber-500 to-orange-400' },
    cyan: { bg: 'from-cyan-500/20 to-blue-500/20', border: 'border-cyan-500/20', text: 'text-cyan-400', gradient: 'from-cyan-500 to-blue-400' },
    rose: { bg: 'from-rose-500/20 to-pink-500/20', border: 'border-rose-500/20', text: 'text-rose-400', gradient: 'from-rose-500 to-pink-400' }
  }

  const getIcon = () => {
    const icons = {
      users: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      check: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      calendar: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
      dollar: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    }
    return icons[icon] || null
  }

  const colors = colorMap[color]

  return (
    <div
      onClick={onClick}
      className="stat-card glass-card p-6 rounded-2xl cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl bg-gradient-to-br ${colors.bg} border ${colors.border}`}>
          <div className={colors.text}>
            {getIcon()}
          </div>
        </div>
        <span className={`flex items-center gap-1 text-xs font-medium ${colors.text} bg-${color}-500/10 px-2 py-1 rounded-full`}>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          {change}
        </span>
      </div>
      <h3 className="text-3xl font-bold text-white mb-1">{value}</h3>
      <p className="text-white/60 text-sm">{title}</p>
    </div>
  )
}

export default StatCard