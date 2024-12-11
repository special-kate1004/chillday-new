import Header from '@/components/HomePage/FirstScroll'
import Scroll2 from '@/components/HomePage/Scroll2'
import React from 'react'
import Footer from '@/components/Footer'
import ChatSection from '@/components/HomePage/ChatSection'
import ThirdSection from '@/components/HomePage/ThirdSection'
import Navbar from '@/components/HomePage/Navbar'
import TestComponent from '@/components/HomePage/TestComponent'
import Mob1 from '@/components/HomePage/Mob1'
import Mob2 from '@/components/HomePage/Mob2'
const page = () => {
  return (
    <div>
      <Navbar />
      <Header />
      {/* <TestComponent /> */}
      {/* <Scroll2 /> */}
      <div className="spacer"></div>
      <ChatSection />
      <ThirdSection />
      <Mob1 />
      <Mob2 />
      <Footer /> 
    </div>
  )
}

export default page