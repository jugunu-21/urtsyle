// FooterVisibilityContext.js
import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

const FooterVisibilityContext = createContext();

export const useFooterVisibility = () => useContext(FooterVisibilityContext);

export const FooterVisibilityProvider = ({ children }) => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <FooterVisibilityContext.Provider value={{ isFooterVisible, footerRef }}>
      {children}
    </FooterVisibilityContext.Provider>
  );
};