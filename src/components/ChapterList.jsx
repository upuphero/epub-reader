// components/ChapterList.jsx
import React from 'react';

const ChapterList = ({ chapters, onChapterSelect, currentChapter }) => {
  return (
    <div className="chapter-list">
      {chapters.map((chapter, index) => (
        <div
          key={index}
          className={`chapter-item ${chapter.href === currentChapter ? 'active' : ''}`}
          onClick={() => onChapterSelect(chapter.href)}
        >
          {chapter.label}
        </div>
      ))}
    </div>
  );
};

export default ChapterList;