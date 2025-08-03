import React from 'react'

const articlesData = [
  {
    id: 1,
    title: "Mastering React Components",
    excerpt: "Components are the heart of React apps. Learn how to structure, style, and optimize them.",
    author: "Sarah Dev",
  },
  {
    id: 2,
    title: "Using Props Like a Pro",
    excerpt: "Make your React components reusable and dynamic with props and destructuring.",
    author: "John Code",
  },
  {
    id: 3,
    title: "Understanding State and Effects",
    excerpt: "Learn the fundamentals of useState and useEffect with real-life examples.",
    author: "Lina Hooks",
  }
];

const Blog = ({ articles = articlesData }) => {
  return (
    <div className="mt-10 ">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Latest Articles</h2>
      <div className="space-y-6">
        {articles.map((article, index) => (
          <article
            key={index}
            className="post bg-gray-50 p-6 rounded-lg border border-gray-200 transition-shadow duration-300 hover:shadow-md
            border-l-[#28a745]"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
            <p className="text-gray-700 mb-3 leading-relaxed">{article.excerpt}</p>
            <p className="text-sm text-gray-500">
              <strong className="font-medium text-gray-600">Author:</strong> {article.author}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}


export default Blog;

