import { useState } from "react"
import { Menu } from "lucide-react"

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About Me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

function scrollToSection(href: string) {
  const id = href.slice(1)
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavClick = (href: string) => {
    scrollToSection(href)
    setMobileOpen(false)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick("#hero")
            }}
            className="font-serif text-xl font-medium hover-underline"
          >
            Nadir.B
          </a>

          <div className="hidden md:flex items-center gap-8 font-mono text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className="nav-link"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/cv/Nadir-Bakhsh-CV.pdf"
              download="Nadir-Bakhsh-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Resume
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <div
        id="mobileMenu"
        className={`mobile-menu fixed top-0 right-0 h-full w-64 bg-white z-40 border-l border-gray-200 pt-20 px-6 ${mobileOpen ? "open" : ""}`}
      >
        <div className="flex flex-col gap-6 font-mono text-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(link.href)
              }}
              className="hover-underline"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/cv/Nadir-Bakhsh-CV.pdf"
            download="Nadir-Bakhsh-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-underline"
          >
            Resume
          </a>
        </div>
      </div>
    </>
  )
}
