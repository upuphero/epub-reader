// components/EpubReader.jsx
import React, { useEffect, useRef, useState } from 'react';
import ePub from 'epubjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

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
        flow: "scrolled-doc",
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
        <button 
          className="side-nav-button left"
          onClick={handlePrevious} 
          disabled={isLoading}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        
        <div ref={viewerRef} className="viewer"></div>
        
        <button 
          className="side-nav-button right"
          onClick={handleNext} 
          disabled={isLoading}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default EpubReader;