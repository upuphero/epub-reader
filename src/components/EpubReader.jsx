// components/EpubReader.jsx
import React, { useEffect, useRef, useState } from 'react';
import ePub from 'epubjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const EpubReader = ({ epubFile, onTocUpdate }) => {
  const viewerRef = useRef(null);
  const [book, setBook] = useState(null);
  const [rendition, setRendition] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentChapter, setCurrentChapter] = useState(null);

  useEffect(() => {
    if (epubFile && viewerRef.current) {
      const newBook = ePub(epubFile);
      setBook(newBook);

      const newRendition = newBook.renderTo(viewerRef.current, {
        width: '800px',
        height: '800px',
        flow: "scrolled-doc",
        spread: "none"
      });

      // Get TOC when book is loaded
      newBook.loaded.navigation.then(() => {
        const toc = newBook.navigation.toc;
        onTocUpdate(toc);
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

  useEffect(() => {
    if (rendition && currentChapter) {
      rendition.display(currentChapter);
    }
  }, [currentChapter, rendition]);

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