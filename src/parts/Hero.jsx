import React from "react";


import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="hero">
      <div className="container flex flex-col-reverse mx-auto lg:flex-row">
        <motion.div
          initial={{
            opacity: 0,

            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
            },
          }}
          viewport={{ once: true }}
          className="w-full mt-8 lg:w-1/2 xl:pl-12 sm:pr-2"
        >
          <h1 className="mb-5 text-3xl font-bold leading-tight sm:text-5xl text-theme-blue">
            Hello there! I&apos;m{" "}
            <span className="text-theme-purple">Deepika</span>
          </h1>

          <p className="mb-16 text-xl font-light leading-relaxed text-gray-400">
            An Aspiring Full Stack Developer currently pursuing Bachelor Degree
            in Computer Science and Engineering.
          </p>

          <a
            download={true}
            href="/Deepika.pdf"
            className="flex items-center py-5 text-xl text-white transition duration-200 rounded-lg shadow-2xl w-71 h-18 px-14 bg-theme-purple hover:bg-dark-theme-purple"
          >
            <span className="w-full">Download CV</span>
            <svg
              className="ml-2 text-white w-7 h-7 animate-bounce-x"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,

            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
            },
          }}
          viewport={{ once: true }}
          className="flex items-center justify-center order-first w-full md:w-full lg:order-last lg:w-full"
        >
          <div className="flex items-center justify-center order-first w-full md:w-full lg:order-last lg:w-full">
          <lottie-player src="https://lottie.host/42f51f58-62dc-4787-9771-3e076ff0b717/tQNnLrce4X.json"
           background="transparent"
            speed="1" 
            style={{width: "800px", height: "520px"}}
             loop autoplay direction="1" mode="normal">
          </lottie-player>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
