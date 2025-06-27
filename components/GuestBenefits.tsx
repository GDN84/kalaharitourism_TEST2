import { Shield, Star, Users } from "lucide-react"

export default function GuestBenefits() {
  const benefits = [
    {
      icon: <Star className="h-10 w-10 text-[#C4704F]" />,
      title: "Curated Selection",
      description:
        "We personally vet each property to ensure it meets our high standards for quality, comfort, and authenticity.",
    },
    {
      icon: <Shield className="h-10 w-10 text-[#C4704F]" />,
      title: "Secure Booking",
      description:
        "Our secure platform ensures your reservation and payment details are protected with industry-leading encryption.",
    },
    {
      icon: <Users className="h-10 w-10 text-[#C4704F]" />,
      title: "Local Expertise",
      description:
        "Access insider knowledge and recommendations from property owners who know the Kalahari region intimately.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 font-light tracking-wide">Guest Benefits</h2>
          <div className="w-20 h-px bg-gray-400 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6 p-4 rounded-full bg-white inline-flex items-center justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-serif text-gray-800 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
