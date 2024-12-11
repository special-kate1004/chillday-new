"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useState, useEffect } from 'react';
import Loader from './Loader'; // Import the loader component

function SmoothScrolling({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for content to load
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust timing as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading && <Loader />} {/* Show loader while loading */}
      {!isLoading && (
        <ReactLenis
          root
          options={{
            lerp: 0.1,
            duration: 1.5,
            smoothTouch: true,
          }}
        >
          {children}
        </ReactLenis>
      )}
    </>
  );
}

export default SmoothScrolling;
