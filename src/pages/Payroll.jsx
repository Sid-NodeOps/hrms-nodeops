import React, { useState } from 'react'

function Payroll() {
  const [payrollRecords] = useState([
    { id: 1, name: 'Alice Johnson', dept: 'Engineering', baseSalary: 120000, bonus: 12000, deductions: 15000, netSalary: 117000, status: 'Processed', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face' },
    { id: 2, name: 'Bob Smith', dept: 'Design', baseSalary: 95000, bonus: 8000, deductions: 12000, netSalary: 91000, status: 'Processed', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
    { id: 3, name: 'Carol Williams', dept: 'Marketing', baseSalary: 85000, bonus: 7000, deductions: 10500, netSalary: 81500, status: 'Processing', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' },
    { id: 4, name: 'David Brown', dept: 'Engineering', baseSalary: 110000, bonus: 11000, deductions: 14000, netSalary: 107000, status: 'Processed', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face' },
    { id: 5, name: 'Emma Davis', dept: 'HR', baseSalary: 78000, bonus: 6000, deductions: 9500, netSalary: 74500, status: 'Pending', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face' },
    { id: 6, name: 'Frank Miller', dept: 'Sales', baseSalary: 72000, bonus: 9000, deductions: 10000, netSalary: 71000, status: 'Processed', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face' }
  ])

  const [month, setMonth] = useState('February 2026')

  const totalSalary = payrollRecords.reduce((sum, record) => sum + record.netSalary, 0)
  const processedCount = payrollRecords.filter(r => r.status === 'Processed').length
  const processingCount = payrollRecords.filter(r => r.status === 'Processing').length
  const pendingCount = payrollRecords.filter(r => r.status === 'Pending').length

  const getStatusColor = (status) => {
    switch(status) {
      case 'Processed': return 'emerald'
      case 'Processing': return 'amber'
      case 'Pending': return 'rose'
      default: return 'slate'
    }
  }

  const breakdownData = [
    { label: 'Base Salaries', amount: 560000, percentage: 79, color: 'violet' },
    { label: 'Bonuses', amount: 53000, percentage: 9, color: 'cyan' },
    { label: 'Benefits', amount: 35000, percentage: 7, color: 'emerald' },
    { label: 'Taxes & Deductions', amount: 20000, percentage: 5, color: 'rose' }
  ]

  return (
    <div className="lg:ml-64 p-6 lg:p-8 animate-fade-in">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Payroll Management</h1>
        <p className="text-white/60">Manage payroll processing and salary details</p>
      </div>

      {/* Current Cycle */}
      <div className="glass-card p-6 rounded-2xl mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-white mb-1">Current Cycle</h2>
            <p className="text-white/60 text-sm">{month}</p>
          </div>
          <select 
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="glass-input px-4 py-2 rounded-lg bg-white/5"
          >
            <option value="January 2026" className="bg-slate-900">January 2026</option>
            <option value="February 2026" className="bg-slate-900">February 2026</option>
            <option value="March 2026" className="bg-slate-900">March 2026</option>
          </select>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm text-white/60 mb-1">Total Payroll Amount</div>
              <div className="text-4xl font-bold text-white">${(totalSalary / 1000).toFixed(0)}K</div>
            </div>
            <div className="text-right">
              <div className="px-4 py-2 rounded-lg bg-cyan-500/20 border border-cyan-500/30 inline-block">
                <span className="text-cyan-400 font-medium">Processing - 78%</span>
              </div>
            </div>
          </div>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="glass-card-inner p-4 rounded-xl">
            <div className="text-2xl font-bold text-emerald-400 mb-1">{processedCount}</div>
            <div className="text-sm text-white/60">Processed</div>
          </div>
          <div className="glass-card-inner p-4 rounded-xl">
            <div className="text-2xl font-bold text-amber-400 mb-1">{processingCount}</div>
            <div className="text-sm text-white/60">Processing</div>
          </div>
          <div className="glass-card-inner p-4 rounded-xl">
            <div className="text-2xl font-bold text-rose-400 mb-1">{pendingCount}</div>
            <div className="text-sm text-white/60">Pending</div>
          </div>
        </div>
      </div>

      {/* Payroll Breakdown */}
      <div className="glass-card p-6 rounded-2xl mb-8">
        <h2 className="text-lg font-semibold text-white mb-6">Payroll Breakdown</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {breakdownData.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 glass-card-inner rounded-xl">
                <div className="flex-1">
                  <div className="text-sm font-medium text-white mb-1">{item.label}</div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r from-${item.color}-400 to-${item.color}-500 rounded-full`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
                <div className="ml-4 text-right">
                  <div className="text-sm font-semibold text-white">${(item.amount / 1000).toFixed(0)}K</div>
                  <div className="text-xs text-white/60">{item.percentage}%</div>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card-inner p-6 rounded-xl">
            <div className="text-sm text-white/60 mb-2">Summary</div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-white/80">Base Salaries</span>
                <span className="text-white font-medium">$560K</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/80">+ Bonuses</span>
                <span className="text-white font-medium">$53K</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/80">+ Benefits</span>
                <span className="text-white font-medium">$35K</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/80">- Deductions</span>
                <span className="text-white font-medium">$20K</span>
              </div>
              <div className="border-t border-white/10 pt-3 flex justify-between">
                <span className="text-white font-medium">Total</span>
                <span className="text-white font-bold text-lg">${(totalSalary / 1000).toFixed(0)}K</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payroll Records */}
      <div className="glass-card p-6 rounded-2xl overflow-x-auto">
        <h2 className="text-lg font-semibold text-white mb-6">Employee Payroll</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Base Salary</th>
              <th>Bonus</th>
              <th>Deductions</th>
              <th>Net Salary</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payrollRecords.map(record => (
              <tr key={record.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <img src={record.img} alt={record.name} className="w-10 h-10 rounded-full object-cover" />
                    <span className="text-white font-medium">{record.name}</span>
                  </div>
                </td>
                <td className="text-white/80">{record.dept}</td>
                <td className="text-white/80">${(record.baseSalary / 1000).toFixed(0)}K</td>
                <td className="text-white/80">${(record.bonus / 1000).toFixed(0)}K</td>
                <td className="text-white/80">${(record.deductions / 1000).toFixed(0)}K</td>
                <td className="text-white font-medium">${(record.netSalary / 1000).toFixed(0)}K</td>
                <td>
                  <span className={`badge badge-${getStatusColor(record.status)}`}>
                    {record.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Payroll