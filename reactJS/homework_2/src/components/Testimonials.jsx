import React from 'react'

const testimonialsData = [
  {
    id: 1,
    image: "https://cdn-icons-png.flaticon.com/512/3541/3541871.png",
    quote: "DevConnect helped me land my first remote React job!",
  },
  {
    id: 2,
    image: "https://cdn-icons-png.flaticon.com/512/3541/3541871.png",
    quote: "The tutorials and challenges here are better than most courses I've paid for.",
  },
];

const Testimonials = ({testimonials = testimonialsData}) => {
  return (
    <div className="testimonials mb-9">
          <h2>What Developers Say</h2>
          <div className="testimonial bg-white p-5 mx-0 my-3.5 align-middle flex border-l-4
          border-l-[#ffc107] flex-col gap-5">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-item">
                <img src={testimonial.image} alt="User" 
                className="w-16 rounded-full mr-5" />
                <blockquote className='italic m-0'>{testimonial.quote}</blockquote>
              </div>
            ))}
          </div>
    </div>
  )
}

export default Testimonials