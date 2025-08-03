import { useState } from 'react'
import Header from './components/Header.jsx';
import './App.css'
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Blog from './components/Blog.jsx';
import Testimonials from './components/Testimonials.jsx';
import Sidebar from './components/Sidebar.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App font-sans m-0 p-0 bg-[#f8f9fa] color-[#333] box-border">
      <Header />
      <MainContent> 
        <Hero />
        <Features />
        <Blog />
        <Testimonials />
        <Sidebar />
      </MainContent>
      <Footer />
    </div>
  );
}

export default App;
