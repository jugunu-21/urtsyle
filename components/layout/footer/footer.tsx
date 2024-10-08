// "use client"
// import React from "react";
// import Newsletter from "./news-letter/news-letter";

// export default function Footer() {
//   return (
//     <div>
//    <Newsletter/>
//       <div className=" p-4 bg-gray-900 text-white text-sm pt-10">
//       <div className=" font-serif text-cyan-300 font-extrabold">
//               {/* {" " */}
//               URSTYLE{" "}
//             </div>
//         <div className=" text-sm  grid grid-cols-5 sm:grid-cols-3  sm:space-x-4  ">
//           <div className="pt-2  col-span-3 sm:col-span-1">
           
//             <div className="font-bold">Contact</div>
//             <div className="flex   ">
//               <div className="font-semibold ">Address:</div>
//               <div className="text-wrap">Chuaras, Sringar, Uttarakhand</div>
//             </div>

//             <div className="flex  ">
//               <div className="font-semibold">phone:</div>
//               <div className="text-wrap">+6306441401/ (+91)0123456789</div>
            
//             </div>
//             <div>
//               <span className="font-semibold text-wrap">hours:</span>10:00-18:00, mon-sat
//             </div>
//           </div>
//           <div className="pt-2  col-span-2 sm:col-span-1">
//             <div className="font-bold">About</div>
//             <div>About us</div>
//             <div>Delivery Information</div>
//             <div>Privacy Policy</div>
//             <div>Terms & Conditions</div>
//             <div>Contact us</div>
//           </div>
//           <div className="pt-2  col-span-3 sm:col-span-1">
//             <div className="font-bold">My Account</div>
//             <div>Sign In</div>
//             <div>View Cart</div>
//             <div>My Wishlist</div>
//             <div>Track My Order</div>
//             <div>Help</div>
//           </div>

//         </div>
       
//       </div>
//       <div className="pl-6 pt-4 pb-10">© 2023-2024 urstyle.com </div>
//     </div>
//   );
// }


"use client"
import React from "react";
import Newsletter from "./news-letter/news-letter";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <Newsletter />


      <footer className="text-gray-600 body-font font-serif">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold  text-gray-900 tracking-widest text-base mb-3">Contact</h2>
              <nav className="list-none mb-10">
                <li className="flex   ">
                  <Link href="#" className="text-gray-600 hover:text-gray-800">Address:-</Link>
                  <Link href="#" className="text-gray-600 hover:text-gray-800">Chuaras, Sringar, Uttarakhand</Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-800">phone:-</Link>
                  <Link href="#" className="text-gray-600 hover:text-gray-800">+6306441401/ (+91)0123456789</Link>
                </li>
                {/* <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-800"><span className="font-semibold text-wrap">hours:</span>10:00-18:00, mon-sat</Link>
                </li> */}
               
                {/* <div className="font-bold">Contact</div> */}

              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-base mb-3">About</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-800">Delivery Information</Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-800">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-800">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-800">Contact us</Link>
                </li>
                
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-base mb-3">My Account</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-800">Sign In</Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-800">View Cart</Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-800">My Wishlist</Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-800">Track My Order</Link>
                </li>

                
              </nav>
            </div>
            {/* <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600">Placeholder</label>
                  <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
              </div>
              <p className="text-gray-500 text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
              <br className="lg:block hidden" />
              </p>
            </div> */}
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <Link href="#" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg> */}
              <span className="ml-3 text-xl">Urstyle</span>
            </Link>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2020 Urstyle —
              <Link  href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@jugunu-21</Link>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <Link href="#" className="text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </Link>
              <Link href="#" className="ml-3 text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </Link>
              <Link href="#" className="ml-3 text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </Link>
              <Link href="#" className="ml-3 text-gray-500">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </Link>
            </span>
          </div>
        </div>
      </footer>

  
    </div>
  );
}
