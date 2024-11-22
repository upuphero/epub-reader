// components/Sidebar.jsx
import React from 'react';
import EpubUploader from './EpubUploader';
import ChapterList from './ChapterList';

const Sidebar = ({ onFileUpload, chapters, onChapterSelect, currentChapter }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <h3 className="section-title">Upload EPUB</h3>
        <EpubUploader onFileUpload={onFileUpload} />
      </div>
      <div className="sidebar-section">
        <h3 className="section-title">Table of Contents</h3>
        <ChapterList 
          chapters={chapters}
          onChapterSelect={onChapterSelect}
          currentChapter={currentChapter}
        />
      </div>
      <div className="sidebar-section">
        <h3 className="section-title">Bookmarks</h3>
        {/* Bookmarks content will go here */}
      </div>
    </div>
  );
};

export default Sidebar;