import React from 'react'

function AttendanceChart() {
  const data = [
    { day: 'Mon', percentage: 85 },
    { day: 'Tue', percentage: 92 },
    { day: 'Wed', percentage: 88 },
    { day: 'Thu', percentage: 94 },
    { day: 'Fri', percentage: 78 },
    { day: 'Sat', percentage: 45 },
    { day: 'Sun', percentage: 30 }
  ]

  return (
    <div className="glass-card p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-white">Weekly Attendance</h2>
        <select className="glass-input text-sm text-white/80 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
          <option value="week">This Week</option>
          <option value="month">This Month</option>
        </select>
      </div>

      <div className="flex items-end justify-between gap-2 h-48 mb-6">
        {data.map((item, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center gap-2">
            <div
              className={`w-full rounded-t-lg transition-all duration-500 ${
                idx < 5
                  ? 'bg-gradient-to-t from-violet-500 to-purple-400'
                  : 'bg-gradient-to-t from-emerald-500 to-teal-400'
              }`}
              style={{ height: `${item.percentage}%` }}
            ></div>
            <span className="text-xs text-white/60">{item.day}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-6">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-gradient-to-r from-violet-500 to-purple-400"></span>
          <span className="text-xs text-white/60">Weekdays</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"></span>
          <span className="text-xs text-white/60">Weekends</span>
        </div>
      </div>
    </div>
  )
}

export default AttendanceChart