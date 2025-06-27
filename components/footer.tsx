import type React from "react"

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#8B2635] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Orange River Kalahari</h3>
            <p>
              Discover the beauty and tranquility of the Kalahari region through curated accommodation and experiences.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Tasting Room</h3>
            <p>079 594 1339</p>
            <p>tastingroom@owk.co.za</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="list-none p-0">
              <li>
                <a href="/restaurants" className="hover:text-gray-300">
                  Restaurants
                </a>
              </li>
              <li>
                <a href="/accommodation" className="hover:text-gray-300">
                  Accommodation
                </a>
              </li>
              <li>
                <a href="/experiences" className="hover:text-gray-300">
                  Experiences
                </a>
              </li>
              <li>
                <a href="/tasting-room" className="hover:text-gray-300">
                  Tasting Room
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-[#9a3a47]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-sm">
                Affiliate Disclosure: Affiliate commissions may be earned at no extra cost to you.
              </p>
              <p className="mt-2">&copy; {new Date().getFullYear()} Orange River Kalahari. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="/privacy-policy" className="text-sm hover:text-gray-300">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-sm hover:text-gray-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
export { Footer }
