import { useState } from "react"
import portfolioJson from "~/json/portfolio.json"

const SOCIAL_LINKS = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/nadir-bakhsh-39807413a/" },
  { name: "GitHub", url: "https://github.com/NadirBakhsh" },
  { name: "Upwork", url: "#" },
  { name: "Behance", url: "#" },
]

export default function ContactSection() {
  const { ContactSection: data } = portfolioJson
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12 lg:px-20 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              Get In Touch
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Let&apos;s talk Idea
              <br />
              build Something special
              <br />
              I seek to push the limits of creativity to create high-engaging,
              user-friendly, and memorable interactive experiences.
            </p>

            <div className="space-y-4 font-mono text-sm mb-12">
              <p className="font-serif text-lg">{data.name}</p>
              <a
                href={`tel:${data.phone.replace(/\s/g, "")}`}
                className="block hover-underline"
              >
                {data.phone}
              </a>
              <p className="text-gray-400">Karachi, Pakistan</p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="font-serif text-2xl mb-4">Follow</h3>
              <div className="flex gap-6">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target={link.url.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.url.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="hover-underline font-mono text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="mt-6 p-4 border border-black bg-black text-white text-center font-mono text-sm">
                Thank you! I&apos;ll get back to you soon.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-xs mb-2"
                  >
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-200 font-mono text-sm bg-transparent hover:border-black focus:border-black focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-xs mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-200 font-mono text-sm bg-transparent hover:border-black focus:border-black focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block font-mono text-xs mb-2"
                  >
                    Phone Number (Optional)
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-200 font-mono text-sm bg-transparent hover:border-black focus:border-black focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-xs mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full p-4 border border-gray-200 font-mono text-sm bg-transparent hover:border-black focus:border-black focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full font-mono text-sm px-8 py-4 border border-black hover-invert"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
