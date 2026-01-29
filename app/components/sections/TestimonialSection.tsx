import { useState, useEffect } from "react"
import portfolioJson from "~/json/portfolio.json"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function TestimonialSection() {
  const { Testimonials } = portfolioJson
  const reviews = Testimonials.reviews
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(t)
  }, [reviews.length])

  const prev = () =>
    setCurrent((c) => (c - 1 + reviews.length) % reviews.length)
  const next = () => setCurrent((c) => (c + 1) % reviews.length)

  return (
    <section
      id="testimonials"
      className="py-20 px-6 md:px-12 lg:px-20 border-b border-gray-200 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">
            My Testimonial
          </h2>
          <p className="font-mono text-sm text-gray-500">
            Client Feedback · Worldwide
          </p>
        </div>

        <div className="relative">
          {reviews.map((review, i) => (
            <div
              key={i}
              className={i === current ? "block" : "hidden"}
              role="tabpanel"
              aria-hidden={i !== current}
            >
              <div className="p-8 border border-gray-200">
                <p className="text-gray-600 leading-relaxed mb-6">
                  &ldquo;{review.comment}&rdquo;
                </p>
                <p className="font-mono text-sm text-gray-400">
                  {review.username} · {review.reviewer_country}
                </p>
              </div>
            </div>
          ))}

          <div className="flex gap-4 mt-6 justify-center">
            <button
              type="button"
              onClick={prev}
              className="p-2 border border-gray-200 hover:border-black transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="p-2 border border-gray-200 hover:border-black transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
