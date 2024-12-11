'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import mob1 from '@/images/pt-mob2.png'
import el1 from '@/images/pt-mob2-el1.svg'
import el2 from '@/images/pt-mob2-el2.svg'
import spiralIcon from '@/images/check.svg'

const Mob2 = () => {
  const sectionRef = useRef(null);
  const mobConRef = useRef(null);
  const mob1Ref = useRef(null);
  const el1Ref = useRef(null);
  const el2Ref = useRef(null);

  useEffect(() => {
    if (window.innerWidth <= 768) {
        return;
    }
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const mobCon = mobConRef.current;
    const mob1 = mob1Ref.current;
    const el1 = el1Ref.current;
    const el2 = el2Ref.current;

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

    timeline.fromTo(section, { opacity: 0 }, { opacity: 1, duration: 1 });
    timeline.fromTo(mobCon, { x: '-100%', opacity: 0 }, { x: '0%', opacity: 1, duration: 1 }, "-=0.5");
    timeline.fromTo(mob1, { scale: 0.5, y: '100%', transformOrigin: 'bottom' }, { scale: 1.1, y: '0%', transformOrigin: 'bottom', duration: 1 }, "-=1");
    timeline.fromTo(el1, { opacity: 0, x: -50, scale: 1.2 }, { opacity: 1, x: 0, scale: 1, duration: 0.5 }, "-=0.3");
    timeline.fromTo(el2, { opacity: 0, x: 50, scale: 1.2 }, { opacity: 1, x: 0, scale: 1, duration: 0.5 }, "-=0.3");

    return () => {
      timeline.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className='pt-mob-section' ref={sectionRef}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-12'>
            <div className='mob-con' ref={mobConRef}>
              <Image src={spiralIcon} alt="square icon" />
              <h2 className='sec-head'>
              Booking has never been so easy
              </h2>
              <p className='para'>
              Within seconds, you can easily set a booking time, date, and guest number.
              </p>
            </div>
          </div>
          <div className='col-lg-7 offset-lg-1 col-12'>
            <div className='pt-mob-container'>
              <div className='els'>
                <Image src={el1} alt="mobile" ref={el1Ref} />
                <Image src={el2} alt="mobile" ref={el2Ref} />
              </div>
              <Image src={mob1} alt="mobile" ref={mob1Ref} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mob2