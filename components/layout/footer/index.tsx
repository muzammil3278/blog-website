import React from 'react'
import Link from 'next/link'
import Tag from '@/components/home/blog/left/tag'
import Cat from '@/components/home/blog/left/cat'
import Social from '@/components/home/blog/left/social'

export default function index() {
  return (
    <><footer className="bg-gray-800 pt-12 bg-[url('/footer-bg.png')] img bg-top ">
        <div className="container mx-auto flex justify-center item-center flex-wrap ">
          <div className="w-full mb-8 md:w-6/12 lg:w-3/12 ">
            <div className="logo flex justify-center md:justify-start ">
              {/* <Logo /> */}
            </div>
            <div className="para mt-6 text-white ">
              <p>
                My name is Muhammad Muzammil Safdar. I am a web developer with
                2+ years of experience in Frontend. I used the technology of
                Html, Css, Js, React.js, Next.js, Tailwind css, Chakura UI,
                Framer Motion and deployment on vercel.
              </p>
            </div>
            <div className="social mt-6">
              <Social />
            </div>
          </div>
          <div className="w-full mb-8 md:w-6/12 lg:w-3/12 md:pl-10 pl-0 ">
            <h2 className="text-orange-500 mb-6 text-2xl font-semibold">
              Links
            </h2>
            <ul>
              <li className="mb-3 text-base text-white">
                <Link href="/">Home</Link>
              </li>
              <li className="mb-3 text-base text-white">
                <Link href="/about">About</Link>
              </li>
              <li className="mb-3 text-base text-white">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="mb-3 text-base text-white">
                <Link href="/service">Services</Link>
              </li>
              <li className="mb-3 text-base text-white">
                <Link href="/blogs">Blogs</Link>
              </li>
              <li className="mb-3 text-base text-white">
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li className="mb-3 text-base text-white">
                <Link href="/resume">Resume</Link>
              </li>
              <li className="mb-3 text-base text-white">
                <Link href="/skill">Skills</Link>
              </li>
            </ul>
          </div>
          <div className="w-full mb-8 md:w-6/12 lg:w-3/12 px-2">
            <Tag />
          </div>
          <div className="w-full mb-8 md:w-6/12 lg:w-3/12 ">
            <Cat />
          </div>
        </div>
        <div className="text-center bg-gray-900 text-white py-6">
          <div className="container lg:px-10 md:px-7 sm:px-4 px-2 mx-auto ">
            <p>
              Copyright ©2023 All rights reserved | This template is made with
              by
              <span className="text-orange-400">
                <Link href="https://muzammil-portofolio.vercel.app/" target="_blank"> Muzammil Safdar</Link>
              </span>
            </p>
          </div>
        </div>
      </footer></>
  )
}
