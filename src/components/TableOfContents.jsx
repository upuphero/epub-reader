// TableOfContents.jsx
import React from 'react';

const TableOfContents = ({ chapters, onChapterSelect }) => {
  return (
    <div className="toc-container">
      {chapters.map((chapter, index) => (
        <div 
          key={index}
          className="chapter-item"
          onClick={() => onChapterSelect(chapter.href)}
        >
          {chapter.label}
        </div>
      ))}
    </div>
  );
};

export default TableOfContents;