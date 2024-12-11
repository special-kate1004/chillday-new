'use client';
import { useState, useEffect } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';

// Loader Component
const Loader = () => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
    </div>
  );
};

function SmoothScrolling({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for content to load
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust timing based on your content

    return () => clearTimeout(timeout);
  }, []);

  // Ensure smooth scrolling works across all browsers, including Chrome
  useEffect(() => {
    if (navigator.userAgent.indexOf('Chrome') !== -1) {
      // Add additional Chrome-specific handling if needed
      document.documentElement.style.scrollBehavior = 'auto'; // Disable default smooth scroll behavior in Chrome
    }
  }, []);

  return (
    <>
      {isLoading && <Loader />} {/* Show loader while loading */}
      {!isLoading && (
        <ReactLenis
          root
          options={{
            lerp: 0.08, // Adjusted smoothness for better Chrome compatibility
            duration: 1.2, // Adjusted duration for smoother transition
            smoothTouch: true, // Enables smooth scrolling on touch devices
            scrollDisabled: false, // Allows scrolling (set to true to disable)
          }}
        >
          {children}
        </ReactLenis>
      )}
    </>
  );
}

export default SmoothScrolling;
