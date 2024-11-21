// components/Sidebar.jsx
import React from 'react';
import EpubUploader from './EpubUploader';

const Sidebar = ({ onFileUpload }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <h3 className="section-title">Upload EPUB</h3>
        <EpubUploader onFileUpload={onFileUpload} />
      </div>
      <div className="sidebar-section">
        <h3 className="section-title">Table of Contents</h3>
        {/* TOC content will go here */}
      </div>
      <div className="sidebar-section">
        <h3 className="section-title">Bookmarks</h3>
        {/* Bookmarks content will go here */}
      </div>
    </div>
  );
};

export default Sidebar;