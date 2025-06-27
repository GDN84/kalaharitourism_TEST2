import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-white border-b">
        <div className="brand-header">
          <Link href="/">ORANGE RIVER KALAHARI</Link>
        </div>
        <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-wider">
          <Link href="/restaurants" className="text-gray-700 hover:text-[#8B2635]">
            Restaurants
          </Link>
          <Link href="/accommodation" className="text-gray-700 hover:text-[#8B2635]">
            Accommodation
          </Link>
          <Link href="/experiences" className="text-gray-700 hover:text-[#8B2635]">
            Experiences
          </Link>
          <Link href="/tasting-room" className="text-gray-700 hover:text-[#8B2635]">
            Tasting Room
          </Link>
          <Link href="/contact" className="text-[#8B2635] hover:text-[#6d1e29]">
            Contact
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[300px] w-full">
        <Image
          src="/images/quiver-tree.jpg"
          alt="Quiver tree (kokerboom) in the Kalahari desert landscape"
          fill
          className="object-cover brightness-75"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/40">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Contact Us</h1>
          <p className="mb-6 max-w-xl">
            We'd love to hear from you. Reach out to us for bookings, inquiries, or just to say hello.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-1 gap-12">
            {/* Contact Details */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-serif text-[#8B2635] mb-6">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-[#8B2635] mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-gray-700">
                      <a href="tel:+27795941339" className="hover:text-[#8B2635]">
                        079 594 1339
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-[#8B2635] mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-gray-700">
                      <a href="mailto:tastingroom@owk.co.za" className="hover:text-[#8B2635]">
                        tastingroom@owk.co.za
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-[#8B2635] mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium mb-1">Address</h3>
                    <p className="text-gray-700">
                      158 Schröder Street
                      <br />
                      Middelpos, Upington
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-medium mb-3">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://api.whatsapp.com/send/?phone=27795941339&text=Hello%2C%20I%20would%20like%20to%20book%20a%20wine%20tasting%20experience."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#8B2635] text-white px-4 py-2 text-sm rounded hover:bg-[#6d1e29] transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-serif text-center text-[#8B2635] mb-6">Find Us</h2>
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.0133087731166!2d21.239900!3d-28.455300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9b1d8b8a9b3d85%3A0x4b3d0d3b8a9b3d85!2sOrange%20River%20Cellars%20Tasting%20Centre!5e0!3m2!1sen!2sza!4v1617876543210!5m2!1sen!2sza"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-serif text-center text-[#8B2635] mb-6">Business Hours</h2>

          <div className="bg-white p-8 rounded-lg shadow-sm max-w-md mx-auto">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-medium">Monday - Friday</span>
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Sunday</span>
                <span>Closed</span>
              </div>
              <div className="pt-3 text-sm text-gray-600 border-t mt-3">
                <p>* Hours may vary on public holidays</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 pt-16 pb-8 mt-auto">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Column 1: About */}
            <div>
              <h3 className="text-[#8B2635] font-serif text-xl mb-4">Orange River Kalahari</h3>
              <p className="text-gray-600 text-sm mb-4">
                Discover the beauty and tranquility of the Kalahari region through curated accommodation and
                experiences.
              </p>
            </div>

            {/* Column 2: Contact */}
            <div className="lg:text-center">
              <h3 className="text-[#8B2635] font-serif text-xl mb-4">Tasting Room</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>079 594 1339</li>
                <li>
                  <a href="mailto:tastingroom@owk.co.za" className="hover:text-[#8B2635]">
                    tastingroom@owk.co.za
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Explore (moved to right and aligned right) */}
            <div className="lg:text-right">
              <h3 className="text-[#8B2635] font-serif text-xl mb-4">Explore</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>
                  <Link href="/restaurants" className="hover:text-[#8B2635]">
                    Restaurants
                  </Link>
                </li>
                <li>
                  <Link href="/accommodation" className="hover:text-[#8B2635]">
                    Accommodation
                  </Link>
                </li>
                <li>
                  <Link href="/experiences" className="hover:text-[#8B2635]">
                    Experiences
                  </Link>
                </li>
                <li>
                  <Link href="/tasting-room" className="hover:text-[#8B2635]">
                    Tasting Room
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Affiliate Disclosure */}
          <div className="border-t border-gray-200 pt-8 pb-4">
            <p className="text-gray-500 text-xs mb-4">
              Affiliate Disclosure: Affiliate commissions may be earned at no extra cost to you.
            </p>
          </div>

          {/* Copyright and Links */}
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-6">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2025 Orange River Kalahari. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-500 text-sm hover:text-[#8B2635]">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-500 text-sm hover:text-[#8B2635]">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
