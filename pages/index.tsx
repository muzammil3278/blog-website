import React from "react";
import HeroCard from "@/components/home/heroCard";
import Left from "@/components/home/blog/left";
import Right from "@/components/home/blog/right";

export default function index() {
 
  return (
    <>
    <HeroCard />
    <div className="container mx-auto">
    <div className="flex flex-wrap mt-14">
      <div className="lg:basis-8/12 basis-full"><Right /></div>
      <div className="lg:basis-4/12 basis-full"><Left /></div>
    </div>
    </div>
    
    </>
  );
}
