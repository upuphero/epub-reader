// App.jsx
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import EpubReader from './components/EpubReader';
import './App.css';

function App() {
  const [epubFile, setEpubFile] = useState(null);
  const [toc, setToc] = useState([]);

  const handleFileUpload = (file) => {
    setEpubFile(file);
  };

  const handleTocUpdate = (tocData) => {
    setToc(tocData);
  };

  const handleChapterSelect = (href) => {
    if (rendition) {
      rendition.display(href);
    }
  };

  return (
    <div className="app-container">
      <div className="left-panel">
        <Sidebar 
          onFileUpload={handleFileUpload}
          chapters={toc}
          onChapterSelect={handleChapterSelect}
        />
      </div>
      <div className="right-panel">
        {epubFile && (
          <EpubReader 
            epubFile={epubFile} 
            onTocUpdate={handleTocUpdate}
          />
        )}
      </div>
    </div>
  );
}

export default App;