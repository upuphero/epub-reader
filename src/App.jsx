// App.jsx
import React, { useState } from 'react';
import EpubUploader from './components/EpubUploader';
import EpubReader from './components/EpubReader';
import './App.css';

function App() {
  const [epubFile, setEpubFile] = useState(null);

  const handleFileUpload = (file) => {
    setEpubFile(file);
  };

  return (
    <div className="app-container">
      <div className="left-panel">
        <EpubUploader onFileUpload={handleFileUpload} />
      </div>
      <div className="right-panel">
        {epubFile && <EpubReader epubFile={epubFile} />}
      </div>
    </div>
  );
}

export default App;