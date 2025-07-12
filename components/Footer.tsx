import { Github, Linkedin, Mail, Heart } from "lucide-react"

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-200 dark:border-gray-700">
      <div className="text-center space-y-6">
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:hello@krish.dev"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-red-500" />
          <span>by Krish</span>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Krish. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
