import React, { useState } from 'react'

function Hiring() {
  const [candidates, setCandidates] = useState([
    { id: 1, name: 'Alex Rivera', position: 'Senior Frontend Developer', stage: 'Interview', appliedDate: '2026-02-01', rating: 4.5, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
    { id: 2, name: 'Jordan Lee', position: 'Product Manager', stage: 'Screening', appliedDate: '2026-02-03', rating: 4.0, img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face' },
    { id: 3, name: 'Taylor Chen', position: 'UX Designer', stage: 'Applied', appliedDate: '2026-02-05', rating: 3.8, img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' },
    { id: 4, name: 'Morgan Davis', position: 'Backend Developer', stage: 'Offer', appliedDate: '2026-01-28', rating: 4.8, img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face' },
    { id: 5, name: 'Casey Johnson', position: 'Frontend Developer', stage: 'Applied', appliedDate: '2026-02-08', rating: 3.5, img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face' },
    { id: 6, name: 'Sam Wilson', position: 'Marketing Lead', stage: 'Screening', appliedDate: '2026-02-06', rating: 4.2, img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face' }
  ])

  const [positions] = useState([
    { id: 1, title: 'Senior Frontend Developer', dept: 'Engineering', type: 'Full-time', location: 'Remote', salary: '$120k - $150k', postedDate: '2026-01-28', status: 'Open', candidates: 11 },
    { id: 2, title: 'Product Manager', dept: 'Product', type: 'Full-time', location: 'On-site', salary: '$100k - $130k', postedDate: '2026-02-01', status: 'Open', candidates: 7 },
    { id: 3, title: 'Marketing Lead', dept: 'Marketing', type: 'Full-time', location: 'Hybrid', salary: '$80k - $110k', postedDate: '2026-02-03', status: 'Open', candidates: 4 }
  ])

  const [filterStage, setFilterStage] = useState('All')

  const stages = ['All', 'Applied', 'Screening', 'Interview', 'Offer']
  const pipelineStats = [
    { name: 'Applied', count: 45, color: 'violet' },
    { name: 'Screening', count: 28, color: 'cyan' },
    { name: 'Interview', count: 12, color: 'amber' },
    { name: 'Offer', count: 5, color: 'emerald' }
  ]

  const getStageColor = (stage) => {
    switch(stage) {
      case 'Applied': return 'violet'
      case 'Screening': return 'cyan'
      case 'Interview': return 'amber'
      case 'Offer': return 'emerald'
      default: return 'slate'
    }
  }

  const filteredCandidates = candidates.filter(c => 
    filterStage === 'All' || c.stage === filterStage
  )

  const moveToStage = (id, newStage) => {
    setCandidates(candidates.map(c => 
      c.id === id ? { ...c, stage: newStage } : c
    ))
  }

  return (
    <div className="lg:ml-64 p-6 lg:p-8 animate-fade-in">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Hiring Pipeline</h1>
        <p className="text-white/60">Manage open positions and track candidate progress</p>
      </div>

      {/* Pipeline Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {pipelineStats.map((stat, idx) => (
          <div key={idx} className="glass-card p-6 rounded-2xl text-center cursor-pointer hover:bg-white/10 transition-all">
            <div className={`text-3xl font-bold text-${stat.color}-400 mb-2`}>{stat.count}</div>
            <div className="text-sm text-white/60">{stat.name}</div>
          </div>
        ))}
      </div>

      {/* Open Positions */}
      <div className="glass-card p-6 rounded-2xl mb-8">
        <h2 className="text-lg font-semibold text-white mb-6">Open Positions</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {positions.map(pos => (
            <div key={pos.id} className="glass-card-inner p-6 rounded-xl">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{pos.title}</h3>
                  <p className="text-sm text-white/60">{pos.dept} • {pos.type}</p>
                </div>
                <span className="badge badge-emerald">Open</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <div className="text-white/60">Location</div>
                  <div className="text-white font-medium">{pos.location}</div>
                </div>
                <div>
                  <div className="text-white/60">Salary</div>
                  <div className="text-white font-medium">{pos.salary}</div>
                </div>
                <div>
                  <div className="text-white/60">Posted</div>
                  <div className="text-white font-medium">{pos.postedDate}</div>
                </div>
                <div>
                  <div className="text-white/60">Candidates</div>
                  <div className="text-white font-medium">{pos.candidates} Applied</div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2 text-xs font-medium text-white bg-violet-500/20 hover:bg-violet-500/30 border border-violet-500/30 rounded-lg transition-all">
                  View Details
                </button>
                <button className="flex-1 py-2 text-xs font-medium text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all">
                  Close Position
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Candidates Filter */}
      <div className="glass-card p-6 rounded-2xl mb-6">
        <h2 className="text-lg font-semibold text-white mb-4">Filter by Stage</h2>
        <div className="flex flex-wrap gap-2">
          {stages.map(stage => (
            <button
              key={stage}
              onClick={() => setFilterStage(stage)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filterStage === stage
                  ? 'bg-violet-500/30 text-violet-300 border border-violet-500/50'
                  : 'bg-white/10 text-white/60 border border-white/10 hover:bg-white/20'
              }`}
            >
              {stage}
            </button>
          ))}
        </div>
      </div>

      {/* Candidates List */}
      <div className="glass-card p-6 rounded-2xl">
        <h2 className="text-lg font-semibold text-white mb-6">Candidates</h2>
        <div className="space-y-4">
          {filteredCandidates.map(candidate => (
            <div key={candidate.id} className="glass-card-inner p-4 rounded-xl">
              <div className="flex items-start gap-4 mb-4">
                <img src={candidate.img} alt={candidate.name} className="w-12 h-12 rounded-full object-cover" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{candidate.name}</h3>
                  <p className="text-sm text-white/60 mb-2">{candidate.position}</p>
                  <div className="flex items-center gap-4 text-xs text-white/60">
                    <span>Applied: {candidate.appliedDate}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <span className="text-amber-400">★</span>
                      <span>{candidate.rating}/5</span>
                    </div>
                  </div>
                </div>
                <span className={`badge badge-${getStageColor(candidate.stage)} whitespace-nowrap`}>
                  {candidate.stage}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {stages.filter(s => s !== 'All').map(stage => (
                  <button
                    key={stage}
                    onClick={() => moveToStage(candidate.id, stage)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                      candidate.stage === stage
                        ? `bg-${getStageColor(stage)}-500/30 text-${getStageColor(stage)}-300 border border-${getStageColor(stage)}-500/50`
                        : 'bg-white/10 text-white/60 hover:bg-white/20 border border-white/10'
                    }`}
                  >
                    {stage}
                  </button>
                ))}
                <button className="ml-auto px-3 py-1.5 text-xs font-medium text-white bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 rounded-lg transition-all">
                  Schedule Interview
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hiring