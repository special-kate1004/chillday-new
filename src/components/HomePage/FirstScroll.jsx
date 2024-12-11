"use client";
import mobile from "@/images/mobile1.webp";
import Image from "next/image";
import phone2 from "@/images/mobile2.webp";
import bg from "@/images/bg.jpg";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { useWindowSize } from "@studio-freight/hamo";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import el1 from "@/images/ele1.svg";
import el2 from "@/images/ele2.svg";
import el3 from "@/images/ele3.svg";
import bg2 from "@/images/section-2-bg.jpg";
import star from "@/images/star.svg";
import line from "@/images/line.svg";
import el4 from "@/images/ele4.svg";
import arrowDown from "@/images/arrow-down.svg";

export default function Header() {
  const trigger = useRef(); 
  const target = useRef();  
  const imgArrow = useRef();
  const bgTarget = useRef();
  const timeline = useRef(); 
  const mobileTarget = useRef();
  const textTarget = useRef();
  const imgTarget1 = useRef();
  const imgTarget2 = useRef();
  const imgTarget3 = useRef();
  const bgTarget2 = useRef();
  const sec2con = useRef();
  const lineTarget = useRef();
  const imgTarget4 = useRef();
  const { width: windowWidth } = useWindowSize();

  useEffect(() => {
    if (window.innerWidth <= 768) {
        return;
    }
    gsap.registerPlugin(ScrollTrigger);
    const y = windowWidth * 1 * 0.1;
    const setY = gsap.quickSetter(target.current, "y", "px");

    timeline.current = gsap.timeline({
      scrollTrigger: {
        id: "main-banner",
        trigger: trigger.current,
        pin: true,
        pinSpacing: false,
        markers: false,
        scrub: 2, 
        start: "top top",
        end: "+=300%"
        // end: "bottom top"
      },
    });

    timeline.current.fromTo(
      target.current,
      {
        x: "40vw",
        y: "-40vh",
        scale: 0.7,
        rotate: 30, 
      },
      {
        x: "40vw",
        y: "4vh", 
        rotate: 0, 
        scale: 1,
        ease: "power2.out",
        duration: 2
      },
      0
    );
    timeline.current.to(
      bgTarget.current,
      {
        opacity: 0,
        duration: 2
      },
      0
    );
    timeline.current.to(
      mobileTarget.current,
      {
        y: "-50vh",
        opacity: 0,
        duration: 1
      },
      0
    );
    timeline.current.to(
      lineTarget.current,
      {
        y: "-50vh",
        opacity: 0,
        duration: 1
      },
      0
    );
    timeline.current.to(
      textTarget.current,
      {
        y: "-50vh",
        opacity: 0,
        duration: 1.5
      },
      0
    );
    timeline.current.to(
      imgTarget1.current,
      {
        y: "-50vh",
        opacity: 0,
        duration: 1.5
      },
      0
    );
    timeline.current.to(
      imgTarget2.current,
      {
        y: "-50vh",
        opacity: 0,
        duration: 1.5
      },
      0
    );
    timeline.current.to(
      imgTarget3.current,
      {
        y: "-50vh",
        opacity: 0,
        duration: 1.5
      },
      0
    );
    timeline.current.to(
      imgTarget4.current,
      {
        y: "-50vh",
        opacity: 0,
        duration: 1.5
      },
      0
    );
    timeline.current.to(
      imgArrow.current,
      {
        y: "-50vh",
        opacity: 0,
        duration: 1.5
      },
      0
    );
    timeline.current.to(
      target.current,
      {
        x: "20vw",
        y: "4vh", 
        rotate: 0, 
        ease: "power2.out",
        duration: 2.5
      },
    );
    timeline.current.fromTo(
      sec2con.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: "power2.out",
        duration: 2.5
      },
      "-=1"
    );
    timeline.current.fromTo(
      sec2con.current,
      {
        opacity: 1,
      },
      {
        opacity: 0,
        ease: "power2.out",
        duration: 3,
        delay: 1 // Added delay
      },
    );
    timeline.current.to(
      target.current,
      {
        x: "80vw",
        opacity: 0,
        y: "4vh", 
        rotate: 0, 
        ease: "power2.out",
        duration: 3,
        delay: 1 // Added delay
      },
    );
    timeline.current.to(
      bgTarget2.current,
      {
        opacity: 0,
        ease: "power2.out",
        duration: 3,
        delay: 1 // Added delay
      },
      "-=0.5"
    );

    return () => {
      timeline?.current?.kill(); 
      // ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [windowWidth]);

  useEffect(() => {
    if (window.innerWidth <= 768) {
        return;
    }
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Calculate distance from center (for parallax effect intensity)
      const moveX = (clientX - centerX) / 50;
      const moveY = (clientY - centerY) / 50;

      // Different intensities for each element
      gsap.to(imgTarget1.current, {
        x: moveX * 1.5,
        y: moveY * 1.5,
        duration: 1,
        ease: "power2.out"
      });

      gsap.to(imgTarget2.current, {
        x: moveX * -2,
        y: moveY * -2,
        duration: 1,
        ease: "power2.out"
      });

      gsap.to(imgTarget3.current, {
        x: moveX * 1,
        y: moveY * 1,
        duration: 1,
        ease: "power2.out"
      });

      gsap.to(imgTarget4.current, {
        x: moveX * 1,
        y: moveY * 1,
        duration: 1,
        ease: "power2.out"
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
 
    const spans = document.querySelectorAll('.banner-text h1 span');
    
    gsap.to(spans, {
      color: '#FF5E54',
      duration: 1,
      stagger: 1,
      repeat: -1,
      yoyo: false,
      ease: "power1.inOut",
      delay: 0
    });
  }, []);
 
  const handleArrowClick = () => {
    window.scrollBy({
      top: window.innerHeight + 150,
      behavior: 'smooth'
    });
  };

  return (
    <div> 
      <div className="p-16 xl:p-32 flex flex-col w-full items-center justify-center main-banner-trigger" ref={trigger}>
        <div className="main-wrapper">
          <header className="main-banner">
            <Image src={arrowDown} className="ar-down" alt="bg" ref={imgArrow} onClick={handleArrowClick} />
            <Image src={phone2} className="animated-phone" alt="bg" ref={target} />
            <Image src={el1} className="el-1" alt="bg" ref={imgTarget1} />
            <Image src={el2} className="el-2" alt="bg" ref={imgTarget2} />
            <Image src={el3} className="el-3" alt="bg" ref={imgTarget3} />
            <Image src={el4} className="el-4" alt="bg" ref={imgTarget4} />
            <Image src={bg} className="animated-bg" ref={bgTarget} alt="bg" />
            <Image src={bg2} className="animated-bg2" ref={bgTarget2} alt="bg" />
            <Image src={line} className="line-pt" ref={lineTarget} alt="bg" />
            <div className="container ">
              <div className="row align-items-center">
              <div className="col-lg-6 col-12">
                <div className="banner-mob">
                  <Image src={mobile} ref={mobileTarget} alt="mobile" />
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="banner-text text-white" ref={textTarget}>
                  <h1>
                    <span>Imagine this:</span> <br className="d-sm-block d-none" />
                    From now on, <span>every <br className="d-sm-block d-none" />place</span> you visit with<br className="d-sm-block d-none" /> ChillDays will<br className="d-sm-block d-none" /> become an <span>instant<br className="d-sm-block d-none" /> favourite</span>
                  </h1>
                </div>
              </div>
              </div>
              <div className="second-scroll desk-el">
                <div className="row">
                  <div className="col-lg-6 col-12"></div>
                  <div className="col-lg-5 col-12">
                    <div className="sec-scroll-con-container">
                      <div className="sec-scroll-con" ref={sec2con}>
                        <Image src={star} alt="el" />
                      <h3 className="sec-head">
                      Get spots just <br className="d-sm-block d-none" /> right for you
                      </h3>
                      <p className="para">
                        Get recommendations, plan, and book the best places for you to eat, drink, chill, and have fun. You get great spots to enjoy, matched to your taste, preferences, and budget.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        
            <div className="second-scroll mob-el">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-12"></div>
                  <div className="col-lg-5 col-12">
                    <div className="sec-scroll-con-container">
                      <Image src={phone2} className="" alt="bg" />
                      <div className="sec-scroll-con">
                        <Image src={star} alt="el" />
                      <h3 className="sec-head">
                      Get spots just <br className="d-sm-block d-none" /> right for you
                      </h3>
                      <p className="para">
                        Get recommendations, plan, and book the best places for you to eat, drink, chill, and have fun. You get great spots to enjoy, matched to your taste, preferences, and budget.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      {/* <section className="hm-sec-3"></section>  */}
      
    </div>
  );
}
