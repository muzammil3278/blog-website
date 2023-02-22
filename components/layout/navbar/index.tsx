import Link from "next/link";
import React from "react";
import { useState } from "react";
import { FaSearch, FaBars, FaRegWindowClose, FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function index() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  return (
    <div className="md:bg-gray-900 bg-none md:block hidden">
      <div className="container p-2 mx-auto flex justify-between items-center">
        <div
          className={
            isNavExpanded ? "expanded  h-full w-1/2 " : " hidden md:block"
          }
        >
          <ul
            className={
              isNavExpanded
                ? "fixed top-0 bg-gray-900 left-0 pt-2 z-50 h-full w-1/2 overflow-y-scroll"
                : "flex justify-center items-center flex-wrap"
            }
          >
            <li
              className={
                isNavExpanded
                  ? "nav-link py-4 pl-4 w-full bg-white "
                  : "mr-8 py-4 text-white text-base font-normal nav-link"
              }
            >
              <span>
                <Link href="/">Home</Link>
              </span>
            </li>
            <li
              className={
                isNavExpanded
                  ? "nav-link py-4  pl-4 w-full bg-white  "
                  : "mr-8 py-4 text-white text-base font-normal nav-link"
              }
            >
              <span>
                <Link href="/about">About</Link>
              </span>
            </li>
            <li
              className={
                isNavExpanded
                  ? "nav-link py-4  pl-4 w-full bg-white  "
                  : "mr-8 py-4 text-white text-base font-normal nav-link"
              }
            >
              <span>
                <Link href="/resume">Resume</Link>
              </span>
            </li>
            <li
              className={
                isNavExpanded
                  ? "nav-link py-4  pl-4 w-full bg-white  "
                  : "mr-8 py-4 text-white text-base font-normal nav-link"
              }
            >
              <span>
                <Link href="/blogs">Blogs</Link>
              </span>
            </li>
            <li
              className={
                isNavExpanded
                  ? "nav-link py-4  pl-4 w-full bg-white  "
                  : "mr-8 py-4 text-white text-base font-normal nav-link"
              }
            >
              <span>
                <Link href="/portfolio">Portfolio</Link>
              </span>
            </li>

            <li
              className={
                isNavExpanded
                  ? "dropdown py-4  pl-4 w-full bg-white"
                  : "dropdown mr-8 py-4 text-white text-base font-normal nav-link"
              }
            >
              <span
                className={
                  isNavExpanded
                    ? " w-full "
                    : "fwcw flex flex-wrap justify-center text-white "
                }
              >
                <div className="flex justify-between items-center relative ">
                  <p className="">Services</p>
                  <div
                    className={isDropdown ? "z-50" : " block md:hidden"}
                    onClick={() => {
                      setIsDropdown(!isDropdown);
                    }}
                  >
                    {isDropdown ? (
                      <FaAngleUp    className="h-8 w-8 ml-1  mr-4 p-2 bg-gray-200 rounded-full"/>
                    ) : (
                      <FaAngleDown   className="h-8 w-8 ml-1  mr-4 p-2 bg-gray-200 rounded-full"/>)}
                  </div>
                </div>
              </span>
              <div
                className={
                  isDropdown
                    ? "w-full"
                    : " dropdown-content absolute z-10 hidden mt-6 peer-hover:flex hover:flex w-[180px] flex-col bg-gray-200 drop-shadow-lg "
                }
              >
                <ul>
                  <li
                    className={
                      isDropdown
                        ? "px-5 py-3 block hover:bg-gray-200 bg-gray-200 mt-4 nav-link"
                        : "px-5 py-3 hover:bg-gray-200 block text-black w-48 bg-white"
                    }
                  >
                    <span>
                      <Link href="/service/web">Web Development</Link>
                    </span>
                  </li>
                  <li
                    className={
                      isDropdown
                        ? "px-5 py-3 block hover:bg-gray-200 bg-gray-200 nav-link"
                        : "px-5 py-3 hover:bg-gray-200 block text-black w-48 bg-white"
                    }
                  >
                    <span>
                      <Link href="/service/designer">Graphic Designing</Link>
                    </span>
                  </li>
                  <li
                    className={
                      isDropdown
                        ? "px-5 py-3 block hover:bg-gray-200 bg-gray-200 nav-link"
                        : "px-5 py-3 hover:bg-gray-200 block text-black w-48 bg-white"
                    }
                  >
                    <span>
                      <Link href="/service/data">Data Entry</Link>
                    </span>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className={
                isNavExpanded
                  ? " nav-link py-4  pl-4 w-full bg-white  "
                  : "mr-8 py-4 text-white text-base font-normal nav-link"
              }
            >
              <span>
                <Link href="/skill">Skills</Link>
              </span>
            </li>
            <li
              className={
                isNavExpanded
                  ? "nav-link py-4  pl-4 w-full bg-white  "
                  : "mr-8 py-4 text-white text-base font-normal nav-link"
              }
            >
              <span>
                <Link href="/contact">Contact</Link>
              </span>
            </li>
          </ul>
        </div>{" "}
        <div className="flex">
          <button
            className={
              isNavExpanded
                ? "z-50 absolute top-16 right-3 rounded-md block md:hidden text-white p-4 bg-red-500 mt-2"
                : "rounded-md block md:hidden text-white p-4 bg-red-500 md:none absolute md:top-0 top-16 mt-2 md:right-0 right-3"
            }
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            {isNavExpanded ? (
              <FaRegWindowClose className="" />
            ) : (
              <FaBars className="" />
            )}
          </button>
          <button 
          className="rounded-md block text-white p-4  bg-red-500 md:relative absolute md:top-0 mt-2 top-16 md:right-0 right-16">
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
   
  );
}
