import { Mail, Github, Linkedin, Twitter, Instagram, Calendar } from "lucide-react"

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">Connect with me on social media</p>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-3 p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 group"
          >
            <div className="p-4 rounded-full bg-gray-50 dark:bg-gray-800 group-hover:bg-black group-hover:text-white transition-all duration-200">
              <Github className="w-8 h-8" />
            </div>
            <span className="text-sm font-medium">GitHub</span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-3 p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 group"
          >
            <div className="p-4 rounded-full bg-gray-50 dark:bg-gray-800 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
              <Linkedin className="w-8 h-8" />
            </div>
            <span className="text-sm font-medium">LinkedIn</span>
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-3 p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 group"
          >
            <div className="p-4 rounded-full bg-gray-50 dark:bg-gray-800 group-hover:bg-blue-400 group-hover:text-white transition-all duration-200">
              <Twitter className="w-8 h-8" />
            </div>
            <span className="text-sm font-medium">Twitter</span>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-3 p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 group"
          >
            <div className="p-4 rounded-full bg-gray-50 dark:bg-gray-800 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:text-white transition-all duration-200">
              <Instagram className="w-8 h-8" />
            </div>
            <span className="text-sm font-medium">Instagram</span>
          </a>

          <a
            href="https://cal.com/xibhi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-3 p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 group"
          >
            <div className="p-4 rounded-full bg-gray-50 dark:bg-gray-800 group-hover:bg-green-600 group-hover:text-white transition-all duration-200">
              <Calendar className="w-8 h-8" />
            </div>
            <span className="text-sm font-medium">Cal.com</span>
          </a>

          <a
            href="mailto:hello@krish.dev"
            className="flex flex-col items-center space-y-3 p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 group"
          >
            <div className="p-4 rounded-full bg-gray-50 dark:bg-gray-800 group-hover:bg-blue-500 group-hover:text-white transition-all duration-200">
              <Mail className="w-8 h-8" />
            </div>
            <span className="text-sm font-medium">Email</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact