import { Link } from 'react-router-dom'

function Clients() {
  const clients = [
    { id: 1, name: 'FitLife Gym', email: 'contact@fitlife.com', phone: '+91 9876543210', projects: 3, pending: '₹15,000' },
    { id: 2, name: 'StyleStore', email: 'hello@stylestore.in', phone: '+91 9123456789', projects: 1, pending: '₹45,000' },
    { id: 3, name: 'TechStart', email: 'founders@techstart.io', phone: '+91 9988776655', projects: 2, pending: '₹20,000' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="ml-64 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Clients</h1>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            + Add Client
          </button>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-4 px-6 text-gray-600">Client Name</th>
                <th className="text-left py-4 px-6 text-gray-600">Contact</th>
                <th className="text-left py-4 px-6 text-gray-600">Projects</th>
                <th className="text-left py-4 px-6 text-gray-600">Pending</th>
                <th className="text-left py-4 px-6 text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id} className="border-t hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium">{client.name}</td>
                  <td className="py-4 px-6">
                    <div className="text-sm">{client.email}</div>
                    <div className="text-gray-500">{client.phone}</div>
                  </td>
                  <td className="py-4 px-6">{client.projects} active</td>
                  <td className="py-4 px-6 text-yellow-600 font-semibold">{client.pending}</td>
                  <td className="py-4 px-6">
                    <button className="text-blue-600 hover:underline mr-3">View</button>
                    <button className="text-green-600 hover:underline">WhatsApp</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Clients
