import { Navbar } from "@/components/navbar"
import Footer from "@/components/footer"

export default function TermsOfService() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: 2025/06/05</p>

            <p className="mb-6">By using this website, you agree to the following terms and conditions:</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Use of Website</h2>
              <p className="mb-4">
                You agree to use this site in a lawful, respectful, and non-disruptive manner. You must not attempt to
                harm the site's functionality or compromise its security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Content</h2>
              <p className="mb-4">
                All content on this site, including text, images, and logos, is either owned by Orange River Kalahari or
                used under licence (e.g. royalty-free images from platforms such as Pexels). This content may not be
                copied, reproduced, or distributed without appropriate permission or attribution where required.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Bookings and Listings</h2>
              <p className="mb-4">
                Any bookings or services facilitated via third-party platforms are the responsibility of those
                providers. Orange River Kalahari is not liable for any inaccuracies or issues related to third-party
                listings or transactions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Limitation of Liability</h2>
              <p className="mb-4">We are not responsible for:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Errors, omissions, or inaccuracies on the site.</li>
                <li>Losses or damages resulting from your use of the website.</li>
                <li>External links or services outside our control.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Changes to These Terms</h2>
              <p className="mb-4">
                We reserve the right to update these terms and the Privacy Policy at any time. Continued use of the site
                signifies your acceptance of any changes.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
