
"use client";

import React from 'react';
import { HoverEffect } from './ui/card-hover-effect';

const Serv = () => {
  return (
    <section className="py-20 ">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-[rgb(94,236,255)]">
          Our Services
        </h2>
        <HoverEffect
          items={[
            {
              title: '#Tech Solutions',
              description: 'At MetaSynk, we offer cutting-edge tech services tailored to meet your needs. With our expertise in Web development, we deliver innovative solutions that drive success for your business.',
              link: '/tech-solutions',
            },
            {
              title: '#WEB 3 Services',
              description: 'We are specialized in Web3 services, harnessing the power of blockchain technology and decentralized applications (dApps) to revolutionize the way businesses operate online. With our expertise in Web3 technologies, we empower our clients to build innovative solutions that are secure, transparent, and decentralized.',
              link: '/web3-services',
            },
            {
              title: '#Digital Marketing',
              description: 'We are specialized in delivering comprehensive digital marketing services tailored to elevate your brand’s online presence and drive measurable results. In todays dynamic digital landscape, having a strategic approach to digital marketing is essential to stand out and achieve business growth.',
              link: '/digital-marketing',
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Serv;
