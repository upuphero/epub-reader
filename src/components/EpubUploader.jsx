// components/EpubUploader.jsx
import React from 'react';

const EpubUploader = ({ onFileUpload }) => {
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/epub+zip') {
      try {
        const arrayBuffer = await file.arrayBuffer();
        onFileUpload(arrayBuffer); // Pass arrayBuffer instead of URL
      } catch (error) {
        console.error('Error reading file:', error);
        alert('Error reading the file');
      }
    } else {
      alert('Please upload a valid EPUB file');
    }
  };

  return (
    <div className="uploader">
      <h2>Upload EPUB</h2>
      <input
        type="file"
        accept=".epub"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default EpubUploader;