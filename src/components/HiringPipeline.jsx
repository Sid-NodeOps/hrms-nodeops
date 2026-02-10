import React from 'react'

function HiringPipeline() {
  const stages = [
    { name: 'Applied', count: 45 },
    { name: 'Screening', count: 28 },
    { name: 'Interview', count: 12 },
    { name: 'Offer', count: 5 }
  ]

  const positions = [
    {
      title: 'Senior Frontend Developer',
      dept: 'Engineering • Remote',
      candidates: 11,
      color: 'violet'
    },
    {
      title: 'Product Manager',
      dept: 'Product • On-site',
      candidates: 7,
      color: 'cyan'
    },
    {
      title: 'Marketing Lead',
      dept: 'Marketing • Hybrid',
      candidates: 4,
      color: 'amber'
    }
  ]

  return (
    <div className="glass-card p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-white">Hiring Pipeline</h2>
        <button className="text-sm text-violet-400 hover:text-violet-300 transition-colors">View All</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {stages.map((stage, idx) => (
          <div key={idx} className="glass-card-inner p-4 rounded-xl text-center">
            <div className="text-2xl font-bold text-white mb-1">{stage.count}</div>
            <div className="text-xs text-white/60 mb-3">{stage.name}</div>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-violet-400 to-purple-400 rounded-full"
                style={{ width: `${(stage.count / 45) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        {positions.map((pos, idx) => (
          <div key={idx} className="flex items-center justify-between p-4 glass-card-inner rounded-xl cursor-pointer hover:bg-white/10 transition-all">
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br from-${pos.color}-500/30 to-${pos.color === 'violet' ? 'purple' : pos.color === 'cyan' ? 'blue' : 'orange'}-500/30 flex items-center justify-center`}>
                <svg className={`w-5 h-5 text-${pos.color}-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-white">{pos.title}</h4>
                <p className="text-xs text-white/60">{pos.dept}</p>
              </div>
            </div>
            <span className={`px-2.5 py-1 text-xs font-medium text-${pos.color}-400 bg-${pos.color}-500/10 rounded-full`}>
              {pos.candidates} Candidates
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HiringPipeline