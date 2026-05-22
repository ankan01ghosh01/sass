import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-white text-2xl font-bold">ClientFlow</div>
          <div className="space-x-4">
            <Link to="/login" className="text-white hover:text-gray-200">Login</Link>
            <Link to="/register" className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100">
              Start Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Manage Clients Without the Chaos
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Simple client management + invoices + project approvals for freelancers, 
          video editors, web developers, and small agencies.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/register" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100">
            Start Free Today
          </Link>
          <a href="#features" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600">
            See Features
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="container mx-auto px-6 py-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Everything You Need in One Place
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon="👥"
            title="Client Management"
            description="Create client profiles with contact info, WhatsApp integration, and complete history."
          />
          <FeatureCard
            icon="📄"
            title="Invoice Generator"
            description="Create professional PDF invoices with GST support and payment tracking."
          />
          <FeatureCard
            icon="✅"
            title="Project Approvals"
            description="Get client approvals, track revisions, and never lose files again."
          />
          <FeatureCard
            icon="💰"
            title="Payment Tracking"
            description="Track pending payments, send reminders, and get paid faster."
          />
          <FeatureCard
            icon="📁"
            title="File Storage"
            description="Upload and organize project files, contracts, and deliverables."
          />
          <FeatureCard
            icon="📱"
            title="Mobile Friendly"
            description="Access your dashboard anywhere, anytime from any device."
          />
        </div>
      </div>

      {/* Pricing Section */}
      <div className="container mx-auto px-6 py-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Simple, Affordable Pricing
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PricingCard
            plan="Free"
            price="₹0"
            features={[
              "2 clients",
              "2 active projects",
              "5 invoices/month",
              "500MB storage",
              "Basic dashboard"
            ]}
            cta="Start Free"
            link="/register"
          />
          <PricingCard
            plan="Pro"
            price="₹499/month"
            features={[
              "Unlimited clients",
              "Unlimited projects",
              "Unlimited invoices",
              "5GB storage",
              "Custom branding",
              "Client portal",
              "Priority support"
            ]}
            cta="Go Pro"
            link="/register"
            featured={true}
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 ClientFlow. Built for Indian freelancers.</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function PricingCard({ plan, price, features, cta, link, featured = false }) {
  return (
    <div className={`p-8 rounded-lg ${featured ? 'bg-blue-600 text-white shadow-xl' : 'bg-white text-gray-800 border'}`}>
      <h3 className="text-2xl font-bold mb-2">{plan}</h3>
      <div className="text-4xl font-bold mb-6">{price}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <Link to={link} className={`block text-center py-3 rounded-lg font-semibold ${featured ? 'bg-white text-blue-600 hover:bg-gray-100' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
        {cta}
      </Link>
    </div>
  )
}

export default Home
