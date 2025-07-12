import { Heart } from "lucide-react"

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-200 dark:border-gray-700">
      <div className="text-center space-y-6">
        
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
