import { Link } from 'react-router-dom'

function Dashboard() {
  // Mock data - will be replaced with API calls
  const stats = {
    activeClients: 12,
    pendingPayments: 24000,
    projectsDue: 3,
    monthlyRevenue: 48000
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="ml-64 p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening.</p>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Active Clients"
            value={stats.activeClients}
            icon="👥"
            color="bg-blue-500"
          />
          <StatCard
            title="Pending Payments"
            value={`₹${stats.pendingPayments.toLocaleString()}`}
            icon="💰"
            color="bg-yellow-500"
          />
          <StatCard
            title="Projects Due"
            value={stats.projectsDue}
            icon="📅"
            color="bg-red-500"
          />
          <StatCard
            title="Monthly Revenue"
            value={`₹${stats.monthlyRevenue.toLocaleString()}`}
            icon="📈"
            color="bg-green-500"
          />
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Quick Actions</h2>
          <div className="flex gap-4">
            <Link to="/clients" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              + Add Client
            </Link>
            <Link to="/projects" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
              + New Project
            </Link>
            <Link to="/invoices" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              Create Invoice
            </Link>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Recent Projects</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 text-gray-600">Project</th>
                  <th className="text-left py-3 text-gray-600">Client</th>
                  <th className="text-left py-3 text-gray-600">Status</th>
                  <th className="text-left py-3 text-gray-600">Deadline</th>
                  <th className="text-left py-3 text-gray-600">Amount</th>
                </tr>
              </thead>
              <tbody>
                <TableRow 
                  project="Instagram Reels Package" 
                  client="FitLife Gym" 
                  status="In Progress" 
                  deadline="Dec 25" 
                  amount="₹15,000"
                />
                <TableRow 
                  project="E-commerce Website" 
                  client="StyleStore" 
                  status="Waiting Approval" 
                  deadline="Dec 28" 
                  amount="₹45,000"
                />
                <TableRow 
                  project="Brand Identity Design" 
                  client="TechStart" 
                  status="Revision Requested" 
                  deadline="Dec 22" 
                  amount="₹20,000"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-blue-600">ClientFlow</h1>
      </div>
      <nav className="space-y-2">
        <NavLink to="/dashboard" icon="📊" label="Dashboard" active />
        <NavLink to="/clients" icon="👥" label="Clients" />
        <NavLink to="/projects" icon="📁" label="Projects" />
        <NavLink to="/invoices" icon="📄" label="Invoices" />
        <NavLink to="/files" icon="🗂️" label="Files" />
        <NavLink to="/settings" icon="⚙️" label="Settings" />
      </nav>
      <div className="absolute bottom-6 left-6 right-6">
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="text-sm text-gray-600">Free Plan</p>
          <p className="text-xs text-gray-500">2/2 clients used</p>
          <Link to="/upgrade" className="text-blue-600 text-sm font-semibold mt-2 block">
            Upgrade to Pro →
          </Link>
        </div>
      </div>
    </div>
  )
}

function NavLink({ to, icon, label, active = false }) {
  return (
    <Link 
      to={to}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
        active ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      <span>{icon}</span>
      <span className="font-medium">{label}</span>
    </Link>
  )
}

function StatCard({ title, value, icon, color }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-3xl">{icon}</span>
        <div className={`${color} text-white px-3 py-1 rounded-full text-sm`}>
          Today
        </div>
      </div>
      <p className="text-gray-600 text-sm">{title}</p>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  )
}

function TableRow({ project, client, status, deadline, amount }) {
  const statusColors = {
    'In Progress': 'bg-blue-100 text-blue-800',
    'Waiting Approval': 'bg-yellow-100 text-yellow-800',
    'Revision Requested': 'bg-red-100 text-red-800',
    'Completed': 'bg-green-100 text-green-800'
  }

  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="py-4 font-medium text-gray-800">{project}</td>
      <td className="py-4 text-gray-600">{client}</td>
      <td className="py-4">
        <span className={`px-3 py-1 rounded-full text-sm ${statusColors[status] || 'bg-gray-100 text-gray-800'}`}>
          {status}
        </span>
      </td>
      <td className="py-4 text-gray-600">{deadline}</td>
      <td className="py-4 font-semibold text-gray-800">{amount}</td>
    </tr>
  )
}

export default Dashboard
