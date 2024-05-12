/* eslint-disable react/no-unescaped-entities */
"use client"
import SimpleHeader from '@/_component/Header/SimpleHeader'
import React from 'react'
import { bannerSlider } from './Data'
import SliderComponent from '@/_component/Util/SliderComponent'

function SignIn() {







  return (
    <div className='h-screen  '>
      <SimpleHeader />

      <div className="container mx-auto h-full ">
        <div className="grid grid-cols-2 items-stretch h-full">
          <div className='flex flex-col justify-center'>
            <div className="headingSection">
              <h1 class="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900   dark:text-white">Login <span class="text-blue-600 dark:text-blue-500">Into </span> your account.</h1>
              <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Enter you'r phone number, and enter to your account</p>
            </div>

            <form class="max-w-sm mt-10">
              <div class="mb-5">
                <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Phone Number</label>
                <input type="number" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter phone number" required />
              </div>



              <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
            </form>

          </div>
          <div className="canvasLogin relative">

            <div className='canvasLoginArea flex items-center h-full bg-cover bg-no-repeat absolute right-0 top-0 w-full -z-10' style={{ right: "-43px", backgroundImage: `url('${process.env.PUBLIC_IMAGE_URL}/promotion/check_promo.png')` }}>
              {/* <SliderComponent slidesToScroll={1} slidesToShow={1} dots={true} >
                {
                  bannerSlider.map((each, index) => {
                    return (
                      <div key={index} className='loginSliderItem '>
                        <figure class="rounded-xl p-8  bg-gray-700">
                          <img class=" h-24 rounded-full w-6" src="https://tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg" alt="" width="384" height="512"/>
                            <div class="pt-6 text-center space-y-4">
                              <blockquote>
                                <p class="text-lg text-white font-medium">
                                  “Tailwind CSS is the only framework that I've seen scale
                                  on large teams. It’s easy to customize, adapts to any design,
                                  and the build size is tiny.”
                                </p>
                              </blockquote>
                              <figcaption class="font-medium">
                                <div class="text-sky-500 dark:text-sky-400">
                                  Sarah Dayan
                                </div>
                                <div class="text-white">
                                  Staff Engineer, Algolia
                                </div>
                              </figcaption>
                            </div>
                        </figure>
                      </div>
                    )
                  })
                }
              </SliderComponent> */}
              <div style={{padding:"54px"}}>
                <h1 class="flex items-center text-2xl leading-3 font-bold text-white">{bannerSlider[0].title} </h1>
                <div className='flex mt-5 gap-5'>
                  <div className="iconCard"> </div>
                  <div className="iconCard"> </div>
                  <div className="iconCard"> </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn