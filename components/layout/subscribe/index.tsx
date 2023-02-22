import React from "react";

export default function index() {
  return (
    <section className="subscribe-area pt-20 mb-48">
      <div className="container mx-auto px-2">
        <div className="flex justify-center items-center flex-wrap">
            <div className="subscribe-caption text-center md:w-8/12 w-full">
              <h3 className="text-5xl block font-bold mb-5 pt-9">Lorem ipsum dolor sit amet.</h3>
              <p className="text-gray-500 text-base pb-7 mb-5 font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate ea aliquam sit dolores ipsum vero, inventore omnis
                eaque facilis, cum et assumenda reiciendis non mollitia!
              </p>
            </div>
            <div className="subscribe-caption lg:w-6/12 md:w-9/12 w-full">
              <form action="#" className="relative ">
                <input type="text" 
                placeholder="Enter your email" 
                className="w-full mx-auto outline-none relative border-none rounded-md text-base bg-gray-200 h-20 py-6 pr-6 pl-20"/>
                <button className="text-xl border-none absolute bg-red-500 ml-1 pointer right-1 text-white top-3 px-6 py-3 rounded-lg font-medium">Subscribe </button>
                <span className="text-2xl font-normal absolute left-6 top-6 text-red-500 uppercase mb-3 block">@</span>
              </form>
            </div>
        </div>
      </div>
    </section>
  );
}
