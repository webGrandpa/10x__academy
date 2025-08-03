import React from 'react'

const FeaturesData = [
  {
    id: 1,
    title: "Community Driven",
    description: "Get support, share tips, and build together with thousands of developers."
  },
  {
    id: 2,
    title: "Learning Resources",
    description: "Access curated tutorials, challenges, and projects to boost your skills."
  },
  {
    id: 3,
    title: "Job Board",
    description: "Explore developer jobs and freelance gigs tailored to your stack."
  }
];




const Features = () => {
  return (
    <div className="features bg-white p-6 rounded-lg shadow-md mt-10 
    border-l-[5px] border-solid border-blue-500 gap-1.5">
        <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
        {FeaturesData.map((feature) => (
          <div className="feature mb-4" key={feature.id}>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
    </div>
  );
};

export default Features;