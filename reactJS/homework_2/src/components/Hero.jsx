import React from 'react'

const Hero = () => {
  return (
    <div className="hero p-10 bg-blue-100 text-center rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Welcome to DevConnect</h2>
          <p>The place where developers share, learn, and grow together.</p>
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg
          hover:bg-blue-600 hover:scale-102 active:scale-99 cursor-pointer">Join Now</button>
    </div>
  )
}

export default Hero