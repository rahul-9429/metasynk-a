import React from 'react';
// import { Instagram, Linkedin , Mail } from 'lucide-react';
import Link from 'next/link';

const FooterD = () => {
  return (
    <div className="text-white py-16 bg-black">
        
      <div className="container mx-auto flex flex-col sm:flex-row gap-5 justify-between px-5">
        
        <div className="flex flex-col items-center gap-3 sm:w-1/4">
        <h1 className="text-3xl font-bold text-center text-[rgb(94,236,255)]">
                 Metasynk</h1>
            <span className=' flex gap-6 '>
                {/* <a href="" className=''><Instagram className=' text-white/70 hover:text-white transition-all duration-200 '/>
                </a>                
                <a href=""><Linkedin className='text-white/70 hover:text-white transition-all duration-200 ' />
                </a>
                <a href=""><Mail className='text-white/70 hover:text-white transition-all duration-200 ' />
                </a> */}
            </span>
          <div className="flex gap-4">
            
          </div>
        </div>

        <div className="flex sm:w-1/2 justify-around gap-5">
        <div>
  <h1 className="text-2xl font-semibold pb-2">Useful Links</h1>
  <ul className="text-gray-400 space-y-2">
    <li>
      <Link href="/" className="hover:text-[rgb(94,236,255)] transform transition-all duration-150 font-semibold">
        Home
      </Link>
    </li>
    <li>
      <Link href="/AboutUs" className="hover:text-[rgb(94,236,255)] transform transition-all duration-150 font-semibold">
        About
      </Link>
    </li>
    <li>
      <Link href="/ContactUs" className="hover:text-[rgb(94,236,255)] transform transition-all duration-150 font-semibold">
        Contact
      </Link>
    </li>
  </ul>
</div>
<div>
  <h1 className="text-2xl font-semibold pb-2">Our Services</h1>
  <ul className="text-gray-400 space-y-2 list-none">
    <li>
      <Link href="" className="hover:text-[rgb(94,236,255)] transform transition-all duration-150 font-semibold cursor-pointer">
       Tech Solutions
      </Link>
    </li>            
    <li>
      <Link href="" className="hover:text-[rgb(94,236,255)] transform transition-all duration-150 font-semibold cursor-pointer">
        Web 3 Solutions
      </Link>
    </li>
    <li>
      <Link href="" className="hover:text-[rgb(94,236,255)] transform transition-all duration-150 font-semibold cursor-pointer">
        Digital Marketing
      </Link>
    </li>
  </ul>
</div>
        </div>

        

      </div>

      <div className="text-center text-gray-500 text mt-6">
        <p>Metasynk &reg;. All rights reserved 2025</p>
      </div>
    </div>
  );
};

export default FooterD;