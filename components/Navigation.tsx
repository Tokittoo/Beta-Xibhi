"use client"

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="flex space-x-6">
      <button
        onClick={() => scrollToSection("intro")}
        className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
      >
        Home
      </button>
      <button
        onClick={() => scrollToSection("hall-of-fame")}
        className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
      >
        Hall of Fame
      </button>
      <button
        onClick={() => scrollToSection("what-i-do")}
        className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
      >
        What I Do
      </button>
      <button
        onClick={() => scrollToSection("skills")}
        className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
      >
        Skills
      </button>
      <button
        onClick={() => scrollToSection("contact")}
        className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
      >
        Contact
      </button>
    </nav>
  )
}

export default Navigation
