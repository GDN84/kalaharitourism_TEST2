export function HowItWorks() {
  return (
    <section className="py-16 container mx-auto">
      <h2 className="text-3xl font-serif text-[#8B2635] text-center mb-16">🔎 How It Works</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="flex flex-col items-center text-center">
          <div className="w-10 h-10 rounded-full bg-[#8B2635] text-white flex items-center justify-center mb-4">
            <span>1</span>
          </div>
          <h3 className="text-lg font-medium mb-2">Submit Your Interest</h3>
          <p className="text-sm text-gray-600">
            Complete a short form to tell us about your business – whether you offer accommodation, dining, or travel
            tours.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-10 h-10 rounded-full bg-[#8B2635] text-white flex items-center justify-center mb-4">
            <span>2</span>
          </div>
          <h3 className="text-lg font-medium mb-2">We Review & Get in Touch</h3>
          <p className="text-sm text-gray-600">
            Our team will review your details and contact you with the next steps, including subscription information.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-10 h-10 rounded-full bg-[#8B2635] text-white flex items-center justify-center mb-4">
            <span>3</span>
          </div>
          <h3 className="text-lg font-medium mb-2">Get Listed & Connect with Travellers</h3>
          <p className="text-sm text-gray-600">
            Once approved and subscribed, your listing goes live on our platform where travellers can find, explore, and
            connect with you.
          </p>
        </div>
      </div>
    </section>
  )
}
