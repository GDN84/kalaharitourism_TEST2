const PricingSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Pricing Plans</h2>
        <p className="text-gray-600 mb-8">Choose the plan that's right for you.</p>

        <div className="flex flex-wrap justify-center">
          {/* Basic Plan */}
          <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Basic</h3>
              <div className="text-4xl font-bold mb-4">$9.99</div>
              <p className="text-gray-600 mb-4">Ideal for individuals and small teams.</p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>1 User</li>
                <li>5 Projects</li>
                <li>Basic Support</li>
              </ul>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Get Started
              </button>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="w-full md:w-1/3 lg:w:1/4 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Standard</h3>
              <div className="text-4xl font-bold mb-4">$19.99</div>
              <p className="text-gray-600 mb-4">Perfect for growing businesses.</p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>5 Users</li>
                <li>Unlimited Projects</li>
                <li>Priority Support</li>
              </ul>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Get Started
              </button>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Premium</h3>
              <div className="text-4xl font-bold mb-4">$29.99</div>
              <p className="text-gray-600 mb-4">For large organizations with advanced needs.</p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Unlimited Users</li>
                <li>Unlimited Projects</li>
                <li>24/7 Support</li>
              </ul>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
export { PricingSection }
