import { useState } from 'react'
import React from 'react'


const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
    agreement: false,
    preferredContact: 'Email-pref'
  })

  return (
    <div className='w-full flex justify-center align-middle'>
      <form className='w-96 flex flex-col justify-items-start gap-2.5 mt-5 p-4 rounded border border-b-blue-800'>
        <div className='flex gap-2.5 justify-between'>
          <label htmlFor="fullName">Full Name</label>
          <input 
            type="text" 
            id='fullName'
            name='fullName'
            placeholder='Enter your name'
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            required
            className='border border-gray-600 w-3xs rounded-md h-8 px-3 placeholder-gray-700 focus:border-blue-700
            focus:placeholder:opacity-0'
             />
        </div>
        <div className='flex gap-2.5 justify-between'>
          <label htmlFor="e-mail">e-mail</label>
          <input 
            type="text" 
            id='e-mail'
            name='email'
            placeholder='e-mail.. example@com'
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className='border border-gray-600 w-3xs rounded-md h-8 px-3 placeholder-gray-700 focus:border-blue-700
            focus:placeholder:opacity-0'
             />
        </div>
        <div className='flex gap-2.5 justify-between'>
          <label htmlFor="subject">Subject</label>
          <input 
            type="text" 
            id='subject'
            name='subject'
            placeholder='Enter subject'
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            required
            className='border border-gray-600 w-3xs rounded-md h-8 px-3 placeholder-gray-700 focus:border-blue-700
            focus:placeholder:opacity-0'
             />
        </div>
        <div className='flex gap-2.5 justify-between'>
          <label htmlFor="message">Message</label>
          <input 
            type="text" 
            id='message'
            name='message'
            placeholder='Enter your message'
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            className='border border-gray-600 w-3xs rounded-md h-18 px-3 placeholder-gray-700 focus:border-blue-700
            focus:placeholder:opacity-0 text-start'
             />
        </div>
        <div>
          <input
            type="checkbox"
            id="agreement"
            name="agreement"
            className="mr-2"
            checked={formData.agreement}
            onChange={(e) => setFormData({ ...formData, agreement: e.target.checked })}
            required
          />
          <label htmlFor="agreement">I agree to the terms and conditions</label>
        </div>
        <div className='radio flex gap-2.5 justify-between flex-col'>
          <span>Preferred contact method: </span>
          <div>
            <input
              type="radio"
              id="Email-pref"
              name="options"
              value="Email-pref"
              className="mr-2"
              checked={formData.preferredContact === 'Email-pref'}
              onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
            />
            <label htmlFor="Email-pref">Email</label>
            <input
              type="radio"
              id="Phone-pref"
              name="options"
              value="Phone-pref"
              className="ml-4 mr-2"
              checked={formData.preferredContact === 'Phone-pref'}
              onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
            />
            <label htmlFor="Phone-pref">Phone</label>
            <input
              type="radio"
              id="No-pref"
              name="options"
              value="No-pref"
              className="ml-4 mr-2"
              checked={formData.preferredContact === 'No-pref'}
              onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
            />
            <label htmlFor="No-pref">No Preference</label>
          </div>
        </div>
        <button
          type='submit'
          className='
          w-32 h-10 bg-blue-400 self-center rounded-md
          hover:bg-blue-300 cursor-pointer hover:scale-101
          active:scale-99'
        >
          send message
        </button>
      </form>
      
    </div>
  )
}

export default ContactForm