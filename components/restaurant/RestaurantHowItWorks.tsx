import { UserPlus, Utensils, Users } from "lucide-react"

export default function RestaurantHowItWorks() {
  const steps = [
    {
      icon: <UserPlus className="h-10 w-10 text-[#C4704F]" />,
      title: "Submit Your Interest",
      description: "Complete a short form to tell us about your restaurant business.",
    },
    {
      icon: <Utensils className="h-10 w-10 text-[#C4704F]" />,
      title: "We Review & Get in Touch",
      description:
        "Our team will review your details and contact you with the next steps, including subscription information.",
    },
    {
      icon: <Users className="h-10 w-10 text-[#C4704F]" />,
      title: "Get Listed & Connect with Travellers",
      description:
        "Once approved and subscribed, your listing goes live on our platform where travellers can find, explore, and connect with you.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 font-light tracking-wide">🔎 How It Works</h2>
          <div className="w-20 h-px bg-gray-400 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6 p-4 rounded-full bg-gray-100 inline-flex items-center justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-serif text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
