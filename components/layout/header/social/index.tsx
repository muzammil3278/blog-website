import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { Tooltip } from "@chakra-ui/react";
export default function index() {
  return (
    <div className="social flex items-center justify-center ">
      <Link href="" className=" px-2">
        <Tooltip hasArrow label="Facebook" bg="red.500" closeDelay={200}>
          <Link href="">
            <FaFacebookF />
          </Link>
        </Tooltip>
      </Link>
      <Link href="" className=" px-2">
        <Tooltip hasArrow label="You Tube" bg="red.500" closeDelay={200}>
          <Link href="">
            <FaYoutube />
          </Link>
        </Tooltip>
      </Link>
      <Link href="" className=" px-2">
        <Tooltip hasArrow label="Linkedin" bg="red.500" closeDelay={200}>
          <Link href="">
            <FaLinkedin />
          </Link>
        </Tooltip>
      </Link>
      <Link href="" className=" px-2">
        <Tooltip hasArrow label="Instragram" bg="red.500" closeDelay={200}>
          <Link href="">
            <FaInstagram />
          </Link>
        </Tooltip>
      </Link>
    </div>
  );
}
