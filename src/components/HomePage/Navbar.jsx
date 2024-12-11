import React from 'react'
import Image from 'next/image'
import logo from '@/images/logo.svg'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='main-nav'>
        <div className='container'>
            <div className='inner-nav'>
                <div className='l-part'>
                <Link href='/' className='h-logo'>
                    <Image src={logo} alt='logo' />
                </Link>
                </div>
                <div className='r-part'>
                <Link href='/' className='main-btn border-btn'>
                    <span>For Business</span>
                </Link>
                    <Link href='/' className="main-btn">
                        <span className='btn-text'>Download</span>
                        <Image src={logo} alt='arrow' />
                    </Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar