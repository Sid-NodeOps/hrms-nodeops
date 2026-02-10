import React, { useState } from 'react'

function Employees() {
  const [employees] = useState([
    { id: 1, name: 'Alice Johnson', dept: 'Engineering', role: 'Senior Developer', status: 'Active', joined: '2022-03-15', salary: '$120,000', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face' },
    { id: 2, name: 'Bob Smith', dept: 'Design', role: 'UI/UX Designer', status: 'Active', joined: '2023-01-20', salary: '$95,000', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
    { id: 3, name: 'Carol Williams', dept: 'Marketing', role: 'Marketing Manager', status: 'Active', joined: '2021-06-10', salary: '$85,000', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' },
    { id: 4, name: 'David Brown', dept: 'Engineering', role: 'Backend Developer', status: 'Active', joined: '2023-02-14', salary: '$110,000', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face' },
    { id: 5, name: 'Emma Davis', dept: 'HR', role: 'HR Manager', status: 'Active', joined: '2020-09-05', salary: '$78,000', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face' },
    { id: 6, name: 'Frank Miller', dept: 'Sales', role: 'Sales Executive', status: 'Inactive', joined: '2022-11-01', salary: '$72,000', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face' },
    { id: 7, name: 'Grace Lee', dept: 'Engineering', role: 'Frontend Developer', status: 'Active', joined: '2023-04-12', salary: '$105,000', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
    { id: 8, name: 'Henry Wilson', dept: 'Design', role: 'Product Designer', status: 'Active', joined: '2023-07-19', salary: '$98,000', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face' }
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [departmentFilter, setDepartmentFilter] = useState('All')

  const departments = ['All', 'Engineering', 'Design', 'Marketing', 'HR', 'Sales']

  const filteredEmployees = employees.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         emp.role.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDept = departmentFilter === 'All' || emp.dept === departmentFilter
    return matchesSearch && matchesDept
  })

  return (
    <div className="lg:ml-64 p-6 lg:p-8 animate-fade-in">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Employees</h1>
        <p className="text-white/60">Manage and view all employees in your organization</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="glass-card p-6 rounded-2xl">
          <div className="text-3xl font-bold text-white mb-1">248</div>
          <div className="text-white/60">Total Employees</div>
        </div>
        <div className="glass-card p-6 rounded-2xl">
          <div className="text-3xl font-bold text-emerald-400 mb-1">231</div>
          <div className="text-white/60">Active</div>
        </div>
        <div className="glass-card p-6 rounded-2xl">
          <div className="text-3xl font-bold text-rose-400 mb-1">17</div>
          <div className="text-white/60">Inactive</div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="glass-card p-6 rounded-2xl mb-6">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            placeholder="Search by name or role..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="glass-input flex-1 px-4 py-2.5 rounded-lg"
          />
          <select
            value={departmentFilter}
            onChange={(e) => setDepartmentFilter(e.target.value)}
            className="glass-input px-4 py-2.5 rounded-lg bg-white/5"
          >
            {departments.map(dept => (
              <option key={dept} value={dept} className="bg-slate-900">{dept}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-wrap gap-2">
          {departments.map(dept => (
            <button
              key={dept}
              onClick={() => setDepartmentFilter(dept)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                departmentFilter === dept
                  ? 'bg-violet-500/30 text-violet-300 border border-violet-500/50'
                  : 'bg-white/10 text-white/60 border border-white/10 hover:bg-white/20'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>
      </div>

      {/* Employees Table */}
      <div className="glass-card p-6 rounded-2xl overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Role</th>
              <th>Status</th>
              <th>Joined</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map(emp => (
              <tr key={emp.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <img src={emp.img} alt={emp.name} className="w-10 h-10 rounded-full object-cover" />
                    <span className="text-white font-medium">{emp.name}</span>
                  </div>
                </td>
                <td className="text-white/80">{emp.dept}</td>
                <td className="text-white/80">{emp.role}</td>
                <td>
                  <span className={`badge ${emp.status === 'Active' ? 'badge-emerald' : 'badge-rose'}`}>
                    {emp.status}
                  </span>
                </td>
                <td className="text-white/80">{emp.joined}</td>
                <td className="text-white font-medium">{emp.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Showing info */}
      <div className="mt-4 text-sm text-white/60">
        Showing {filteredEmployees.length} of {employees.length} employees
      </div>
    </div>
  )
}

export default Employees