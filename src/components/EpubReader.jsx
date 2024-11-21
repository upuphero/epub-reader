// components/EpubReader.jsx
import React, { useEffect, useRef, useState } from 'react';
import ePub from 'epubjs';

const EpubReader = ({ epubFile }) => {
  const viewerRef = useRef(null);
  const [book, setBook] = useState(null);
  const [rendition, setRendition] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (epubFile && viewerRef.current) {
      setIsLoading(true);
      const newBook = ePub(epubFile);
      setBook(newBook);

      // Set specific dimensions for the rendition
      const newRendition = newBook.renderTo(viewerRef.current, {
        width: '800px',  // Fixed width
        height: '600px', // Fixed height
        flow: "paginated",
        spread: "none"
      });

      newRendition.display().then(() => {
        setRendition(newRendition);
        setIsLoading(false);
      });

      return () => {
        if (newBook) {
          newBook.destroy();
        }
      };
    }
  }, [epubFile]);

  const handlePrevious = () => {
    if (rendition && !isLoading) {
      rendition.prev();
    }
  };

  const handleNext = () => {
    if (rendition && !isLoading) {
      rendition.next();
    }
  };

  return (
    <div className="reader-container">
      <div className="viewer-wrapper">
        <div ref={viewerRef} className="viewer"></div>
      </div>
      <div className="navigation-controls">
        <button 
          className="nav-button"
          onClick={handlePrevious} 
          disabled={isLoading}
        >
          Previous
        </button>
        <button 
          className="nav-button"
          onClick={handleNext} 
          disabled={isLoading}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default EpubReader;