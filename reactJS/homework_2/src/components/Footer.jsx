import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-b-1 border-gray-200
    p-6 text-center rounded-t-md">
      <p>&copy; 2025 DevConnect. All rights reserved.</p>
      <nav className="gap-4 mt-4 flex justify-center ">
        <a href="/privacy" className="hover:underline hover:text-blue-400 text-blue-600">Privacy Policy</a>
        <a href="/terms" className="hover:underline hover:text-blue-400 text-blue-600">Terms of Service</a>
      </nav>
    </footer>
  )
}

export default Footer