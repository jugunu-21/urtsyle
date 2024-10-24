import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Sitelink from '@/components/reusable-components/site-link';
import { IProduct } from '../interface';

function Summary({ products, collectionId }: {
  products:IProduct[], collectionId:string
}) {
  return (
    <>
      {products.map((cart, cartIndex) => (
        <div key={cartIndex}>
          <div className=" grid grid-cols-2 md:flex md:ml-10 m-2 bg-stone-200 ">
            {cart && (
              <>
                <div className="m-2  bg-cover bg-top   sm:w-52 h-52  bg-white hover:border-4 rounded-lg   hover:border-stone-300">
                  <Image
                    width={100}
                    height={100}
                    className=" w-full h-full object-cover align-middle "
                    src={cart.image}
                    alt=""
                  />

                </div>

                <div className=" m-2 pl-3  ">
                  <div className="     rounded-md  font-bold ">
                    {cart.name}
                  </div>
                  <div className=" flex flex-row  content-center ">
                    <div className="w-28">
                      <div className="h-4 w-6">
                        {/* <Star len={avgg({ groupid: groupIndex, cartid: cartIndex }).avgRating} /> */}
                      </div></div>
                    <div className="ml-2 content-center">
                      {/* {avgg({ groupid: groupIndex, cartid: cartIndex }).avgRating} Reviews */}
                    </div>
                  </div>
                  <div className="font-semibold my-1">{cart.price}</div>
                  <div className="mb-2">{cart.description}</div>
                  <div className="h-8 w-28 my-2">
                    <Sitelink setsitelink={cart.image} sitelink={cart.link} />
                  </div>


                  <div className=" flex my-2 items-center space-x-3 font-medium">
                    <Link
                      href={`/more-details/${collectionId}/${cart.id}`}
                      // rel="noopener noreferrer"
                      className=" flex   items-center   rounded-lg bg-stone-300 hover:bg-stone-400 p-1  "
                    >
                      Details
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2} // Corrected property name
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="my-4 border-t border-gray-200"></div>
        </div>
      ))}
    </>
  );
}

export default Summary;
