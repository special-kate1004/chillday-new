'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import logo from '@/images/logo.svg'
import Image from 'next/image'
import playStore from '@/images/google-play.svg'
import appStore from '@/images/app-store.svg'
import 'boxicons/css/boxicons.min.css'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const subscribeSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
});

const Footer = () => {
  const [subscribeStatus, setSubscribeStatus] = useState('');

  const handleSubscribe = async (values, { setSubmitting, resetForm }) => {
    try {
      // Here you would typically make an API call to your backend
      // For demo, simulating API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubscribeStatus('Thanks for subscribing!');
      resetForm();
    } catch (error) {
      setSubscribeStatus('Something went wrong. Please try again.');
    }
    setSubmitting(false);
  };

  return (
    <>
      <section className='sec'>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className='sec-head'>Say goodbye to endless searching</h3>
              {/* <p className='para'>
                Download <span>ChillDays</span>
              </p> */}
              <div className="sec-btns">
                <Link href="/" className='btn'>
                  <Image src={playStore} alt="play store" />
                </Link>
                <Link href="/" className='btn'>
                  <Image src={appStore} alt="app store" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className='main-footer'>
          <div className="container">
              <div className="row">
                  <div className="col-lg-4 col-12">
                      <Link href="/" className='footer-logo'>
                          <Image src={logo} alt="logo" />
                      </Link>
                      <p className='ft-para'>
                          Say goodbye to endless searching. Get straight to the places you&apos;ll love.
                      </p>
                  </div>
                  <div className="col-lg-3 offset-lg-1 col-12">
                      <h4 className='footer-title'>
                          Contacts
                      </h4>
                      <ul className='ft-list'>
                          <li>
                              <Link href="mailto:hello@chilldays.com">hello@chilldays.com</Link>
                          </li>
                      </ul>
                  </div>
                  <div className="col-lg-4 col-12">
                      <h4 className='footer-title'>
                      Join our Newsletter!
                      </h4>
                      <p className='para'>
                      Be the first to know about our latest updates, exclusive offers, and more.
                      </p>
                      <Formik
                        initialValues={{ email: '' }}
                        validationSchema={subscribeSchema}
                        onSubmit={handleSubscribe}
                      >
                        {({ errors, touched, isSubmitting }) => (
                          <Form className="sub-form">
                            <Field
                              type="email"
                              name="email"
                              placeholder='Enter your email address'
                              className={errors.email && touched.email ? 'error' : ''}
                            />
                            <button type="submit" disabled={isSubmitting}>
                              {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                            </button>
                            {errors.email && touched.email && (
                              <div className="error-message">{errors.email}</div>
                            )}
                            {subscribeStatus && (
                              <div className="status-message">{subscribeStatus}</div>
                            )}
                          </Form>
                        )}
                      </Formik>
                  </div>
              </div>
              <div className="ft-bottom">
                  <p className='para'>
                  &copy; {new Date().getFullYear()} ChillDays. All rights reserved.
                  </p>
                  <ul className='ft-bottom-list'>
                      <li>
                          <Link href="/privacy-policy">Privacy Policy</Link>
                      </li>
                      <li>
                          <Link href="/terms-of-service">Terms of Service</Link>
                      </li>
                  </ul>
                  <ul className='ft-bottom-social'>
                      <li>
                          <Link href="/"><i className='bx bxl-facebook'></i></Link>
                      </li>
                      <li>
                          <Link href="/"><i className='bx bxl-instagram'></i></Link>
                      </li>
                      <li>
                          <Link href="/"><i className='bx bxl-twitter'></i></Link>
                      </li>
                      <li>
                          <Link href="/"><i className='bx bxl-linkedin'></i></Link>
                      </li>
                      <li>
                          <Link href="/"><i className='bx bxl-tiktok'></i></Link>
                      </li>
                  </ul>
              </div>
          </div>
      </footer>
    </>
  )
}

export default Footer