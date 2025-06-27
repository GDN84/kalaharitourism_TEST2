import { Navbar } from "@/components/navbar"
import Footer from "@/components/footer"

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: 2025/06/05</p>

            <p className="mb-6">We respect your privacy and are committed to protecting your personal information.</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <p className="mb-4">We may collect:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Personal details such as your name and email address when you contact us or subscribe to our
                  newsletter.
                </li>
                <li>Non-personal browsing data through the use of cookies.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Respond to your enquiries or requests.</li>
                <li>Send newsletters and promotional updates (only if you've opted in).</li>
                <li>Improve our website and enhance user experience.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Cookies</h2>
              <p className="mb-4">
                This website uses cookies to personalise content and analyse traffic. You can control or disable cookies
                through your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Third-Party Services</h2>
              <p className="mb-4">
                We may use third-party tools or services (such as Trip.com) which have their own privacy practices. We
                encourage you to review their privacy policies as well.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
              <p className="mb-4">
                We take reasonable steps to protect your personal data. However, no method of transmission or storage is
                completely secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Request access to the personal data we hold about you.</li>
                <li>Request correction or deletion of your data.</li>
                <li>Opt out of communications at any time.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Contact</h2>
              <p className="mb-4">If you have any questions or requests regarding your data, please contact us at:</p>
              <p className="mb-2">📧 orangeriverkalahari@proton.me</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
