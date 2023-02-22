import React from "react";
import Input from "@/components/home/blog/left/input";
import Author from "@/components/home/blog/left/author";
import Social from "@/components/home/blog/left/social";
import Tag from "@/components/home/blog/left/tag";
import Cat from "@/components/home/blog/left/cat";
import Slider from "@/components/home/blog/left/slider";
import Ads from "@/components/home/blog/left/ads";
import Form from "@/components/home/blog/left/form";

export default function index() {
  return (
    <>
      {/* <Input /> */}
      <Author />
      <Social />
      <Tag />
      <Cat />
      {/* <Slider />
      <Ads />
      <Form /> */}
    </>
  );
}
