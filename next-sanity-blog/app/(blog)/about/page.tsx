import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  return (
    <div className="about flex flex-col md:flex-row items-center bg-white p-8 md:p-16">
      {/* Left Section for Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image width={1000} height={1000}
          src="/Suleman (2).png" // Replace this with your image path
          alt="Suleman Khan"
          className="rounded-md h-3/4 w-3/4"
        />
      </div>
      {/* Right Section for Content */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">ABOUT ME</h1>
        <h2 className="text-xl text-purple-600 font-semibold mb-4">Suleman khan - Developer</h2>
        <p className="text-gray-600 mb-6">
          I have built this blog website to share engaging content with my audience. 
          The website leverages modern technologies like Sanity CMS to fetch and manage data efficiently. 
          My aim is to create a seamless reading experience with dynamic and up-to-date posts.
        </p>
        {/* Social Media Links */}
        <div className="flex space-x-4">
          <Link href="https://behance.net">
            <div className="text-gray-500 hover:text-purple-600 text-2xl">
              <i className="fab fa-behance"></i>
            </div>
          </Link>
          <Link href="https://dribbble.com">
            <div className="text-gray-500 hover:text-purple-600 text-2xl">
              <i className="fab fa-dribbble"></i>
            </div>
          </Link>
          <Link href="https://twitter.com">
            <div className="text-gray-500 hover:text-purple-600 text-2xl">
              <i className="fab fa-twitter"></i>
            </div>
          </Link>
          <Link href="https://instagram.com">
            <div className="text-gray-500 hover:text-purple-600 text-2xl">
              <i className="fab fa-instagram"></i>
            </div>
          </Link>
          <Link href="https://linkedin.com">
            <div className="text-gray-500 hover:text-purple-600 text-2xl">
              <i className="fab fa-linkedin"></i>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;