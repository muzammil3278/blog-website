import Link from "next/link";
import Logo from "@/components/subcomp/logo";
import Social from "@/components/subcomp/social";
import Location from "@/components/subcomp/location";
import Btn from "@/components/subcomp/btn";

export default function index() {
  return (
    <>
      <div className=" bg-orange-400  ">
        <div className="py-10 container lg:px-10 md:px-7 sm:px-4 px-2 mx-auto fbcw">
          <div className="flex flex-col md:w-5/12 w-full">
            <h2 className="text-white text-2xl font-semibold">
              Have any works you want to done by me?
            </h2>
            <span className="text-white text-base">
              I completed your project in times.
            </span>
          </div>
          <div className="md:w-7/12 w-full flex md:justify-end justify-start md:pt-0 pt-5">
            <Btn />
          </div>
        </div>
      </div>
      <footer className="bg-gray-800 pt-12 bg-[url('/footer-bg.png')] img bg-top ">
        <div className="container lg:px-10 md:px-7 sm:px-4 px-2 mx-auto fccw ">
          <div className="w-full mb-8 md:w-6/12 lg:w-3/12 ">
            <div className="logo flex justify-center md:justify-start ">
              <Logo />
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
              <h4 className="text-orange-500 mb-4 text-xl font-bold">
                Follow Me
              </h4>
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
          <div className="w-full mb-8 md:w-6/12 lg:w-3/12">
            <h2 className="text-orange-500 mb-6 text-2xl font-semibold">
              Services
            </h2>
            <ul>
              <li className="mb-3 text-base text-white">
                <Link href="/service/web">Web Development</Link>
              </li>
              <li className="mb-3 text-base text-white">
                <Link href="/service/designer">Graphic Design</Link>
              </li>
              <li className="mb-3 text-base text-white">
                <Link href="/service/data">Data Entry</Link>
              </li>
            </ul>
          </div>
          <div className="w-full mb-8 md:w-6/12 lg:w-3/12 ">
            <h2 className="text-orange-500  mb-7 text-2xl font-semibold ">
              Have a Questions?
            </h2>
            <Location />
          </div>
        </div>
        <div className="text-center bg-gray-900 text-white py-6">
          <div className="container lg:px-10 md:px-7 sm:px-4 px-2 mx-auto ">
            <p>
              Copyright ©2023 All rights reserved | This template is made with
              by
              <span className="text-orange-400">
                <Link href="/"> Muzammil Safdar</Link>
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
