import React from 'react'

const Sidebar = () => {
  return (
        <div className="sidebar bg-white p-6 rounded-lg shadow-md border-b-4 border-blue-300">
          <h2>About DevConnect</h2>
          <img className='max-w-full rounded-md mb-4'
            src="https://avatars.githubusercontent.com/u/98865593?s=280&v=4"
            alt="DevConnect Logo"
          />
          <p>We are a global platform built for developers, by developers.</p>
          <p>
            Join our mission to make tech education and networking accessible to
            everyone.
          </p>
        </div>
  )
}

export default Sidebar