import React from 'react';

const MainContent = ({ children }) => {
  return (
    <div className="main-content p-5 max-w-7xl mx-auto">
      {children}
    </div>
  );
};

export default MainContent;