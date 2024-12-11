'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import mob1 from '@/images/mob1.png'
import sqIcon from '@/images/sq-icon.svg'
import mob2 from '@/images/mob2.png'
import mob3 from '@/images/mob3.png'
import mob4 from '@/images/mob4.png'

const mobGridData = [
  {
    image: mob1,
    title: "Tell me in which <span>area</span> you want to go"
  },
  {
    image: mob2,
    title: "Tell me <span>when</span> and <span>how many</span> you are"
  },
  {
    image: mob3,
    title: "Select which <span>activities</span> you want to do"
  },
  {
    image: mob4,
    title: "Choose the <span>place</span> that <span>fits you</span> the most"
  }
];

const ThirdSection = () => {
    const sectionRef = useRef(null);
    const secHeadRef = useRef(null);
    const paraRef = useRef(null);
    const sqIconRef = useRef(null);
    const mobGridWrapperRef = useRef(null);
    const mobWrapRefs = useRef([]);
    
    useEffect(() => {
      if (window.innerWidth <= 768) {
          return;
      }
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const secHead = secHeadRef.current;
    const para = paraRef.current;
    const sqIcon = sqIconRef.current;
    const mobGridWrapper = mobGridWrapperRef.current;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=300%',
        pin: true,
        pinSpacing: true,
        scrub: 2,
      }
    });

    timeline.fromTo(sqIcon, { y: 100, opacity: 0 }, {
      y: 0,
      opacity: 1,
    });

    timeline.fromTo(secHead, { y: 100, opacity: 0 }, {
      y: 0,
      opacity: 1,
    }, "-=0.5");

    timeline.fromTo(para, { y: 100, opacity: 0 }, {
      y: 0,
      opacity: 1,
    }, "-=0.5");

    timeline.fromTo(mobGridWrapper, { y: '20%', opacity: 0 }, {
        y: '0%',
        opacity: 1,
        duration: 0.5,
    }, "-=0.3");

    timeline.fromTo(mobGridWrapper, { x: '0%' }, {
      x: '-110%',
      duration: 2,
    //   onUpdate: () => {
    //     const progress = timeline.progress(); 
  
    //     mobWrapRefs.current.forEach((mobWrap, index) => {
          
    //       const scaleValue = 1 + progress * 0.5;
  
         
    //       const adjustedScaleValue = index % 2 === 0 ? scaleValue : 1 + (1.5 - scaleValue);
  
      
    //       gsap.set(mobWrap, {
    //         scale: adjustedScaleValue,
    //       });
    //     });
    //   },
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
   
  }, []);

  return (
    <section className='third-section' ref={sectionRef}>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center th-con'>
            <Image src={sqIcon} alt='third' ref={sqIconRef} />
            <h3 className='sec-head' ref={secHeadRef}>
              From daytime delights to nighttime thrills.
            </h3>
            <p className='para' ref={paraRef}>
              Choose and personalise every detail of your day, from locations and companions to timing and activities
            </p>
          </div>
          <div className='col-lg-12 col-12'>
            <div className='mob-grid-container'>
                <div className='mob-grid-wrapper' ref={mobGridWrapperRef}>
                    {mobGridData.map((mob, index) => (
                      <div className='mob-wrap' key={index} >
                        <Image src={mob.image} alt='third' ref={el => mobWrapRefs.current[index] = el} />
                        <div className='content'>
                          <h2 dangerouslySetInnerHTML={{ __html: mob.title }} />
                        </div>
                      </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ThirdSection