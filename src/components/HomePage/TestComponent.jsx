'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const TestComponent = () => {
  const sectionRef = useRef(null);
  const titleRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        start: "top top",
        end: "+=300%",
        scrub: 2,
        pinSpacing: true,
        markers: false, // Enable `true` for debugging
      },
    });

    titleRefs.current.forEach((title, index) => {
      timeline.fromTo(
        title,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 },
        index * 1 // Delay between animations
      );
    });

    // Cleanup function to avoid memory leaks
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="pinned-section">
      {['Title 1', 'Title 2', 'Title 3', 'Title 4'].map((title, index) => (
        <h2
          key={index}
          ref={(el) => (titleRefs.current[index] = el)}
        >
          {title}
        </h2>
      ))}
    </section>
  );
};

export default TestComponent;
