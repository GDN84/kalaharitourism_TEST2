import Link from "next/link"

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create Your Listing",
      description: "Sign up and create a detailed profile for your property with high-quality photos and amenities.",
    },
    {
      number: "02",
      title: "Set Your Availability",
      description: "Define your calendar, pricing, and booking policies to match your business needs.",
    },
    {
      number: "03",
      title: "Connect with Guests",
      description: "Receive booking requests and communicate directly with potential guests.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 font-light tracking-wide">How It Works</h2>
          <div className="w-20 h-px bg-gray-400 mx-auto mt-6"></div>
          <p className="text-gray-600 mt-8 max-w-2xl mx-auto">
            List your property with us in three simple steps and start welcoming guests from around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-4xl font-serif text-[#C4704F] mb-4">{step.number}</div>
              <h3 className="text-xl font-serif text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[#C4704F] text-white uppercase text-sm tracking-widest hover:bg-[#A65D41] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
