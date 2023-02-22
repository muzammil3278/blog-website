import React from "react";
import { 
  FaComment, 
  FaCalendarAlt, 
  FaUserGraduate 
} from "react-icons/fa";
import Slider from "@/components/home/heroCard/slider";

export default function index() {
  return (
    <section className="container mx-auto ">
      <div className="flex flex-wrap pt-4 h-full">
      <div className="lg:w-3/5 w-full relative px-1 h-full pb-3">
        <div className="image-thumb relative overflow-hidden">
          <div className="overlay overlay-bg"></div>
          <img
            className="img-fluid-left img-fluid"
            src="https://preview.colorlib.com/theme/magazine/img/top-post1.jpg"
            alt=""
          />
        </div>
        <div className="top-post-details absolute bottom-8 left-10">
          <div className="tags">
            <a href="#" className="px-5 text-white py-2 bg-red-500">
              Food Habit
            </a>
          </div>
          <a href="image-post.html">
            <h3 className="text-white text-2xl font-bold py-4">
              A Discount Toner Cartridge Is Better Than Ever.
            </h3>
          </a>
          <ul className="meta flex text-white">
            <li className="pl-5">
              <a href="#" className="flex items-center">
                <span className="pr-1">
                  <FaUserGraduate />
                </span>
                Mark wiens
              </a>
            </li>
            <li className="pl-5">
              <a href="#" className="flex items-center">
                <span className="pr-1">
                  <FaCalendarAlt />
                </span>
                03 April, 2018
              </a>
            </li>
            <li className="pl-5">
              <a href="#" className="flex items-center">
                <span className="pr-1">
                  <FaComment />
                </span>
                06 Comments
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="lg:w-2/5 w-full px-1">
        <div className="single-top-post relative h-1/2 w-full ">
          <div className="image-thumb relative overflow-hidden">
            <div className="overlay overlay-bg"></div>
            <img
              className="img-fluid-1 w-full img-fluid"
              src="https://preview.colorlib.com/theme/magazine/img/top-post1.jpg"
              alt=""
            />
          </div>
          <div className="top-post-details absolute bottom-5 left-5">
            <div className="tags">
              <a href="#" className="px-5 text-white py-2 bg-red-500">
                Food Habit
              </a>
            </div>
            <a href="image-post.html">
              <h3 className="text-white text-2xl font-bold py-4">
                A Discount Toner Cartridge Is Better Than Ever.
              </h3>
            </a>
            <ul className="meta flex text-white">
              <li className="pl-5">
                <a href="#" className="flex items-center">
                  <span className="pr-1">
                    <FaUserGraduate />
                  </span>
                  Mark wiens
                </a>
              </li>
              <li className="pl-5">
                <a href="#" className="flex items-center">
                  <span className="pr-1">
                    <FaCalendarAlt />
                  </span>
                  03 April, 2018
                </a>
              </li>
              <li className="pl-5">
                <a href="#" className="flex items-center">
                  <span className="pr-1">
                    <FaComment />
                  </span>
                  06 Comments
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="single-top-post relative h-1/2 w-full">
          <div className="image-thumb relative overflow-hidden">
            <div className="overlay overlay-bg"></div>
            <img
              className="img-fluid-2 w-full img-fluid"
              src="https://preview.colorlib.com/theme/magazine/img/top-post1.jpg"
              alt=""
            />
          </div>
          <div className="top-post-details absolute bottom-5 left-5">
            <div className="tags">
              <a href="#" className="px-5 text-white py-2 bg-red-500">
                Food Habit
              </a>
            </div>
            <a href="image-post.html">
              <h3 className="text-white text-2xl font-bold py-4">
                A Discount Toner Cartridge Is Better Than Ever.
              </h3>
            </a>
            <ul className="meta flex text-white">
              <li className="pl-5">
                <a href="#" className="flex items-center">
                  <span className="pr-1">
                    <FaUserGraduate />
                  </span>
                  Mark wiens
                </a>
              </li>
              <li className="pl-5">
                <a href="#" className="flex items-center">
                  <span className="pr-1">
                    <FaCalendarAlt />
                  </span>
                  03 April, 2018
                </a>
              </li>
              <li className="pl-5">
                <a href="#" className="flex items-center">
                  <span className="pr-1">
                    <FaComment />
                  </span>
                  06 Comments
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>

      <Slider />
    </section>
  );
}
