'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import chatIcon from '@/images/chat.svg'
import ch1 from '@/images/ch1.svg'
import ch2 from '@/images/ch2.svg'
import ch3 from '@/images/ch3.svg'
import ch4 from '@/images/ch4.svg'
import chMobile from '@/images/chat-mockup.png'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const ChatSection = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const mobileRef = useRef(null)
  const containerRef = useRef(null)
  const ch1Ref = useRef(null)
  const ch2Ref = useRef(null)
  const ch3Ref = useRef(null)
  const ch4Ref = useRef(null)

  useEffect(() => {
    if (window.innerWidth <= 768) {
        return;
    }
    gsap.registerPlugin(ScrollTrigger)

    
    const timeline = gsap.timeline({
      scrollTrigger: {
        id: 'chat-section',
        trigger: sectionRef.current,
        pin: true,
        start: "top top",
        end: '+=500%',
        // end: "bottom top",
        scrub: 2,
        pinSpacing: true,
        markers: false,
      }
    })

    // Initial state
    gsap.set([ch1Ref.current, ch2Ref.current, ch3Ref.current, ch4Ref.current], { scale: 0 })
    gsap.set(contentRef.current, { x: -100, opacity: 0 })
    gsap.set(mobileRef.current, { x: 100, opacity: 0 })
    gsap.set(containerRef.current, { x: 0 })
    
    timeline.to(containerRef.current, { scale: 1, duration: 2 })

    // Animate chat bubbles one by one
    timeline.to(ch1Ref.current, { scale: 1, duration: 2, delay: 5 })
    timeline.to(ch2Ref.current, { scale: 1, duration: 2 })
    timeline.to(ch3Ref.current, { scale: 1, duration: 2 })
    timeline.to(ch4Ref.current, { scale: 1, duration: 2 })
    
    // Move chat container right
    timeline.to(containerRef.current, { x: 0, scale: 1, duration: 2 })
    
    // Fade in content and mobile
    timeline.to(mobileRef.current, { x: 0, opacity: 1, duration: 2 }, "-=1.5")
    timeline.to(contentRef.current, { x: 0, opacity: 1, duration: 2 }, "-=1")
    timeline.to(contentRef.current, { x: 0, opacity: 1, duration: 2 })

    return () => {
        // timeline?.current?.kill();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };

  }, [])

  return (
    <section className='chat-section' ref={sectionRef}>
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-lg-4 col-12'>
                    <div className='chat-section__content' ref={contentRef}>
                        <Image src={chatIcon} alt='chat' />
                        <h2 className='sec-head'>
                            Chat with us
                        </h2>
                        <p className='para'>
                            You don&apos;t know what to do or where to go? Just text me, and together we&apos;ll find and plan something that fits your wants and needs.
                        </p>
                    </div>
                </div>
                <div className='col-lg-6 offset-lg-2 col-12'>
                    <div className='chat-section__mobile' >
                        <div className='chat-container' ref={containerRef}>
                            <div className='chat-inbox'>
                                <Image src={ch1} alt='chat' ref={ch1Ref} />
                                <Image src={ch2} alt='chat' ref={ch2Ref} />
                                <Image src={ch3} alt='chat' ref={ch3Ref} />
                            </div>
                            <Image src={ch4} alt='chat' ref={ch4Ref} />
                        </div>
                        <Image src={chMobile} alt='chat' ref={mobileRef} />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ChatSection